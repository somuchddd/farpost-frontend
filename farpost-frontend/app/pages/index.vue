<template>
    <main class="main">
        <section class="main__content _container">
            <div class="main__intro">
                <Intro></Intro>
            </div>
            <div class="main__adds">
                <Adds></Adds>
            </div>
            <div class="main__search">
                <Search></Search>
            </div>
            <div class="main__cards">
                <Cards></Cards>
            </div>
            <div class="main__break">
                <Breakdown></Breakdown>
            </div>
            <div class="main__org">
                <Organizations></Organizations>
            </div>
            <div class="main__map">
                <Map></Map>
            </div>
        </section>
        <section class="main__feedback">
            <div class="blue__wave"></div>
            <div class="main__feedback-content">
                <div class="_container">
                    <Feedback class="feedback"></Feedback>
                </div>
            </div>
            <div class="orange__wave"></div>
        </section>
    </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .map{
        width: 100%;
    }

    .blue__wave{
        background: url('../assets/img/blue_wave.svg');
        background-size: cover;
        height: 100px;
    }

    .orange__wave{
        background: url('../assets/img/orange_wave.svg');
        background-size: cover;
        height: 100px;
    }

    .main{
        display: flex;
        flex-direction: column;
        gap: 45px;
        margin-top: 52px;
        &__feedback-content{
            background-color: #03A9F4;
        }
        &__content{
            width: 100%;
            display: grid;
            grid-template-columns: 3fr 1fr;
            grid-template-areas: "intro adds"
                                 "search ."
                                 "break org"
                                 "cards cards"
                                 "map map";
            row-gap: 45px;
            column-gap: 30px;
            box-sizing: border-box;
        }
        &__intro{
            grid-area: intro;
        }
        &__adds{
            grid-area: adds;
            display: flex;
            justify-content: flex-end;
        }
        &__search{
            grid-area: search;
        }
        &__cards{
            grid-area: cards;
        }
        &__break{
            grid-area: break;
        }
        &__org{
                grid-area: org;
        }
        &__map{
            grid-area: map;
        }
    }

    .main__content>div{
        min-width: 0;
    }
    
    @media(max-width: 1200px){
        .main__content{
            grid-template-columns: 1fr;
            grid-template-areas: "intro"
                             "search"
                             "break"
                             "cards"
                             "org"
                             "map"
                             "adds";
        }
    }

    @media(max-width: 600px){
        .main{
            margin-top: 25px;
            gap: 20px;
            &__content{
                row-gap: 20px;
            }
        }
    }
</style>