import * as Options from '../options';
import { BaseService } from '../infrastructure';
import { InventoryLevel } from '../models';

/**
 * A service for manipulating Shopify's InventoryLevels API.
 */
export class InventoryLevels extends BaseService {
    constructor(shopDomain: string, accessToken: string) {
        super(shopDomain, accessToken, "inventory_levels");
    }

    public list(options?: Options.ListOptions & Options.FieldOptions) {
        return this.createRequest<InventoryLevel[]>("GET", ".json", "inventory_levels", options);
    }

    public adjust(id: number, options?: { location_id?: number, inventory_item_id?: number, available_adjustment?: number } ) {
        return this.createRequest<void>("POST", `adjust.json`, "inventory_levels", options);
    }

    public delete(inventoryItemId: number, locationId: number) {
        return this.createRequest<void>("DELETE", `.json?inventory_item_id=${inventoryItemId}&location_id=${locationId}`, "inventory_levels");
    }

    public connect(id: number, options?: { location_id?: number, inventory_item_id?: number, relocate_if_necessary?: boolean } ) {
        return this.createRequest<void>("POST", `connect.json`, "inventory_levels", options);
    }

    public set(id: number, options?: { location_id?: number, inventory_item_id?: number, available?: number, disconnect_if_necessary?: boolean } ) {
        return this.createRequest<void>("POST", `set.json`, "inventory_levels", options);
    }
}

export default InventoryLevels;