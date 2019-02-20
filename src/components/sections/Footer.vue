<template lang="pug">
    footer.footer
        .container
            .footer__col
                .footer__logo
                    img(:src="footer.blockLogo.src" alt="")
                .footer__politics
                    a(:href="footer.blockLogo.link" v-html="footer.blockLogo.context")

            .footer__col
                .footer__info-link
                    a(href="#" v-html="footer.blockInfo.title")
                .footer__info-text
                    p(v-for="(item, i) in footer.blockInfo.context" :key="`block-info-${i}`" v-html="item")

            .footer__col
                ul.footer__nav
                    li(v-for="(item, i) in footer.nav" :key="`footer-nav-${i}`")
                        a(:href="item.link" v-html="item.name")

            .footer__col
                .footer__contacts
                    .footer__social
                        a(v-for="item in footer.contacts.icons"
                            :key="item.name"
                            :href="item.link"
                            :title="item.title"
                            target="_blank"
                        )
                            img(:src="item.src" ::alt="item.alt")
                    .footer__phones
                        p(v-for="(item, i) in footer.contacts.phones" :key="`foot-phone-${i}`")
                            a(:href="`tel:${item.number}`" v-html="item.context")
                    .footer__email
                        p
                            a(:href="`ailto:${footer.contacts.email}`" v-html="footer.contacts.email")

</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            footer: this.$store.getters.setFooterInfo
        }
    }
}
</script>

<style lang="scss">
    @import '../../assets/scss/app.scss';

    .footer {
        padding: 81px 0 111px;
        background-color: $colorGrey;

        &__col {
            @extend %dib;

            &:first-child {
                width: 26%;
                margin: 0 85px 0 0;
            }

            &:nth-child(2) {
                width: 27%;
                margin: 0 108px 0 0;
            }

            &:nth-child(3) {
                width: 13%;
                margin: 0 108px 0 0;
            }

            &:last-child {
                width: 15%;
            }
        }

        &__logo {
            padding: 0 16px 0 0;
            margin: 0 0 30px;
        }

        &__politics {
            a {
                font-size: 30px;
                letter-spacing: -0.55px;
                text-decoration: none;
                color: #fff;
            }
        }

        &__info-link {
            margin: 0 0 28px;

            a {
                padding: 4px 49px 7px;
                font-size: 30px;
                line-height: 43px;
                text-decoration: none;
                color: #fff;
                border-radius: 24px;
                background-color: $colorBlue;
            }
        }

        &__info-text {
            padding: 0 0 0 8px;

            p {
                font-size: 18px;
                line-height: 22px;
                font-weight: 300;
                letter-spacing: -0.43px;
                color: #fff;
                margin: 0;
            }
        }

        &__nav {
            padding: 0;
            margin: -1px 0 0;

            li {
                height: 30px;
                padding: 0;
                list-style: none;
                margin: 0 0 6px;
            }

            a {
                font-size: 30px;
                line-height: 22px;
                text-decoration: none;
                color: #fff;
            }
        }

        &__contacts {
            text-align: right;
        }

        &__social {
            margin: -8px -10px 20px 0;

            a {
                @extend %dib;
                width: 62px;
                height: 62px;
                text-align: center;
                border-radius: 50%;
                background-color: $colorBlue6;
                margin: 0 10px 0 0;

                &:first-child img {
                    transform: translate3d(2px, 12px, 0);
                    max-width: 64%;
                    max-height: 64%;
                }

                &:nth-child(2) img {
                    transform: translate3d(0, 21px, 0);
                }

                &:last-child img {
                    transform: translate3d(2px, 9px, 0);
                }
            }

            img {
                max-width: 73%;
                max-height: 73%;
            }
        }

        &__phones,
        &__email {
            text-align: right;

            p {
                margin: 0 -3px 0 0;
            }

            a {
                font-size: 27px;
                line-height: 33px;
                letter-spacing: 0.6px;
                color: #fff;
                text-decoration: none;
            }
        }

        &__email p {
            margin: -2px 4px 0 0;

            a {
                letter-spacing: 0;
            }
        }
    }
</style>
