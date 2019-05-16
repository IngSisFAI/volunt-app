import { Component, OnInit } from '@angular/core';
import { ContactApi } from '../../shared/sdk/services/custom/Contact';
import { ContactInterface } from '../../shared/sdk/models/Contact';

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
          // TODO: Handle error
          console.error(error);
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
    }
  }

}
