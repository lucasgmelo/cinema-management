import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ManagementComponent } from './pages/management/management.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { MovieComponent } from './pages/movie/movie.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'checkout/:id', component: CheckoutComponent },
  { path: 'login', component: SigninComponent },
  { path: 'cadastro', component: SignupComponent },
  { path: 'gerenciar', component: ManagementComponent },
  { path: 'adicionar-filme', component: AddMovieComponent },
  { path: 'editar-filme', component: EditPageComponent },
  { path: 'pagamento/:id', component: PaymentComponent },
  { path: 'ingressos', component: TicketsComponent },
  { path: 'filme/:id', component: MovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
