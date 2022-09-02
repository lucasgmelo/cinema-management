import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Toast from 'src/app/toastConfig';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  goBack() {
    this.route.navigate(['checkout']);
  }

  onSubmit() {
    Toast.fire({
      icon: 'success',
      text: 'Transação finalizada com sucesso!',
    });

    this.route.navigate(['']);
  }
}
