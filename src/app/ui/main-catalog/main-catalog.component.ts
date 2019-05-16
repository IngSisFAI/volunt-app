import { Component, OnInit } from '@angular/core';
import { DonationRequestInterface, DonationRequestApi } from '../../shared/sdk';
import { OrganizationInterface, OrganizationApi } from '../../shared/sdk';
import { ProductInterface, ProductApi } from '../../shared/sdk';
import { CityInterface, CityApi } from '../../shared/sdk';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-catalog',
  templateUrl: './main-catalog.component.html',
  styleUrls: ['./main-catalog.component.css']
})
export class MainCatalogComponent implements OnInit {

  permanentRequests: DonationRequestInterface[];
  oneTimeRequests: DonationRequestInterface[];

  orgs: OrganizationInterface[] = [];
  products: ProductInterface[] = [];
  cities: CityInterface[] = [];

  donationType: String;
  city: String;
  orgId: String;
  organization: OrganizationInterface;

  constructor(
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
    const now = new Date();
    this.donationRequestApi.find(
      {
        include: ['product', { organization: [{ city: 'province' }] }],
        where: {
          isOpen: true,
          isPermanent: true,
          expirationDate: { gte: now }
        }
      })
      .subscribe((permanentRequests: DonationRequestInterface[]) => {
        this.permanentRequests = permanentRequests;
      },
        (err) => {
          // TODO: Handle error
          console.error(err);
        });
  }

  private findOneTimeRequests() {

    const now = new Date();
    this.donationRequestApi.find({
      include: ['product', { organization: [{ city: 'province' }] }],
      where:
      {
        // creationDate: {lte: now },
        //  status: true,
        isOpen: true,
        isPermanent: false,
        expirationDate: { gte: now }
      }
    })
      .subscribe((oneTimeRequests: DonationRequestInterface[]) => {
        this.oneTimeRequests = oneTimeRequests;
      },
        (err) => {
          // TODO: Handle error
          console.error(err);
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
        this.orgs = orgs;
        // obtain data from param org
        this.getOrg();
      },
        (err) => {
          // TODO: Handle error
          console.error(err);
        });
  }

  private findProducts() {

    this.productApi.find(
      {
      })
      .subscribe((prods: ProductInterface[]) => {
        this.products = prods;
      },
        (err) => {
          // TODO: Handle error
          console.error(err);
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
          // TODO: Handle error
          console.error(err);
        });
  }


  public donationTypeChange(response) {
    this.donationType = response;
  }

  public cityChange(response) {
    this.city = response;

  }

  public orgChange(response) {
    this.orgId = response;
    // obtain org to show
    this.getOrg();

  }

  getOrg() {
    if (this.orgId && this.orgs) {
      this.organization = this.orgs.find(org => org.id === this.orgId);
    } else {
      this.organization = null;

    }

  }

  getParams() {
    this.route
      .queryParams
      .subscribe(params => {
        const id = params['orgId'];
        const city = params['city'];
        if (id) {
          this.orgChange(id);
        } else {
          if (this.orgId) {
            this.orgChange(null);
          }
        }
        if (city) {
          this.cityChange(city);
        } else {
          if (this.city) {
            this.cityChange(null);
          }
        }
      });

  }


}
