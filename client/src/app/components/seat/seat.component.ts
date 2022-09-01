import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})

export class SeatComponent implements OnInit {

  @Input() isDisabled!: boolean;

  state: 'default' | 'selected' = 'default';

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    
    if(this.state == 'default'){
      this.state = 'selected';

    }else{
      this.state = 'default';
    }
  }

}
