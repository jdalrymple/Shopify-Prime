export interface InventoryLevelListOptions {
    /**
     * The maximum number of objects that should be returned, up to 250. Setting this parameter above 250 will result in an error.
     */
    limit?: number;

    /**
     * The page number of the result list to retrieve. Use this in tandem with limit to page through the webhooks in a shop.
     */
    page?: number;

    /**
     * A comma-separated list of inventory item IDs.
     */
    inventory_item_ids?: string;

    /**
     * A comma-separated list of location IDs.
     */
    location_ids?: string;
}