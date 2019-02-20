<template lang="pug">
    .contacts
        .contacts__left
        .contacts__right
            .contacts__title
                h2(v-html="contacts.title")
            .contacts__adress(v-html="contacts.adress")
            .contacts__phone(v-html="contacts.phone")
            .contacts__mail(v-html="contacts.mail")
            .contacts__social
                a(v-for="item in contacts.social.icons"
                    :key="item.name"
                    :href="item.link"
                    :title="item.title"
                    target="_blank"
                )
                    img(:src="item.src" ::alt="item.alt")
                p {{ contacts.social.hashtag }}
</template>

<script>

export default {
    name: 'Contacts',
    data() {
        return {
            contacts: {
                title: 'Контакты:',
                adress: '<span>Адрес:</span><br />355042, г. Ставрополь,<br />ул. 45 Параллель, 22г',
                phone: '<span>Телефон:</span><br />+7 (8652) 67‒69‒06<br />+7 (8652) 67‒69‒07',
                mail: '<span>E-mail:</span><br />stomatstav@mail.ru',
                social: {
                    hashtag: '#stomatstav',
                    icons: [
                        {
                            name: 'instagram',
                            link: '#',
                            src: '/static/images/social/instagram.svg',
                            alt: '',
                            title: 'Мы в инстаграмм'
                        },
                        {
                            name: 'vk',
                            link: 'vk.ru',
                            src: '/static/images/social/vk.svg',
                            alt: '',
                            title: 'Наша группа в VK'
                        },
                        {
                            name: 'ok',
                            link: 'ok.ru',
                            src: '/static/images/social/ok.svg',
                            alt: '',
                            title: 'Мы в однокласниках'
                        },
                    ]
                }
            }
        }
    }
}
</script>

<style lang="scss">
    @import '../../assets/scss/app.scss';

    .contacts {
        height: 844px;

        > div {
            @extend %dib;
        }

        &__left {
            width: 50%;
            padding: 44.4% 0 0;
            background: url('/static/images/contacts/map.png') center / cover no-repeat;
        }

        &__right {
            width: 50%;
            height: 100%;
            padding: 127px 0 0 122px;
            background: $colorGrey3 url('/static/images/logo/logo_bottom.svg') no-repeat;
            background-position-x: 233%;
            background-position-y: 123%;
            background-size: 89%;
        }

        &__title {
            margin: 0 0 54px;

            h2 {
                font-size: 60px;
                font-weight: 600;
                letter-spacing: 1.5px;
                text-transform: uppercase;
                color: $colorGrey2;
                margin: 0;
            }
        }

        &__adress,
        &__phone,
        &__mail,
        &__social {
            font-size: 30px;
            line-height: 36px;
            font-weight: 600;
            letter-spacing: 0.8px;
            color: $colorGrey2;

            span {
                color: $colorBlue6;
            }
        }

        &__phone {
            margin: 0 0 36px;

        }

        &__mail {
            margin: 0 0 39px;
        }

        &__social {
            a {
                @extend %dib;
                width: 35px;
                height: 35px;
                text-align: center;
                border-radius: 50%;
                background-color: $colorBlue6;
                margin: 0 6px 0 0;

                &:first-child {
                    padding: 1.3px 0 0 1px;
                    margin: 0 6.5px 0 -5px;
                }

                &:nth-child(2) {
                    img {
                        transform: translate3d(0, -3px, 0);
                    }
                }

                &:last-child {
                    padding: 1px 0 0;

                    img {
                        max-width: 73%;
                        max-height: 73%;
                    }
                }
            }

            img {
                max-width: 67%;
                max-height: 67%;
            }

            p {
                margin: 0;
            }
        }
    }
</style>
