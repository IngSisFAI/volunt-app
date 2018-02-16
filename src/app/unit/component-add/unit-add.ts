import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UnitService } from '../../_shared/services/unit.service';
import { Unit, UnitInterface } from '../../_shared/models/unit';

@Component({
  selector: 'app-unit-add',
  templateUrl: './unit-add.component.html',
  styleUrls: ['./unit-add.component.css']
})
export class UnitAddComponent implements OnInit {

  @Output() onCreated = new EventEmitter();

  public unit: UnitInterface = new Unit();

  constructor(
    private unitService: UnitService
  ) { }

  ngOnInit() {}

  create() {

    this.unitService
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
