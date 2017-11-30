/* tslint:disable */

declare var Object: any;
export interface OneTimeRequestInterface {
  "ammount": number;
  "expirationDate": Date;
  "covered": number;
  "promised": number;
  "creationDate": Date;
  "id"?: any;
  "productId"?: any;
  product?: any;
}

export class OneTimeRequest implements OneTimeRequestInterface {
  "ammount": number;
  "expirationDate": Date;
  "covered": number;
  "promised": number;
  "creationDate": Date;
  "id": any;
  "productId": any;
  product: any;
  constructor(data?: OneTimeRequestInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `OneTimeRequest`.
   */
  public static getModelName() {
    return "OneTimeRequest";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of OneTimeRequest for dynamic purposes.
  **/
  public static factory(data: OneTimeRequestInterface): OneTimeRequest{
    return new OneTimeRequest(data);
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
      name: 'OneTimeRequest',
      plural: 'OneTimeRequests',
      path: 'OneTimeRequests',
      idName: 'id',
      properties: {
        "ammount": {
          name: 'ammount',
          type: 'number'
        },
        "expirationDate": {
          name: 'expirationDate',
          type: 'Date'
        },
        "covered": {
          name: 'covered',
          type: 'number',
          default: 0
        },
        "promised": {
          name: 'promised',
          type: 'number',
          default: 0
        },
        "creationDate": {
          name: 'creationDate',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "productId": {
          name: 'productId',
          type: 'any'
        },
      },
      relations: {
        product: {
          name: 'product',
          type: 'any',
          model: '',
          relationType: 'belongsTo',
                  keyFrom: 'productId',
          keyTo: 'id'
        },
      }
    }
  }
}
