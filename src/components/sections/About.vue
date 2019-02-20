<template lang="pug">
    .about
        .container
            .about__item( v-for="(item, i) in about" :key="`about-${i}`")
                .about__item-image
                    img(:src="item.src" alt="")
                .about__item-title
                    h4(v-html="item.title")
                .about__item-content(v-html="item.text")
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            about: this.$store.getters.setAbout
        }
    }
}
</script>

<style lang="scss">
    @import '../../assets/scss/app.scss';

    .about {
        padding: 48px 0 14px;

        &__item {
            @extend %dib;
            width: 47.5%;
            height: 400px;
            margin: 0 0 34px;

            &:nth-child(odd) {
                margin: 0 5% 34px 0;
            }
        }

        &__item-image {
            text-align: center;
            margin: 0 0 18px;

            img {
                width: 64px;
            }
        }

        &__item-title {
            text-align: center;
            margin: 0 0 23px;
            overflow: hidden;

            h4 {
                position: relative;
                @extend %dib;
                min-width: 450px;
                padding: 0 30px;
                font-size: 34px;
                font-weight: 600;
                text-transform: uppercase;
                text-align: center;
                color: $colorBlue4;
                border-radius: 29px;
                border: 2px solid $colorGrey;
                margin: 0;

                &:before,
                &:after {
                    position: absolute;
                    content: '';
                    top: 50%;
                    left: -130px;
                    width: 130px;
                    height: 2px;
                    display: block;
                    background-color: $colorGrey;
                }

                &:after {
                    left: auto;
                    right: -130px;
                }
            }
        }

        &__item-content {
            width: 88%;
            font-size: 30px;
            line-height: 36px;
            text-align: justify;
            text-indent: 20px;
            color: $colorGrey;
            margin: 0 auto;

        }


    }
</style>
