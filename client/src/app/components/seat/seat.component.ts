import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss'],
})
export class SeatComponent implements OnInit {
  @Input() isDisabled!: boolean;
  @Input() isSelected!: boolean;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    if (this.isSelected) {
      this.isSelected = false;
    } else {
      this.isSelected = true;
    }
  }
}
