import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { GetMoviesResponse } from 'src/app/services/api/types';
import { AuthService, User } from 'src/app/services/auth/auth.service';
import Toast from 'src/app/toastConfig';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private route: Router, private routeActivated: ActivatedRoute, private apiService: ApiService) { }

  movie: GetMoviesResponse = {}

  ngOnInit(): void {
    const id = this.routeActivated.snapshot.paramMap.get('id')!;
    this.apiService.getMovie(id).subscribe((movie) => (this.movie = movie));
  }

  seatData = [...new Array(90)].map((_,index) => ({
    id: index,
    isDisabled: false,
    isSelected: false
}));

  valorInteira = 0
  valorMeia = 0

  btnDisabled = true

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

  onChangeInputMeia(event: any){
    
    this.valorMeia = event.target.value

  }

  onChangeInputInteira(event: any){
    
    this.valorInteira = event.target.value

  }

  isButtonDisabled(){
    if(this.selectedSeats.length == (1*this.valorInteira + this.valorMeia*1) && (1*this.valorInteira + this.valorMeia*1) != 0){
      this.btnDisabled = false
    }
    else{
      this.btnDisabled = true
    }
  }

  async onSubmit(){

    const currentUser: User = JSON.parse(localStorage.getItem('user') || '{}');

    const newTickets = {
      uid: currentUser.id!,
      tickets: [{
        title: this.movie.title!,
        room: 4,
        date: '06/09/2022',
        hour: '17:00',
        link_cover: this.movie.link_cover!,
        seats: this.selectedSeats!,
      }]
    }

    console.log(newTickets)

    if(this.apiService.buyTicket(newTickets).subscribe()){
      Toast.fire({
        icon: 'success',
        text: 'Ingressos Reservados',
      });
      this.route.navigate(["/pagamento"])
    }

    else{
      Toast.fire({
        icon: 'error',
        title: 'Não foi possível reservar os ingressos, tente novamente mais tarde',
      });
      }
    }
  }


