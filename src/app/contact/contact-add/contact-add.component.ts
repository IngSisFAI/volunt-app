import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactApi } from '../../shared/sdk/services/custom/Contact';
import { Contact, ContactInterface } from '../../shared/sdk/models/Contact';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {

  @Output() onCreated = new EventEmitter();

  public contact: ContactInterface = new Contact();

  constructor(
    private contactApi: ContactApi
  ) { }

  ngOnInit() { }

  create() {

    this.contactApi
      .create(this.contact).subscribe(
        (contact: Contact) => {
          this.onCreated.emit(contact);
        },
        (error) => {
          // TODO: Handle error
          console.error(error);
        }
      );
  }

}
