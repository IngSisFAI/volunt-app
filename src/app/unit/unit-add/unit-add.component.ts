import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UnitApi } from '../../shared/sdk/services/custom/Unit';
import { Unit, UnitInterface } from '../../shared/sdk/models/Unit';

@Component({
  selector: 'app-unit-add',
  templateUrl: './unit-add.component.html',
  styleUrls: ['./unit-add.component.css']
})
export class UnitAddComponent implements OnInit {

  @Output() onCreated = new EventEmitter();

  public unit: UnitInterface = new Unit();

  constructor(
    private UnitApi: UnitApi
  ) { }

  ngOnInit() {}

  create() {

    this.UnitApi
      .create(this.unit).subscribe(
      (unit: Unit) => {
        this.onCreated.emit(unit);
      },
      (error) => {
        console.log('An error occured at Unit-add component');
        console.log(error);
      }
      );
  }

}
