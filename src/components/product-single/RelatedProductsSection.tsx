import React, { FC, useState } from "react";
import type { ProductData } from "../../util/types";
import { db } from "src/util/catalogData";
import { PATH_ROUTES } from "src/util/pages";
import { getPlaceholder } from "src/util/getPlaceholder";

interface RelatedProductsSectionProps {
  productSelected: ProductData;
}

export const RelatedProductsSection: FC<RelatedProductsSectionProps> = ({
  productSelected,
}) => {
  return (
    <div className="shop-product-wrap row">
      <h5>Productos Relacionados</h5>
      {
        db.filter((product: ProductData) => (product.filters.includes(productSelected.filters[0])) && !(product.name === productSelected.name))
        .map((relatedProduct: ProductData, i: number) => {
          if (i > 5) {
            return;
          }
          const img = relatedProduct.img ?? getPlaceholder(relatedProduct.filters);
          return (
            <div className="col-lg-4 col-md-6 col-12" key={`${i}-related`}>
              <div className="product-item">
                <div className="product-thumb">
                  <img src={`/assets/images/product/${img}/${img}.png`} alt="item" />
                  <div className="product-action-link">
                    <a
                      href={`/${PATH_ROUTES.PRODUCTS_PATH}/${relatedProduct.name.split(' ').join('')}`}
                      ><i className="icofont-eye"></i></a>
                  </div>
                </div>
                <div className="product-content">
                  <h6><a href={`/${PATH_ROUTES.PRODUCTS_PATH}/${relatedProduct.name.split(' ').join('')}`}>{relatedProduct.name}</a></h6>
                  <p style={{ paddingLeft: '10px', maxWidth: '200px', maxHeight: '40px', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
                    {relatedProduct.specs?.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};
