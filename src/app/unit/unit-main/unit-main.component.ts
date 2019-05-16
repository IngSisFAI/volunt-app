import { Component, OnInit } from '@angular/core';
import { UnitApi } from '../../shared/sdk/services/custom/Unit';
import { UnitInterface } from '../../shared/sdk/models/Unit';

@Component({
  selector: 'app-unit-main',
  templateUrl: './unit-main.component.html',
  styleUrls: ['./unit-main.component.css']
})
export class UnitMainComponent implements OnInit {

  public units: UnitInterface[] = [];
  public unitSelected: UnitInterface = null;

  constructor(
    private unitService: UnitApi
  ) { }

  ngOnInit() {
    this.find();
  }


  find() {
    this.unitService.find()
      .subscribe(units => {
        this.units = <any>units.slice();
      },
        (error) => {
          // TODO: Handle error
          console.error(error);
        }
      );
  }

  select(unit) {
    this.unitSelected = Object.assign({}, unit);
  }

  onCreated(unit: UnitInterface) {
    this.units.push(unit);
  }

  OnEdit(unitUpdated: UnitInterface) {
    const indice = this.units.findIndex((tipo) => tipo.id === unitUpdated.id);

    if (indice !== -1) {
      this.units[indice] = unitUpdated;
    } else { }
  }

}
