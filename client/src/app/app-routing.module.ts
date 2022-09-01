import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ManagementComponent } from './pages/management/management.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { TicketsComponent } from './pages/tickets/tickets.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'login', component: SigninComponent },
  { path: 'cadastro', component: SignupComponent },
  { path: 'gerenciar', component: ManagementComponent },
  { path: 'adicionar-filme', component: AddMovieComponent },
  { path: 'ingressos', component: TicketsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
