import { Component, OnInit } from '@angular/core';
import { idToken } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { GetMoviesResponse } from 'src/app/services/api/types';
import { AuthService, User } from 'src/app/services/auth/auth.service';
import Toast from 'src/app/toastConfig';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  constructor(private route: Router, private routeActivated: ActivatedRoute, private apiService: ApiService) {}

  movie: GetMoviesResponse = { sessions: [{}] };
  room = '';
  data = '';
  hour = '';
  seatData: { id: number; isDisabled: boolean; isSelected: boolean }[] = [];

  ngOnInit(): void {
    const id = this.routeActivated.snapshot.paramMap.get('id')!;
    this.apiService.getMovie(id).subscribe((movie) => {
      this.movie = movie;

      this.routeActivated.queryParams.subscribe((params) => {
        this.room = params['room'];
        this.data = params['data'];
        this.hour = params['hour'];

        const sessionInfo = this.movie.sessions[`${params['data']}/2022`].filter(
          (session: { room: any; hour: any }) => session.room == params['room'] && session.hour == params['hour']
        );

        this.seatData = [...new Array(90)].map((_: any, index: any) => {
          return {
            id: index,
            isDisabled: sessionInfo[0]['seatsUnavailable'].includes(String(index)),
            isSelected: false,
          };
        });
      });
    });
  }

  valorInteira = 0;
  valorMeia = 0;

  btnDisabled = true;

  selectedSeats: Number[] = [];

  addSeat(id: number) {
    this.selectedSeats.push(id);
  }

  removeSeat(id: number) {
    this.selectedSeats = this.selectedSeats.filter((seat) => seat != id);
  }

  toggleSeat(id: any) {
    if (this.seatData[id].isSelected) {
      this.removeSeat(id);
    } else if (!this.seatData[id].isSelected) {
      this.addSeat(id);
    }

    this.seatData[id].isSelected = !this.seatData[id].isSelected;
  }

  onChangeInputMeia(event: any) {
    this.valorMeia = event.target.value;
  }

  onChangeInputInteira(event: any) {
    this.valorInteira = event.target.value;
  }

  isButtonDisabled() {
    if (
      this.selectedSeats.length == 1 * this.valorInteira + this.valorMeia * 1 &&
      1 * this.valorInteira + this.valorMeia * 1 != 0
    ) {
      this.btnDisabled = false;
    } else {
      this.btnDisabled = true;
    }
  }

  async onSubmit() {
    const currentUser: User = JSON.parse(localStorage.getItem('user') || '{}');

    const id = this.routeActivated.snapshot.paramMap.get('id')!;

    const newTickets = {
      uid: currentUser.id!,
      tickets: [
        {
          movieId: id,
          title: this.movie.title!,
          room: +this.room,
          date: `${this.data}/2022`,
          hour: this.hour,
          link_cover: this.movie.link_cover!,
          seats: this.selectedSeats!.map((seat) => String(seat)),
        },
      ],
    };

    if (this.apiService.buyTicket(newTickets).subscribe()) {
      Toast.fire({
        icon: 'success',
        text: 'Ingressos Reservados',
      });
      this.route.navigate(['/pagamento', this.movie._id], {
        queryParams: { data: this.data, hour: this.hour, room: this.room },
      });
    } else {
      Toast.fire({
        icon: 'error',
        title: 'Não foi possível reservar os ingressos, tente novamente mais tarde',
      });
    }
  }

  voltar(){
    this.route.navigate(['/filme', this.movie._id])
  }
}
