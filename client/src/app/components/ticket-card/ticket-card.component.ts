import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss']
})
export class TicketCardComponent implements OnInit {

  @Input() title !: string;
  @Input() cover !: string;
  @Input() theater !: string;
  @Input() date !: string;
  @Input() hour !: string;
  @Input() seats !: string;

  constructor() { }

  ngOnInit(): void {
  }

}
