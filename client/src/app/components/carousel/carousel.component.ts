import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-carousel',
  template: `<swiper
    [spaceBetween]="30"
    [centeredSlides]="true"
    [autoplay]="{
      delay: 3500,
      disableOnInteraction: false
    }"
    [pagination]="{
      clickable: true
    }"
    [navigation]="true"
    class="mySwiper"
  >
    <ng-template swiperSlide
      ><img
        class="item"
        src="https://fiocondutor.com.pt/wp-content/uploads/2022/05/TOPGUNMAVERICK_banner-1024x449.jpg"
        alt=""
    /></ng-template>
    <ng-template swiperSlide
      ><img class="item" src="https://hqrock.files.wordpress.com/2011/12/poster-december-01.jpg" alt=""
    /></ng-template>
    <ng-template swiperSlide
      ><img class="item" src="https://radiocomercial.iol.pt/upload/N/nope_banner_radio_comercial___1200x630.jpg" alt=""
    /></ng-template>
    <ng-template swiperSlide
      ><img class="item" src="http://www.nerdrabugento.com.br/wp-content/uploads/2017/06/Corra-1024x577.jpg" alt=""
    /></ng-template>
  </swiper>`,
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent {}
