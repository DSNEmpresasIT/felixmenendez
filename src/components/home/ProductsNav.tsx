import React, { FC } from 'react';

interface ProductsNavProps {
  productsData : {
    filter: string;
    name: string;
  }[]
}

export const ProductsNav:FC<ProductsNavProps> = ({ productsData }) => {
  return (
    <ul className="agri-ul product-filter-name">
      <li data-filter="*" className="active">Ver todo</li>
      { 
        productsData?.map((buttonData:any, i:number ) => {
          return <li style={{ textTransform: 'capitalize' }} key={i} data-filter={`.${buttonData.filter}`}>{buttonData.name}</li>
        })
      }
    </ul>  
  )
}
 