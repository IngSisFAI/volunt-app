import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { UnitApi } from '../../shared/sdk/services/custom/Unit';
import { Unit } from '../../shared/sdk/models/Unit';

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
    this.unit = Object.assign({}, this.unitOriginal);
  }

  public update() {
    this.unitService.patchAttributes(this.unit.id, this.unit)
      .subscribe(
        unitEdited => {
          this.unitEdited.emit(unitEdited);
        }
      );
  }

  public cancelar() {
    this.unit = Object.assign({}, this.unitOriginal);
  }

}
