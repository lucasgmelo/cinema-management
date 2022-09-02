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

  seatData = [...new Array(90)].map((_,index) => ({
    id: index,
    isDisabled: false,
    isSelected: false
}));


  selectedSeats:Number[] = []

  addSeat(id:number){

    this.selectedSeats.push(id)
    
  }

  removeSeat(id:number){

    this.selectedSeats = this.selectedSeats.filter( (seat) => seat != id )

  }

  toggleSeat(id:any){

    if(this.seatData[id].isSelected){
      this.removeSeat(id)
    }
    else if(!this.seatData[id].isSelected){
      this.addSeat(id)
    }

    this.seatData[id].isSelected = !this.seatData[id].isSelected

    console.log(this.selectedSeats);

  }

}
