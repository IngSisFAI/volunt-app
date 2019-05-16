import { Component, OnInit } from '@angular/core';
import { OrganizationInterface, LoopBackAuth, OrganizationApi } from 'app/shared/sdk';


@Component({
    selector: 'app-ong-requests',
    templateUrl: './ong-requests.component.html',
    styleUrls: ['./ong-requests.component.css']
})
export class ONGRequestsComponent implements OnInit {
    public organization: OrganizationInterface;

    constructor(
        private auth: LoopBackAuth,
        private organizationApi: OrganizationApi,
    ) {
        const user = this.auth.getCurrentUserData();
        this.organizationApi.findById(user.id)
            .subscribe(organization => {
                this.organization = <OrganizationInterface>organization;
            });
    }

    ngOnInit(): void {

    }
}
