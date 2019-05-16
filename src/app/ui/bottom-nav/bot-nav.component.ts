import { Component } from '@angular/core';

@Component({
  selector: 'app-bot-nav',
  templateUrl: './bot-nav.component.html',
  styleUrls: ['./bot-nav.component.scss'],
})
export class BottomNavComponent {

  show = false;

  toggleCollapse() {
    this.show = !this.show;
  }

}
