<template lang="pug">
    .numbers
        .numbers__filter
        .numbers__inner
            .numbers__col(v-for="(column, i) in numbers" :key="`num-col-${i}`")
                .numbers__item(v-for="(item, j) in column" :key="`num-item-${j}`")
                    .numbers__item-num(v-html="item.number")
                    .numbers__item-name(v-html="item.name")

</template>

<script>
export default {
    name: 'Numbers',
    data() {
        return {
            numbers: this.$store.getters.setNumbers
        }
    }
}
</script>

<style lang="scss">
    @import '../../assets/scss/app.scss';

    .numbers {
        position: relative;
        min-height: 567px;
        padding: 120px 0 50px;
        background: url('/static/images/numbers/numbers.jpg') center center no-repeat;
        background-size: cover;

        &__filter {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba($colorBlue, 0.2);
        }

        &__inner {
            text-align: center;
            opacity: 0.99;
        }

        &__col {
            @extend %dib;
            font-size: 0;
            padding: 0 10px;
            height: 100%;
        }

        &__item {
            text-align: center;
            color: #fff;

            &:first-child {
                margin: 0 0 84px;
            }
        }

        &__item-num {
            font-size: 96px;
            line-height: 0.7;
            font-weight: 100;
            margin: 0 0 7px;
        }

        &__item-name {
            font-size: 32px;
            line-height: 38px;
            font-weight: 100;
            text-transform: uppercase;
        }
    }
</style>
