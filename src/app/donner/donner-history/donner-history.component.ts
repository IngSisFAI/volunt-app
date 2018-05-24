import { Component, OnInit, Input } from '@angular/core';
import { DonnerInterface } from '../../shared/sdk/models/Donner';


@Component({
  selector: 'donner-history',
  templateUrl: './donner-history.component.html',
  styleUrls: ['./donner-history.component.css']
})
export class DonnerHistoryComponent implements OnInit {
  @Input() donner: DonnerInterface;

  constructor() { }

  ngOnInit() {

  }

}
