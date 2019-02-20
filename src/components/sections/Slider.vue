<template lang="pug">
    .slider
        .slider__hide
                .slider__hide-img(
                    v-for="i in 3"
                    :key="`slider-${i}`"
                    :class="{ 'slider__hide-img--visible' : i === activeSlide, 'slider__hide-img--hidden' : hide}"
                    )
                    img(
                        id="slider__img-item"
                        :src="`/static/images/slider/slider_img_${i}.jpg`"
                        alt="" ref="sliderHide"
                        )
                .slider__hide-wrapper
                    .slider__arrow-prev(ref="arrowPrev")
                        .icon.icon-prev
                    .slider__arrow-next(ref="arrowNext")
                        .icon.icon-prev.rotate180
                    .slider__pagination
                        .slider__pagination-item(
                            v-for="i in 3"
                            :class="{ 'is-active' : i === activeSlide }"
                            @click="moveSlideTo(i)"
                            )
        .slider__title
            h1 За здоровыми зубами приходите к нам

</template>
<script>
export default {
    name: 'Slider',
    data() {
        return {
            activeSlide: 1,
            hide: false,
            show: true,
            slider: null,
            sliderArrowPrev: null,
            sliderArrowNext: null,
            paginationItems: null
        }
    },
    mounted() {
        this.slider = this.$refs.sliderHide;
        this.sliderArrowPrev = this.$refs.arrowPrev;
        this.sliderArrowNext = this.$refs.arrowNext;
        this.paginationItems = this.$refs.sliderPagination;

        // this.setClientParams();
    },
    methods: {
        setClientParams() {
            window.setInterval(() => {
                this.slide(1);
            }, 4000);

            this.sliderArrowPrev.addEventListener('click', () => {
                this.slide(-1);
            });

            this.sliderArrowNext.addEventListener('click', () => {
                this.slide(1);
            });

            for (let i = 0; i < this.paginationItems.length; i++) {
                this.paginationItems[i].addEventListener('click', () => {
                    this.moveSlideTo(i + 1);
                })
            }
        },

        // переход к слайду номер num
        moveSlideTo(num) {
            let { url } = this.hideImage();

            setTimeout(() => {
                this.showImage(num, url);
            }, 500);
        },

        slide(delta) {
            let tmp = this.activeSlide + delta > 3 ? 1 : ( this.activeSlide + delta < 1 ? 3 : (this.activeSlide + delta) );
            setTimeout(() => {
                this.hide = true;
                this.activeSlide = null;
            }, 3750);

            this.hide = false;
            this.activeSlide = tmp
        },

        // функция скрыть изображение - все просто, удаляем класс видимый, навешиваем невидимый, определяем номер следующей картинки
        hideImage() {
            this.slider.classList.remove('slider__hide-img--visible');
            this.slider.classList.add('slider__hide-img--hidden');
            let url = this.slider.getAttribute('src');
            let num = parseInt(String(url).substr(-5, 1));
            this.paginationItems[num - 1].classList.remove('is-active');

            return {num, url};
        },

        // функция показать картинку - создаем путь, подменяя номер картинки
        showImage(num, url) {
            let value = url.substring(0, url.length - 5) + num + '.jpg';
            this.slider.setAttribute('src', value);
            this.slider.classList.remove('slider__hide-img--hidden');
            this.slider.classList.add('slider__hide-img--visible');
            this.paginationFix(num - 1);
            // paginationItems[num - 1].classList.add('is-active');
        },

        // при быстром переборе остаются лишние is-active, избавляемся перебором
        paginationFix(j) {
            for (let i = 0; i < this.paginationItems.length; i++) {
                i === j ? this.paginationItems[i].classList.add('is-active') : this.paginationItems[i].classList.remove('is-active');
            }
        }
    }
}
</script>

<style lang="scss">
    .slider {
        position: relative;

        &__title {
            position: absolute;
            top: 189px;
            left: 840px;
            width: 700px;

            h1 {
                font-size: 60px;
                line-height: 72px;
                font-weight: 600;
                letter-spacing: 1.5px;
                text-transform: uppercase;
                color: #fff;
                text-align: center;
            }
        }

        &__hide {
            position: relative;
            width: 100%;
            height: 657px;
        }

        &__hide-wrapper {
            position: relative;
            height: 100%;

            .slider__arrow-prev,
            .slider__arrow-next {
                position: absolute;
                top: calc(50% - 30px);
                cursor: pointer;

                .icon {
                    border-radius: 3px;
                }
            }

            .slider__arrow-prev {
                left: 10px;
            }

            .slider__arrow-next {
                right: 10px;
            }
        }

        &__hide-img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            opacity: 0;

            img {
                position: absolute;
                top: 0;
                left: 0;
                min-width: 100%;
                min-height: 100%;
            }

            &--hidden {
                opacity: 0;
                transition: visibility 0s .5s, opacity .5s linear;
            }

            &--visible {
                opacity: 1;
                transition: visibility 0s .5s, opacity .5s linear;
            }
        }

        &__pagination {
            position: absolute;
            bottom: 45px;
            left: 0;
            width: 100%;
            height: 20px;
            text-align: center;
        }

        &__pagination-item {
            display: inline-block;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 3px solid #fff;
            background-color: rgba(0, 0, 0, 0);
            margin: 0 15px 0 0;
            cursor: pointer;

            &:last-child {
                margin: 0;
            }

            &.is-active {
                background-color: #fff;
                pointer-events: none;
            }
        }
    }
</style>
