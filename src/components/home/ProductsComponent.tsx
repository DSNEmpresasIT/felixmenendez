import React, { useState } from 'react'
import type { ProductData } from "src/util/types";
import { ProductsNav } from "./ProductsNav";
import { fungicidasDataMock, insecticidasDataMock,  } from "src/util/catalogData";

interface NavType {
  filter: string;
  name: string;
}

const allData:ProductData[] = [
  insecticidasDataMock[0], 
  insecticidasDataMock[1], 
  fungicidasDataMock[0],
  fungicidasDataMock[1],
]

const ProductsComponent = () => {
  const navData: NavType[] = allData
    .map(product => (
      { 
        filter: product.filters[0], 
        name: product.filters[0],
      }
    ))
    .filter((value, index, self) =>
      index === self.findIndex((t) => (
        t.filter === value.filter && t.name === value.name
      ))
    )
  
  return (
    <section className="product-section padding-tb" style={{backgroundColor: '#f7f7f7'}}>
    <div className="container">
      <div className="section-header wow fadeInUp" data-wow-delay="0.4s">
        <h3>Algunos de nuestros productos</h3>
        <p>Mire nuestro catálogo completo.</p>
        <a style={{ color: '#ffb11f' }} href="/products/catalog">Click aquí.</a>
      </div>
      <div className="section-wrapper wow fadeInUp" data-wow-delay="0.5s">
        <ProductsNav productsData={navData}  /> 
        <div className="grid">
          {
            allData.map((img, i) => {
                return (
                  <div key={i} className={`product-item ${img.filters[0]}`}>
                    <div className="product-inner">
                      <div className="product-thumb">
                        <img
                          src={`/assets/images/product/${img.img}/${img.img}.png`}
                          alt="product"
                        />
                      </div>
                      <div className="product-content">
                        <a href={`/products/${img.img}`} style={{ fontSize: '25px', textTransform: 'capitalize' }} className="product-name">
                          {img.filters[0]}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }
            )
          }
        </div>
      </div>
    </div>
  </section>
  )
}

export default ProductsComponent;
