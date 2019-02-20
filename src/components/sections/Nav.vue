<template>
    <div class="nav">
        <div class="container">
            <ul class="nav__menu">
                <li class="nav__menu-item"
                    v-for="(item, i) in nav.navMenu"
                    :key="`nav-menu-${i}`"
                    >
                    <a v-if="item.name === 'Home'" :href="item.link">
                        <img :src="item.src" alt="">
                    </a>
                    <a v-else :href="item.link" v-text="item.name"></a>
                </li>
            </ul>
            <div class="nav__right">
                <a :href="nav.navRight.link">
                    <span>
                        <img :src="nav.navRight.src" alt="">
                    </span>
                    <span v-html="nav.navRight.text">

                    </span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Nav',
    data() {
        return {
            nav: this.$store.getters.setNavs
        }
    }
}
</script>

<style lang="scss">
    @import '../../assets/scss/app.scss';

    .nav {
        height: 93px;
        font-size: 0;
        background: linear-gradient(to right, $colorGrey2 calc(100vw - (100vw - 1584px) / 2), $colorBrown calc(100vw - (100vw - 1584px) / 2));

        &__menu {
            display: inline-block;
            padding: 0;
        }

        &__menu-item {
            display: inline-block;
            padding: 0 36px;
            font-size: 32px;
            line-height: 93px;

            &:first-child {
                padding: 0 17px;
                margin: 0 12px 0 0;
            }

            &:hover {
                background-color: $colorBrown;
            }

            img {
                width: 30px;
                transform: translate3d(0, 3px, 0);
            }

            a {
                text-decoration: none;
                color: #fff;
            }
        }

        &__right {
            float: right;
            height: 93px;
            background-color: $colorBrown;


            img {
                width: 55px;
                margin: 0 18px 6px 32px;
            }

            span {
                display: inline-block;
                height: 100%;
                font-size: 25px;
                line-height: 1;
                color: #fff;

                &:last-child {
                    padding: 21px 24px 0 0;
                }
            }
        }
    }
</style>

