import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrganizationInterface, OrganizationApi, LoopBackAuth } from '../../shared/sdk';

@Component({
    selector: 'app-ong-profile',
    templateUrl: './ong-profile.component.html',
    styleUrls: ['./ong-profile.component.css']
})
export class ONGProfileComponent implements OnInit {
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
