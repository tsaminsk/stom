<template lang="pug">
    .partners
        .container
            .partners__title
                h2 наши партнеры:
            .partners__content
                .partners__item(v-for="(item, i) in partners" :key="`partners-${i}`")
                    .partners__item-left
                        .partners__item-left--wrapp(:style="{ backgroundImage: `url(${item.img})` }")
                    .partners__item-right
                        .partners__item-right--icon(:style="{ backgroundImage: `url(${item.iconSrc})` }")
                        .partners__item-right--context(v-html="item.context")

</template>

<script>
export default {
    name: 'Partners',
    data() {
        return {
            partners: [
                {name: 'star smile', img: '/static/images/partners/partners.jpg', context: 'Выравнивание зубов<br /><b>без брекетов</b>', iconSrc: '/static/images/partners/star_smile.png'}
            ]
        }
    }
}
</script>

<style lang="scss">
    @import '../../assets/scss/app.scss';

    .partners {
        padding: 51px 0 116px;

        &__title {
            text-align: center;
            margin: 0 0 34px;

            h2 {
                font-size: 60px;
                font-weight: 600;
                text-transform: uppercase;
                color: $colorGrey2;
                margin: 0 0 0 56px;
            }
        }

        &__content {
            padding: 0 41px 0 37px;

        }

        &__item {
            padding: 44px 0 46px;
            outline: 1px solid #5884ae;
            border: 1px solid #95b8d3;
            background: linear-gradient(to right, $colorBlue5, #fff 60%);

            > div {
                @extend %dib;
            }
        }

        &__item-left {
            width: 48.4%;
        }

        &__item-left--wrapp {
            width: 450px;
            height: 450px;
            border-radius: 50%;
            border: 28px solid $colorBlueViolet;
            background: no-repeat center / cover;
            margin: auto;

            img {
                width: 100%;
            }
        }

        &__item-right {
            width: 51.6%;
            height: 100%;
            padding: 0 172px 0 0;
        }

        &__item-right--icon {
            padding: 44% 0 0;
            background: no-repeat center bottom;
            margin: 0 auto 41px;

            img {
                width: 75%;
            }
        }

        &__item-right--context {
            font-size: 60px;
            line-height: 1;
            text-transform: uppercase;
            text-align: center;
            color: $colorBlue6;
        }
    }
</style>
