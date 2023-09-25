import React, { useEffect, useState } from 'react'
import { db } from 'src/util/catalogData';
import type { ProductData } from 'src/util/types'

export const BestProducts = () => {
  const [ products, setProducts ] = useState<ProductData[]>();

  useEffect(() => {
    setProducts(db.filter(product => product.name === 'Claron' || product.name === 'Mastermins Plus'));
  }, [])
  return (
    <div className="col-xl-3 col-md-6 col-12">
      <div className="footer-item footer-blog">
        <div className="footer-inner">
          <div className="footer-title">
            <h5>Productos Seleccionados</h5>
          </div>
          <div className="footer-body">
            <ul className="agri-ul">
              {
                products?.map((product: ProductData) => {
                  return (
                    <li key={product.name+'--footer'}>
                      <div className="thumb">
                        <a href={`/products/${product.name.split(' ').join('')}`}><img src={product.img ? `/assets/images/product/${product.img}/${product.img}.png` : '/assets/images/product/placeholder/placeholder.jpg'} alt="footer-blog" /></a>
                      </div>
                      <div className="detalis">
                        <a href={`/products/${product.name.split(' ').join('')}`}><h5>{product.name}</h5></a>
                        <h6></h6>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
