<template>
  <div class="search">
    <div class="search__content">
      <img src="../assets/img/geo.svg" alt="" />
      <div class="search__container">
        <input
          ref="inputRef"
          type="text"
          placeholder="Введите адрес..."
          class="search__input"
        />
        <div ref="suggestionsRef" class="suggestions-list"></div>
      </div>
    </div>
    <button class="search__button">
      <span>Проверить</span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const inputRef = ref(null);
const suggestionsRef = ref(null);

const addresses = [
  "Светланская ул.",
  "Светланский пер.",
  "Светлая ул.",
  "Светланская ул. 1",
  "Светланская ул. 3",
  "Светланская ул. 4",
  "Светланская ул. 5",
  "Светланская ул. 5А",
  "Светланская ул. 6",
  "Светланская ул. 7",
  "Светланская ул. 7/11",
  "Светланская ул. 8"
];

onMounted(() => {
  const input = inputRef.value;
  const suggestions = suggestionsRef.value;

  if (!input || !suggestions) return;

  const handleInput = () => {
    const query = input.value.toLowerCase().trim();
    
    if (query.length === 0) {
      suggestions.innerHTML = '';
      return;
    }
    
    const filtered = addresses.filter(address => 
      address.toLowerCase().includes(query)
    );
    
    suggestions.innerHTML = '';
    
    filtered.forEach(address => {
      const div = document.createElement('div');
      div.textContent = address;
      div.style.padding = '8px 12px';
      div.style.cursor = 'pointer';
      div.addEventListener('click', () => {
        input.value = address;
        suggestions.innerHTML = '';
      });
      suggestions.appendChild(div);
    });
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest('.search-container')) {
      suggestions.innerHTML = '';
    }
  };

  input.addEventListener('input', handleInput);
  document.addEventListener('click', handleClickOutside);
});
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 9px 16px;
  background-color: #03a9f4;
  border-radius: 20px;
  align-items: center;

  &__input{
    font-size: 20px;
  }

  &__content {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
  }

  &__container {
    position: relative;
    flex: 1;
    min-width: 0; // позволяет input сжиматься
  }

  &__button {
    border-radius: 15px;
    border: 0;
    color: #085685;
    font-family: var(--font);
    font-size: 20px;
    font-weight: 700;
    padding: 10px 25px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    white-space: nowrap; // кнопка не переносится

    &:hover {
      background-color: #b4ddf4;
    }
  }
}

input {
  width: 100%;
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.suggestions-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-top: none;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

@media (max-width: 700px) {
  img {
    width: 30px;
  }

  .search__button {
    font-size: 14px;
    padding: 10px 15px;
  }

  .search__input{
    font-size: 10px;
  }
}
</style>