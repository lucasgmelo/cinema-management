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

  numeroCartao = ''
  nomeTitular = ''
  validade = ''
  arr = []

  ngOnInit(): void {}

  goBack() {
    this.route.navigate(['checkout/1']);
  }

  onChangeInputNumero(event: any){
    
    this.numeroCartao = event.target.value

  }

  onChangeInputNome(event: any){
    
    this.nomeTitular = event.target.value 

  }

  onChangeInputValidade(event: any){
    
    this.validade = event.target.value

  }

  onSubmit() {
    Toast.fire({
      icon: 'success',
      text: 'Transação finalizada com sucesso!',
    });

    this.route.navigate(['']);
  }

}
