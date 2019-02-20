<template>
    <section class="services">
        <div class="container">
            <div class="services__title">
                <h2 v-text="servicesTiltle"></h2>
            </div>
            <div class="services__content">
                    <div v-for="(item, i) in servicesItems" :key="`services-${i}`" class="services__item">
                        <div class="services__image">
                            <div class="services__image-wrapper">
                                <img :src="item.src" alt="">
                            </div>
                        </div>
                        <div class="services__item-title" v-text="item.title"></div>
                        <div class="services__item-content" v-if="item.content" v-text="item.content"></div>
                        <Button :params="paramsButton" @click="servicesItems.link" />
                    </div>
            </div>
        </div>
        <div class="services__button">
            <Button :params="paramsBiGreyButton"/>
        </div>
    </section>

</template>

<script>

export default {
    name: 'Services',
    data() {
        return {
            servicesTiltle: this.$store.getters.setServicesParams.servicesTiltle,
            paramsButton: this.$store.getters.setServicesParams.paramsButton,
            servicesItems: this.$store.getters.setServicesParams.servicesItems,
            paramsBiGreyButton: this.$store.getters.setServicesParams.paramsBiGreyButton
        }
    }
}
</script>

<style lang="scss">
    @import '../../assets/scss/app.scss';

    .services {
        margin: 0 0 6px;

        &__title {
            padding: 49px 0 88px;
            text-align: center;

            h2 {
                font-size: 48px;
                font-weight: 600;
                text-transform: uppercase;
                color: $colorGrey2;
                margin: 0;
            }
        }

        &__content {
            font-size: 0;
            padding: 0 16px;
            margin: 0 0 -86px;
        }

        &__item {
            position: relative;
            display: inline-block;
            vertical-align: top;
            width: calc(25% - 37px);
            height: 325px;
            padding: 100px 26px 88px;
            text-align: center;
            border: 1.5px solid $colorGrey2;
            margin: 0 18px 100px;

            .button {
                position: absolute;
                bottom: 63px;
                left: calc(50% - 100px);
                width: 200px;
                padding: 0;
            }
        }

        &__item-title {
            font-size: 28px;
            font-weight: 600;
            line-height: 33.6px;
            text-transform: uppercase;
            color: $colorGrey2;
        }

        &__item-content {
            font-size: 24px;
            text-transform: uppercase;
            color: $colorGrey2;
        }

        &__image {
            position: absolute;
            top: -57px;
            left: calc(50% - 64px);
            width: 128px;
            height: 128px;
            background: #fff;

        }

        &__image-wrapper {
            width: calc(100% - 20px);
            height: calc(100% - 20px);
            padding: 20px 0 0;
            border-radius: 50%;
            border: 1px solid $colorBlue2;
            margin: auto;

            img {
                width: 70%;
                height: 70%;
            }
        }

        &__button {
            padding: 46px 0 49px;
            text-align: center;
        }
    }
</style>
