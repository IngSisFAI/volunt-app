import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
        private router: Router,
        private route: ActivatedRoute
    ) {
        const user = this.auth.getCurrentUserData();
        this.organizationApi.findById(user.id)
        .subscribe(organization => {
            this.organization = <OrganizationInterface> organization;
        });
    }

    ngOnInit(): void {

    }
}
