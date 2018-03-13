import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-want-to-donate',
  templateUrl: './want-to-donate.component.html',
  //styleUrls: ['./name.component.scss']
})
export class WantToDonateComponent implements OnInit {

  selectedOrganization: String;

  constructor() { }

  ngOnInit() {
    this.selectedOrganization = "5a0df599e7f62421fe84b53c";
  }
}
