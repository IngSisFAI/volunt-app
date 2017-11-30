/* tslint:disable */
import {
  Product
} from '../index';

declare var Object: any;
export interface PermanentRequestInterface {
  "ammount": number;
  "status": boolean;
  "closingDate": Date;
  "creationDate": Date;
  "id"?: any;
  "productId"?: any;
  product?: Product;
}

export class PermanentRequest implements PermanentRequestInterface {
  "ammount": number;
  "status": boolean;
  "closingDate": Date;
  "creationDate": Date;
  "id": any;
  "productId": any;
  product: Product;
  constructor(data?: PermanentRequestInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PermanentRequest`.
   */
  public static getModelName() {
    return "PermanentRequest";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PermanentRequest for dynamic purposes.
  **/
  public static factory(data: PermanentRequestInterface): PermanentRequest{
    return new PermanentRequest(data);
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
      name: 'PermanentRequest',
      plural: 'PermanentRequests',
      path: 'PermanentRequests',
      idName: 'id',
      properties: {
        "ammount": {
          name: 'ammount',
          type: 'number'
        },
        "status": {
          name: 'status',
          type: 'boolean'
        },
        "closingDate": {
          name: 'closingDate',
          type: 'Date'
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
          type: 'Product',
          model: 'Product',
          relationType: 'belongsTo',
                  keyFrom: 'productId',
          keyTo: 'id'
        },
      }
    }
  }
}
