import { Component, Output, EventEmitter } from '@angular/core';
import { UnitApi } from '../../shared/sdk/services/custom/Unit';
import { Unit, UnitInterface } from '../../shared/sdk/models/Unit';

@Component({
  selector: 'app-unit-add',
  templateUrl: './unit-add.component.html',
  styleUrls: ['./unit-add.component.css']
})
export class UnitAddComponent {

  @Output() onCreated = new EventEmitter();

  public unit: UnitInterface = new Unit();

  constructor(
    private unitApi: UnitApi
  ) { }

  create() {

    this.unitApi
      .create(this.unit).subscribe(
        (unit: Unit) => {
          this.onCreated.emit(unit);
        },
        (error) => {
          // TODO: Handle error
          console.error(error);
        }
      );
  }

}
