import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CustomModal } from './custom-modal';

@Injectable()
export class CustomModalService {


    constructor(public dialog: MatDialog) { }

    public openDialog(data) {
        let dialog = new CustomModal(this.dialog, data.title, data.description, data.accept, data.cancel);
        dialog.open().then(algo => {
            console.log(algo);
        })
    }

}