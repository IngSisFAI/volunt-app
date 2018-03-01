import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { UnitApi } from '../../shared/sdk/services/custom/Unit';
import { Unit, UnitInterface } from '../../shared/sdk/models/Unit';

@Component({
  selector: 'app-unit-edit',
  templateUrl: './unit-edit.component.html',
  styleUrls: ['./unit-edit.component.css']
})
export class UnitEditComponent implements OnInit {

  @Input() unitOriginal: Unit;
  @Output() unitEdited = new EventEmitter();

  private unit: Unit;

  constructor(
    private unitService: UnitApi
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes): void {
    console.log(this.unitOriginal)
    this.unit = Object.assign({}, this.unitOriginal);
  }

  public update() {
    this.unitService.patchAttributes(this.unit.id, this.unit)
    .subscribe(
      unitEdited => {
        console.log('unit edited: ', unitEdited);
        this.unitEdited.emit(unitEdited);
      }
    )
  }

  public cancelar() {
    this.unit = Object.assign({}, this.unitOriginal);
  }

}
