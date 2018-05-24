import { Component, OnInit, ViewChild } from '@angular/core';
import { DonationRequestInterface, DonationRequestApi } from '../../shared/sdk';
import { OrganizationInterface, OrganizationApi } from '../../shared/sdk';
import { ProductInterface, ProductApi } from '../../shared/sdk';
import { CityInterface, CityApi } from '../../shared/sdk';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-catalog',
  templateUrl: './main-catalog.component.html',
  styleUrls: ['./main-catalog.component.css']
})
export class MainCatalogComponent implements OnInit {

  permanentRequests: DonationRequestInterface[] = [];
  oneTimeRequests: DonationRequestInterface[] = [];
  requestSelected: DonationRequestInterface = null;

  orgs: OrganizationInterface[] = [];
  products: ProductInterface[] = [];
  cities: CityInterface[] = [];

  donationType: String;
  city: String;
  orgId: String;
  organization: OrganizationInterface;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private donationRequestApi: DonationRequestApi,
    private organizationApi: OrganizationApi,
    private productApi: ProductApi,
    private cityApi: CityApi
  ) {
    this.getParams();
  }

  ngOnInit() {

    this.findOrganizations();
    this.findPermanentRequests();
    this.findOneTimeRequests();
    this.findProducts();
    this.findCities();

  }

  private findPermanentRequests() {

    this.donationRequestApi.find(
      {
        include: ['product', { organization: [{ city: 'province' }] }],
        where: { isPermanent: true }
      })
      .subscribe((permanentRequests: DonationRequestInterface[]) => {
        console.log("permanentRequests", permanentRequests);
        //  this.notUse(permanentRequests); // NOT USE this method!
        this.permanentRequests = permanentRequests;
      },
        (err) => {
          console.log('An error has ocurred');
          console.log(err);
        });
  }

  /*
    Este metodo esta para parsear los datos para las pruebas. En un futuro, limpiar la BD
  */
  private notUse(requests) {
    requests.forEach(r => {
      if (!r.amount) { r.amount = 0; }
      if (!r.covered) { r.covered = 0; }
      if (!r.promised) { r.promised = 0; }
    });
  }

  private findOneTimeRequests() {

    let now = new Date();
    this.donationRequestApi.find({
      include: ['product', { organization: [{ city: 'province' }] }],
      where:
        {
          // creationDate: {lte: now },
          //  status: true,
          isPermanent: false,
          expirationDate: { gte: now }
        }
    })
      .subscribe((oneTimeRequests: DonationRequestInterface[]) => {
        this.oneTimeRequests = oneTimeRequests;
        console.log('oneTimeRequests: ', oneTimeRequests);
      },
        (err) => {
          console.log('An error has ocurred');
          console.log(err);
        });
  }

  private findOrganizations() {

    this.organizationApi.find({
      include: {
        relation: 'city',
        scope: {
          include: {
            relation: 'province',
          }
        }
      }
    })
      .subscribe((orgs: OrganizationInterface[]) => {
        console.log("orgs: ", orgs);
        this.orgs = orgs;
        //obtain data from param org
        this.getOrg();
      },
        (err) => {
          console.log('An error has ocurred');
          console.log(err);
        });
  }

  private findProducts() {

    this.productApi.find(
      {
      })
      .subscribe((prods: ProductInterface[]) => {
        this.products = prods;
        console.log("prods: ", prods);
      },
        (err) => {
          console.log('An error has ocurred');
          console.log(err);
        });
  }

  private findCities() {

    this.cityApi.find({
      include: ['province'],
    })
      .subscribe((cities: CityInterface[]) => {
        this.cities = cities;
      },
        (err) => {
          console.log('An error has ocurred');
          console.log(err);
        });
  }


  public donationTypeChange(response) {
    console.log('** donationTypeChange');
    console.log(response);
    this.donationType = response;
  }

  public cityChange(response) {
    console.log('** cityChange');
    console.log(response);
    this.city = response;

  }

  public orgChange(response) {
    console.log('** orgChange');
    console.log(response);
    this.orgId = response;
    //obtain org to show
    this.getOrg();

  }

  getOrg() {
    if (this.orgId && this.orgs) {
      this.organization = this.orgs.find(org => org.id == this.orgId);
    } else {
      this.organization = null;

    }

  }

  getParams() {
    this.route
      .queryParams
      .subscribe(params => {
        let id = params['orgId'];
        let city = params['city'];
        if (id) {
          this.orgChange(id);
        } else {
          this.orgChange(null);
        }
        if (city) {
          this.cityChange(city);
        } else {
          this.cityChange(null);
        }
      });

  }


}
