import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrganizationInterface, OrganizationApi } from '../../shared/sdk';

@Component({
    selector: 'app-ong-profile',
    templateUrl: './ong-profile.component.html',
    styleUrls: ['./ong-profile.component.css']
})
export class ONGProfileComponent implements OnInit {
    public organization: OrganizationInterface;

    constructor(
        private organizationApi: OrganizationApi,
        private router: Router,
        private route: ActivatedRoute
    ) {
        const idOrg = route.snapshot.params['idOrg'];
        // TODO: remove this
        if (idOrg === '1' ) {
            this.organizationApi.find()
            .subscribe(organizations => {
                console.log('Organizations: ');
                console.log(organizations);
            });
        } else {
            this.organizationApi.findById(idOrg)
            .subscribe(organization => {
                this.organization = <OrganizationInterface> organization;
                console.log('Organization: ', organization);
            });
        }
    

    }

    ngOnInit(): void {

    }
}
