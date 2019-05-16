import { Component, OnInit } from '@angular/core';
import { OrganizationApi, OrganizationInterface } from 'app/shared/sdk';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    public organizations: OrganizationInterface[] = [];
    constructor(
        private organizationsApi: OrganizationApi
    ) {
        this.organizationsApi.find({ limit: 5, fields: ['name', 'logoUrl'] })
            .subscribe(orgs => {
                this.organizations = <OrganizationInterface[]>orgs;
            })
    }
    public ngOnInit() {

    }
}
