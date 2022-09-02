import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  @Input() date!: string;
  @Input() when!: string;

  @Input() isSelected!: boolean;

  constructor() { }

  ngOnInit(): void {
  }
}