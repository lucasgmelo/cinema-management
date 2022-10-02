import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Toast from 'src/app/toastConfig';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  constructor(private route: Router, private formBuilder: FormBuilder) {}

  isDisabled = true;

  ngOnInit(): void {}

  emptyname= true
  emptydirector= true
  emptyduration= true
  emptyimageLink= true
  emptystartDate= true
  emptyfinalDate= true
  emptyroom1= true
  emptytime1= true

  registerMovieForm = this.formBuilder.group({
    name: '',
    director: '',
    duration: '',
    imageLink: '',
    startDate: Date,
    finalDate: Date,
    room1: '',
    time1: ''
  });

  goBackToManagement() {
    this.route.navigate(['gerenciar']);
  }

  onChangeInput(event: any) {
    switch(event.target.id) {
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
    if(this.emptyname || this.emptydirector || this.emptyduration || this.emptyimageLink || this.emptyfinalDate || this.emptystartDate || this.emptyroom1 || this.emptytime1) {
      this.isDisabled = true;
    }else{
      this.isDisabled = false;
    }
  }

  onSubmit() {
    const {director, duration, finalDate, imageLink, name, room1, startDate, time1} = this.registerMovieForm.value;
    Toast.fire({
      icon: 'success',
      text: 'Filme adicionado com sucesso',
    });

    //this.route.navigate(['gerenciar']);
  }
}
