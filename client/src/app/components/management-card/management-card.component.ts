import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import Toast from 'src/app/toastConfig';

@Component({
  selector: 'app-management-card',
  templateUrl: './management-card.component.html',
  styleUrls: ['./management-card.component.scss'],
})
export class ManagementCardComponent implements OnInit {
  @Input() title!: string;
  @Input() cover!: string;
  @Input() date!: string;
  @Input() hour!: string;
  @Input() id!: string;
  @Input() managementInfo!: [{ room: string; hour: string }];

 
  constructor(private route: Router, private apiService: ApiService) {}

  ngOnInit(): void {}

  async deleteMovie() {

    if(this.apiService.deleteMovie(this.id).subscribe()){
      Toast.fire({
        icon: 'success',
        text: 'Filme deletado',
      });
    }
    else{
      Toast.fire({
        icon: 'error',
        title: 'Não foi possível deletar o filme',
      });
    }
    
  }
}
