<template>
    <div class="button" :class="params.class" v-html="params.text">

    </div>
</template>

<script>

export default {
    name: "Button",
    props: {
        params: Object
    }
};
</script>

<style lang="scss">
    @import '../../assets/scss/app.scss';

    .button {
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        color: #fff;
        background: linear-gradient(to right, #009EE3, #317CB5);
        cursor: pointer;

        &-big {
            padding: 8px 90px 0;
            font-size: 34px;
            line-height: 68px;
            letter-spacing: 1.2px;
            text-transform: uppercase;
            border-radius: 40px;
        }

        &-small {
            padding: 0 35px;
            font-size: 21.3px;
            line-height: 39px;
            border-radius: 19px;
        }

        &-grey {
            padding: 8px 60px 0;
            background: $colorGrey;
        }
    }
</style>
