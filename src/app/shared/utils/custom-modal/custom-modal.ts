import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-dialog',
    templateUrl: 'dialog.component.html',
    styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

    constructor(
        public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    cancel(): void {
        this.dialogRef.close(false);
    }

    accept(): void {
        this.dialogRef.close(true);
    }
}
export class CustomModal {
    private width = '500px';
    private title: String;
    private description: String;
    private accept: String;
    private cancel: String;
    private dialog: MatDialog;

    constructor(dialog: MatDialog, title: String, description: String, accept = 'Aceptar', cancel = 'Cancelar') {
        this.dialog = dialog;
        this.title = title;
        this.description = description;
        this.accept = accept;
        this.cancel = cancel;
    }

    public open() {
        return new Promise((resolve, reject) => {
            const dialogRef = this.dialog.open(DialogComponent, {
                width: this.width,
                data: {
                    title: this.title,
                    description: this.description,
                    accept: this.accept,
                    cancel: this.cancel,
                }
            });
            dialogRef.afterClosed().subscribe(result => {
                resolve(result);
            });
        });
    }

}

