import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild('right') menu: MatSidenav;
  constructor() { }

  ngOnInit() {
  }

  open(){
    this.menu.toggle();
  }

}
