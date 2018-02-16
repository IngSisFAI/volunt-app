import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactService } from '../../_shared/services/contact.service';
import { Contact, ContactInterface } from '../../_shared/models/contact';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {

  @Output() onCreated = new EventEmitter();

  public contact: ContactInterface = new Contact();

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit() {}

  create() {

    this.contactService
      .create(this.contact).subscribe(
      (contact: Contact) => {
        this.onCreated.emit(contact);
      },
      (error) => {
        console.log('An error occured at Contact-add component');
        console.log(error);
      }
      );
  }

}
