<template>
  <div class="form__container">
    <p class="title">Форма для создания документа</p>
    <p class="form__subtitle">
      Заполните данную форму для того, чтобы мы помогли вам составить обращение 
      с жалобой в управляющую компанию. Обращение составится автоматически!
    </p>
    
    <form class="form" @submit.prevent="generateDocument">
      <input class="form__input" type="text" placeholder="Кому" v-model="form.recipient" required>
      <input class="form__input" type="text" placeholder="От кого" v-model="form.sender" required>
      <input class="form__input" type="text" placeholder="Адрес" v-model="form.address" required>
      <input class="form__input" type="text" placeholder="Организация" v-model="form.organization" required>
      <textarea rows="40" cols="50" placeholder="Описание проблемы"v-model="form.problem" required></textarea>
      <button class="form__button" type="submit">Скачать заявление</button>
    </form>
  </div>
</template>

<script>
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';

export default {
  name: 'ComplaintForm',
  data() {
    return {
      form: {
        recipient: '',
        sender: '',
        address: '',
        organization: '',
        problem: ''
      }
    }
  },
  methods: {
    async generateDocument() {
      try {
        const response = await fetch('/template.docx');

        if (!response.ok) {
          throw new Error(`Ошибка загрузки шаблона: ${response.status}`);
        }
        const template = await response.arrayBuffer();

        const zip = new PizZip(template);
        const doc = new Docxtemplater(zip, {
          paragraphLoop: true,
          linebreaks: true,
        });

        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('ru-RU', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        });

        doc.render({
          recipient: this.form.recipient,
          sender: this.form.sender,
          address: this.form.address,
          organization: this.form.organization,
          problem: this.form.problem,
          date: formattedDate
        });

        const out = doc.getZip().generate({
          type: 'blob',
          mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        });

        this.downloadFile(out, 'zayavlenie.docx');

      } catch (error) {
        alert('Произошла ошибка при создании документа: ' + error.message);
      }
    },
    
    downloadFile(blob, filename) {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    }
  }
}
</script>

<style lang="scss">
    textarea{
        height: 150px;
        width: 100%;
        background-color: #FFFFFF;
        font-size: 16px;
        font-family: var(--font);
        font-weight: 400;
        border: 0px;
        padding: 5px 10px;
        border-radius: 5px;
        resize: horizontal;
    }

    .form{
        display: flex;
        flex-direction: column;
        width: 60%;
        gap: 40px;
        background-color: #B4DDF4;
        padding: 20px 30px;
        border-radius: 20px;
        &__subtitle{
            font-family: var(--font);
            font-size: 20px;
            font-weight: 400;
        }
        &__container{
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        &__input{
            width: 100%;
            background-color: #FFFFFF;
            font-size: 16px;
            font-family: var(--font);
            font-weight: 400;
            border: 0px;
            padding: 5px 10px;
            border-radius: 5px;
            height: 40px;
            resize: horizontal;
        }

        &__block{
            padding: 20px;
            background-color: aqua;
            border-radius: 50px;
        }

        &__button{
            padding: 10px 5px;
            font-size: 20px;
            font-family: var(--font);
            background-color: #FF7043;
            border: 0px;
            color: #ffffff;
            border-radius: 5px;
            min-width: 0px;
        }
    }

    @media(max-width: 1000px){
        .form{
            width: 100%;
        }
    }

    @media(max-width: 600px){
        .form__subtitle{
            font-size: 16px;
        }
    }
</style>

