<template>
    <div id="app">
        <Header />
        <Nav />
        <Slider />
        <div class="app__wrapp">
            <Button :params="appParamsButton"/>
        </div>
        <Services />
        <Preferences />
        <About />
        <Numbers />
        <Partners />
        <Contacts />
        <Footer />
    </div>
</template>

<script>

export default {
    name: "App",
    data() {
        return {
            appParamsButton: this.$store.getters.setAppParamsButton,
            params1: {
                class: "button-big",
                text: "Получить консультацию"
            },
            params2: {
                class: "button-small",
                text: "Узнать больше"
            }

        }
    }
};
</script>

<style lang="scss">
    @import './assets/scss/global.scss';

    #app {
        font-family: "Calibri", sans-serif;

        .app__wrapp  {
            max-width: 100%;
            padding: 46px 0 49px;
            text-align: center;
            background-color: #e5e9ed;
        }
    }
</style>
