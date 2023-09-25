import { AccordionItem } from '@components/accordion/AccordionItem';
import React from 'react';
import { db } from 'src/util/catalogData';
import { ProductData, ProductTypes } from 'src/util/types';

// CUANDO ES PRODUCTO: BOTONES DE DESCARGAS PDF

interface NavData {
  name: string;
  filter: string;
  subTypes?: SubTypes[];
}

interface SubTypes {
  name: string; 
  filter: string;
  products?: NavData[];
}

export const ShopNavComponent = ({ handleFilterNav }: any) => {
  const navData: NavData[]= [
    {
      name: 'Fertilizantes',
      filter: ProductTypes.FERTILIZANTES,
      subTypes: [
        {
          name: 'Granulados',
          filter: ProductTypes.FERTILIZANTES_GRANULADOS,
          products: db.filter(product => product.filters.includes(ProductTypes.FERTILIZANTES_GRANULADOS)).sort((a, b) => a.name.localeCompare(b.name)).map(product => {
            return {
              name: product.name,
              filter: product.name
            }
          })
        },
        {
          name: 'Solubles',
          filter: ProductTypes.FERTILIZANTES_SOLUBLES,
          products: db.filter(product => product.filters.includes(ProductTypes.FERTILIZANTES_SOLUBLES)).sort((a, b) => a.name.localeCompare(b.name)).map(product => {
            return {
              name: product.name,
              filter: product.name
            }
          })
        }
      ]
    }, 
    {
      name: 'Fertilizantes líquidos',
      filter: ProductTypes.FERTILIZANTES_LIQUIDOS,
      subTypes: [
        // {
        //   name: 'Herbicidas',
        //   filter: ProductTypes.FERTILIZANTES_LIQUIDOS_HERBICIDAS,
        //   products: db.filter(product => product.filters.includes(ProductTypes.FERTILIZANTES_LIQUIDOS_HERBICIDAS)).map(product => {
        //     return {
        //       name: product.name,
        //       filter: product.name
        //     }
        //   })
        // },
        ...db.filter(product => product.filters.includes(ProductTypes.FERTILIZANTES_LIQUIDOS) && (product.filters.length === 1)).sort((a, b) => a.name.localeCompare(b.name)).map(product => {
          return {
            name: product.name,
            filter: product.name,
          }
        })
      ]
    }, 
    {
      name: 'Herbicidas',
      filter: ProductTypes.HERBICIDAS,
      subTypes: [
        ...db.filter(product => product.filters.includes(ProductTypes.HERBICIDAS) && (product.filters.length === 1)).sort((a, b) => a.name.localeCompare(b.name)).map(product => {
          return {
            name: product.name,
            filter: product.name,
          }
        })
      ]
    }, 
    {
      name: 'Insecticidas General',
      filter: ProductTypes.INSECTICIDAS_GENERAL,
      subTypes: [
        ...db.filter(product => product.filters.includes(ProductTypes.INSECTICIDAS_GENERAL) && (product.filters.length === 1)).sort((a, b) => a.name.localeCompare(b.name)).map(product => {
          return {
            name: product.name,
            filter: product.name,
          }
        })
      ]
    }, 
    {
      name: 'Fungicidas',
      filter: ProductTypes.FUNGICIDAS,
      subTypes: [
        ...db.filter(product => product.filters.includes(ProductTypes.FUNGICIDAS) && (product.filters.length === 1)).sort((a, b) => a.name.localeCompare(b.name)).map(product => {
          return {
            name: product.name,
            filter: product.name,
          }
        })
      ]
    }, 
    {
      name: 'Semilla',
      filter: ProductTypes.SEMILLA,
      subTypes: [
        ...db.filter(product => product.filters.includes(ProductTypes.SEMILLA) && (product.filters.length === 1)).sort((a, b) => a.name.localeCompare(b.name)).map(product => {
          return {
            name: product.name,
            filter: product.name,
          }
        })
      ]
    }, 
    {
      name: 'Hormiguicidas',
      filter: ProductTypes.HERMICIDAS,
      subTypes: [
        ...db.filter(product => product.filters.includes(ProductTypes.HERMICIDAS) && (product.filters.length === 1)).sort((a, b) => a.name.localeCompare(b.name)).map(product => {
          return {
            name: product.name,
            filter: product.name,
          }
        })
      ]
    }, 
  ]

  return (
    <div className="widget widget-category">
      <div className="widget-header">
        <h5>Productos</h5>
      </div>
      <div className="widget-wrapper">
        {
          navData.map((navItem:NavData, i:number) => {
            return <AccordionItem key={i+'shopnav'} handleFilterNav={handleFilterNav} navItem={navItem}/>
          })
        }
      </div>
    </div>
  )
}