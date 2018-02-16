import { Component, OnInit } from '@angular/core';
import { ContactApi } from '../../shared/sdk/Services/custom/Contact';
import { Contact, ContactInterface } from '../../shared/sdk/models/Contact';

@Component({
  selector: 'app-contact-main',
  templateUrl: './contact-main.component.html',
  styleUrls: ['./contact-main.component.css']
})
export class ContactMainComponent implements OnInit {

  public contacts: ContactInterface[] = [];
  public contactSelected: ContactInterface = null;

  constructor(
    private contactApi: ContactApi
  ) { }

  ngOnInit() {
    this.find();
  }


  find() {
    this.contactApi.find()
      .subscribe(contacts => {
        this.contacts = <any>contacts.slice();
      },
      (error) => {
        console.log('An error occured at Contact-main component');
        console.log(error);
      }
    );
  }

  select(contact) {
    this.contactSelected = Object.assign({}, contact);
  }

  onCreated(contact: ContactInterface) {
    this.contacts.push(contact);
  }

  OnEdit(contactUpdated: ContactInterface) {
    const indice = this.contacts.findIndex((tipo) => tipo.id === contactUpdated.id);

    if (indice !== -1) {
      this.contacts[indice] = contactUpdated;
    } else { }
  }

}
