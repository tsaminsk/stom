<template>
    <section class="preferences">
        <div class="preferences__image"> </div>
            <div class="container">
                <div class="preferences__title">
                    <h2 v-html="pref.title">наши преимущества:</h2>
                </div>
                <ul class="preferences__content">
                    <li class="preferences__item"
                        v-for="(item, i) in pref.items"
                        :key="`pref-${i}`"
                        v-html="item"
                        ></li>
                </ul>

            </div>
    </section>
</template>

<script>
export default {
    name: 'Preferences',
    data() {
        return {
            pref: this.$store.getters.setPreferences
        }
    }
}
</script>

<style lang="scss">
    @import '../../assets/scss/app.scss';

    .preferences {
        position: relative;
        padding: 0 0 55px;
        background: $colorGrey3;

        &__image {
            position: absolute;
            top: 0;
            right: 0;
            width: 50%;
            height: 100%;
            background: url('/static/images/preferences/preferences.jpg') center center no-repeat;
            background-size: cover;
        }

        &__title {
            padding: 42px 0 35px;

            h2 {
                font-size: 60px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                color: $colorBlue3;
                margin: 0 0 0 -12px;
            }
        }

        &__content {
            width: 50%;
            padding: 0 0 0 37px;
            margin: 0;
        }

        &__item {
            position: relative;
            font-size: 30px;
            line-height: 32px;
            text-transform: uppercase;
            color: $colorGrey2;
            list-style: none;
            margin: 0 0 20px;

            &:before {
                content: '';
                position: absolute;
                top: 6px;
                left: -43px;
                display: inline-block;
                vertical-align: top;
                width: 20px;
                height: 20px;
                background: url('/static/images/preferences/list-img.png') center center no-repeat;
                background-size: cover;
            }
        }


    }
</style>
