import * as Options from '../options';
import { Location } from '../models';
import { BaseService } from '../infrastructure';

/**
 * A service for manipulating a blog's product variants.
 */
export class Locations extends BaseService {
    constructor(shopDomain: string, accessToken: string) {
        super(shopDomain, accessToken, "");
    }

    /**
     * Gets a location with the given id.
     * @param id Id of the location being retrieved.
     * @param options Options for filtering the result.
     */
    public get(id: number, options?: Options.FieldOptions) {
        return this.createRequest<Location>("GET", `locations/${id}.json`, "location", options);
    }

    /**
     * Lists up to 250 locations.
     * @param options Options for filtering the results.
     */
    public list(options?: Options.FieldOptions) {
        return this.createRequest<Location>("GET", `locations.json`, "locations", options);
    }

    /**
     * Counts the amount of locations.
     */
    public count() {
        return this.createRequest<number>("GET", `locations/count.json`, "count");
    }

    /**
     * Lists all the inventory levels on a location.
     */
    public inventoryLevels(locationId: number) {
        return this.createRequest<Location>("GET", `locations/${locationId}/inventory_levels.json`, "inventory_levels");
    }
}

export default Locations;
