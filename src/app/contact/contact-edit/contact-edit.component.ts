import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ContactApi } from '../../shared/sdk/services/custom/Contact';
import { Contact } from '../../shared/sdk/models/Contact';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  @Input() contactOriginal: Contact;
  @Output() contactEdited = new EventEmitter();

  private contact: Contact;

  constructor(
    private contactService: ContactApi
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes): void {
    // TODO: Check changes?
    this.contact = Object.assign({}, this.contactOriginal);
  }

  public update() {
    this.contactService.patchAttributes(this.contact.id, this.contact)
      .subscribe(
        contactEdited => {
          this.contactEdited.emit(contactEdited);
        }
      )
  }

  public cancelar() {
    this.contact = Object.assign({}, this.contactOriginal);
  }

}
