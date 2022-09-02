import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Toast from 'src/app/toastConfig';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  goBackToManagement() {
    this.route.navigate(['gerenciar']);
  }

  onSubmit() {
    Toast.fire({
      icon: 'success',
      text: 'Filme editado com sucesso',
    });

    this.route.navigate(['gerenciar']);
  }
}
