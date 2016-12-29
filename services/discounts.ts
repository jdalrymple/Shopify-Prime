import { Discount } from "../typings/models/discount";
import BaseService from "../infrastructure/base_service";
import { FieldOptions, ListOptions } from "../typings/options/base";

/**
 * A service for manipulating Shopify discounts.
 */
export default class Discounts extends BaseService {
    constructor(shopDomain: string, accessToken: string) {
        super(shopDomain, accessToken, "discounts");
    }

    /**
      * Creates a new discount.
      */
    public create(discount: Discount) {
        return this.createRequest<Discount>("POST", ".json", "discount", { discount: discount });
    }

    /**
     * Gets a list of up to 250 of the shop's discounts.
     * @param options Options for filtering the results.
     */
    public list(options?: ListOptions) {
        return this.createRequest<Discount[]>("GET", ".json", "discounts", options);
    }

    /**
     * Retrieves the discount with the given id.
     * @param options Options for filtering the results.
     */
    public get(id: number) {
        return this.createRequest<Discount>("GET", `${id}.json`, "discount");
    }

    /**
     * Enables a discount.
     */
    public enable(id: number) {
        return this.createRequest<Discount>("POST", `${id}/enable.json`, "discount");
    }

    /**
     * Disable a discount.
     */
    public disable(id: number) {
        return this.createRequest<Discount>("POST", `${id}/disable.json`, "discount");
    }

    /**
     * Deletes the discount with the given id.
     */
    public delete(id: number) {
        return this.createRequest<void>("DELETE", `${id}.json`);
    }
}