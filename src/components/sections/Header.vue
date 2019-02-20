<template>
    <header class="header">
        <div class="container">
            <div class="header__logo">
                <a href="#">
                    <img :src="header.logo.src" :alt="header.logo.alt">
                </a>
            </div>
            <div class="header__adress">
                <p v-for="(item, i) in header.adress"
                    :key="`adress-${i}`"
                    v-html="item">
                </p>
            </div>
            <div class="header__phone">
                <p
                    v-for="item in header.phone"
                    :key="item.name"
                    :class="`header__phone-${item.name}`"
                    v-text="item.data">
                </p>
            </div>
            <div class="header__social">
                <a v-for="item in header.social"
                    :key="item.name"
                    :href="item.link"
                    :title="item.title"
                    target="_blank">
                    <img :src="item.src" ::alt="item.alt">
                </a>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    name: "Header",
    data() {
        return {
            header: this.$store.getters.setHeader
        }
    }
};
</script>

<style lang="scss">
    @import '../../assets/scss/app.scss';

    .header {
        padding: 70px 0 35px;
        font-size: 0;
        text-align: right;

        .container > div {
            display: inline-block;
            vertical-align: top;
        }

        &__logo {
            float: left;
            width: 588px;
        }

        &__adress {
            font-size: 24px;
            text-align: right;
            margin: 4px 0 0;

            p {
                padding: 0;
                line-height: 1;
                margin: 0 0 4px;
            }
        }

        &__phone {
            text-align: right;
            margin: 1px 0 0 132px;

            &-blue {
                padding: 0;
                font-size: 39px;
                line-height: 1;
                color: $colorBlue;
                margin: 0 0 1px;
            }

            &-grey {
                padding: 0;
                font-size: 30px;
                line-height: 1;
                margin: 0 0 6px;
            }

            &-order {
                font-size: 29px;
                line-height: 0.9;
                padding: 0 20px 4px;
                text-align: center;
                border-radius: 24px;
                border: 1px solid $colorBlue;
                margin: 0 0 1px;
                cursor: pointer;
            }
        }

        &__social {
            color: #000;
            margin: -1px 0 0 36px;

            a {
                display: block;
                width: 35px;
                height: 35px;
                padding: 7px 0 0 1px;
                text-align: center;
                border-radius: 50%;
                background-color: $colorGrey2;
                margin: 0 0 4px;

                img {
                    width: 22px;
                }

                &:last-child {
                    padding: 11px 0 0;

                    img {
                        width: 26px;
                    }
                }
            }
        }
    }
</style>
