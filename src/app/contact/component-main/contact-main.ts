import { Component, OnInit } from '@angular/core';
import { ContactInterface } from '../../_shared/models/contact';
import { ContactService } from '../../_shared/services/contact.service';

@Component({
  selector: 'app-contact-main',
  templateUrl: './contact-main.component.html',
  styleUrls: ['./contact-main.component.css']
})
export class ContactMainComponent implements OnInit {

  public contacts: ContactInterface[] = [];
  public contactSelected: ContactInterface = null;

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.find();
  }
  

  find() {
    this.contactService.find()
      .subscribe(contacts => {
        this.contacts = contacts.slice();
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
