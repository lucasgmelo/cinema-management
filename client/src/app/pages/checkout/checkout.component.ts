import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  seatData = [...new Array(90)].map((index) => ({
    id: index,
    isDisabled: false
}));


  selectedSeats:Number[] = []

  addSeat(id:number){

    this.selectedSeats.push(id)

  }

  removeSeat(id:number){

    this.selectedSeats = this.selectedSeats.filter( (seat) => seat == id )

  }

}
