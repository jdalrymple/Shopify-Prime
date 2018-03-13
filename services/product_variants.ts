import * as Options from '../options';
import { ProductVariant } from '../models';
import { BaseService } from '../infrastructure';

/**
 * A service for manipulating a blog's product variants.
 */
export class ProductVariants extends BaseService {
    constructor(shopDomain: string, accessToken: string) {
        super(shopDomain, accessToken, "variants");
    }

    /**
     * Gets the product variant with the given id.
     * @param id The product variant's id.
     * @param options Options for filtering the results.
     */
    public get(id: number, options?: Options.FieldOptions) {
        return this.createRequest<ProductVariant>("GET", `${id}.json`, "variants", options);
    }

    /**
     * Updates a product variant with the given id.
     * @param id The product variant's id.
     * @param order The updated order.
     */
    public update(id: number, productVariant: ProductVariant) {
        return this.createRequest<ProductVariant>("PUT", `${id}.json`, "variants", { productVariant });
    }
}

export default ProductVariants;
