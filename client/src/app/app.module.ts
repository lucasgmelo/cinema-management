import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './common/navbar/navbar.component';
import { BadgeComponent } from './common/badge/badge.component';

import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ManagementComponent } from './pages/management/management.component';
import { ManagementCardComponent } from './components/management-card/management-card.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { TicketCardComponent } from './components/ticket-card/ticket-card.component';
import { SeatComponent } from './components/seat/seat.component';
import { MovieComponent } from './pages/movie/movie.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BadgeComponent,
    CheckoutComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    ManagementComponent,
    ManagementCardComponent,
    AddMovieComponent,
    PaymentComponent,
    TicketsComponent,
    TicketCardComponent,
    SeatComponent,
    MovieComponent,
    DatepickerComponent,
    CardMovieComponent,
    EditPageComponent,
    CarouselComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
