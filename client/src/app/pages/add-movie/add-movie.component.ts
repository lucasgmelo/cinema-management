import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import Toast from 'src/app/toastConfig';
import { createSessionObjects, reverseDate } from 'src/app/utils/sessions';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {

  constructor(private route: Router, private formBuilder: FormBuilder, private apiService: ApiService) {}

  isDisabled = true;

  ngOnInit(): void {}

  emptyname = true;
  emptydirector = true;
  emptyduration = true;
  emptyimageLink = true;
  emptystartDate = true;
  emptyfinalDate = true;
  emptyroom1 = true;
  emptytime1 = true;
  emptygenre = true;
  emptysynopsis = true;

  registerMovieForm = this.formBuilder.group({
    name: '',
    price: '',
    acceptHalf: true,
    director: '',
    duration: '',
    genre: '',
    imageLink: '',
    classification: '',
    synopsis: '',
    startDate: '',
    finalDate: '',
    room1: '',
    time1: '',
    cast: [''],
  });

  goBackToManagement() {
    this.route.navigate(['gerenciar']);
  }

  onChangeInput(event: any) {
    switch (event.target.id) {
      case 'name': {
        if (!event.target.value) {
          this.emptyname = true;
        } else {
          this.emptyname = false;
        }
        break;
      }
      case 'director': {
        if (!event.target.value) {
          this.emptydirector = true;
        } else {
          this.emptydirector = false;
        }
        break;
      }
      case 'duration': {
        if (!event.target.value) {
          this.emptyduration = true;
        } else {
          this.emptyduration = false;
        }
        break;
      }
      case 'genre': {
        if (!event.target.value) {
          this.emptygenre = true;
        } else {
          this.emptygenre = false;
        }
        break;
      }
      case 'synopsis': {
        if (!event.target.value) {
          this.emptysynopsis = true;
        } else {
          this.emptysynopsis = false;
        }
        break;
      }
      case 'imageLink': {
        if (!event.target.value) {
          this.emptyimageLink = true;
        } else {
          this.emptyimageLink = false;
        }
        break;
      }
      case 'startDate': {

        if (!event.target.value) {
          this.emptystartDate = true;
        } else {
          this.emptystartDate = false;
        }
        break;
      }
      case 'finalDate': {

        if (!event.target.value) {
          this.emptyfinalDate = true;
        } else {
          this.emptyfinalDate = false;
        }
        break;
      }
      case 'room1': {
        if (!event.target.value) {
          this.emptyroom1 = true;
        } else {
          this.emptyroom1 = false;
        }
        break;
      }
      case 'time1': {
        if (!event.target.value) {
          this.emptytime1 = true;
        } else {
          this.emptytime1 = false;
        }
        break;
      }
    }
  }

  isButtonDisabled() {
    if (
      this.emptyname ||
      this.emptydirector ||
      this.emptyduration ||
      this.emptyimageLink ||
      this.emptyfinalDate ||
      this.emptystartDate ||
      this.emptyroom1 ||
      this.emptytime1
    ) {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }

  async onSubmit() {
    const {
      director,
      duration,
      finalDate,
      imageLink,
      name,
      room1,
      startDate,
      time1,
      genre,
      synopsis,
      cast,
      classification,
      price,
      acceptHalf,
    } = this.registerMovieForm.value;

    const newMovie = {
      title: name!,
      link_cover: imageLink!,
      duration: `${duration!} min`,
      genre: genre!,
      synopsis: synopsis!,
      director: director!,
      cast: cast!.split(', '),
      classification: classification!,
      start_date: reverseDate(startDate!),
      end_date: reverseDate(finalDate!),
      price: Number(price!),
      acceptHalf: acceptHalf!,
      managementInfo: [
        {
          room: room1!,
          hour: time1!,
        },
      ],
      sessions: createSessionObjects(reverseDate(startDate!), reverseDate(finalDate!), room1!, time1!),
    };

    if (this.apiService.registerMovie(newMovie).subscribe()) {
      Toast.fire({
        icon: 'success',
        text: 'Filme criado com sucesso',
      });
      this.route.navigate(['/gerenciar']);
    } else {
      Toast.fire({
        icon: 'error',
        title: 'Não foi possível criar o filme, tente novamente mais',
      });
    }
  }

  horas: string[] = []

  returnAvailableHours(){

    const SD = reverseDate(this.registerMovieForm.value.startDate!)
    const FD = reverseDate(this.registerMovieForm.value.finalDate!)

    this.apiService.getAvailableHours(SD,FD,+this.registerMovieForm.value.room1!).subscribe(hours => 
      
      this.horas = hours)

  }

}

