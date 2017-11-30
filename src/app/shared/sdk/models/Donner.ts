/* tslint:disable */

declare var Object: any;
export interface DonnerInterface {
  "name": string;
  "lastName": string;
  "phoneNumber": string;
  "dni": string;
  "realm"?: string;
  "username"?: string;
  "email": string;
  "emailVerified"?: boolean;
  "id"?: any;
  "password"?: string;
  accessTokens?: any[];
  organizationReviews?: any[];
  donationResponses?: any[];
}

export class Donner implements DonnerInterface {
  "name": string;
  "lastName": string;
  "phoneNumber": string;
  "dni": string;
  "realm": string;
  "username": string;
  "email": string;
  "emailVerified": boolean;
  "id": any;
  "password": string;
  accessTokens: any[];
  organizationReviews: any[];
  donationResponses: any[];
  constructor(data?: DonnerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Donner`.
   */
  public static getModelName() {
    return "Donner";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Donner for dynamic purposes.
  **/
  public static factory(data: DonnerInterface): Donner{
    return new Donner(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Donner',
      plural: 'Donners',
      path: 'Donners',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "lastName": {
          name: 'lastName',
          type: 'string'
        },
        "phoneNumber": {
          name: 'phoneNumber',
          type: 'string'
        },
        "dni": {
          name: 'dni',
          type: 'string'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        organizationReviews: {
          name: 'organizationReviews',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'donnerId'
        },
        donationResponses: {
          name: 'donationResponses',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'donnerId'
        },
      }
    }
  }
}
