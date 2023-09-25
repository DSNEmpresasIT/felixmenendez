import React, { useEffect, useState } from "react";
import { db } from "src/util/catalogData";
import { ProductData, ProductTypes } from "src/util/types";

const mainNavData = [
  {
    name: 'Herbicidas',
    filter: ProductTypes.HERBICIDAS,
    length: db.filter(product => product.filters.includes(ProductTypes.HERBICIDAS)).length,
  },
  {
    name: 'Fertilizantes',
    filter: ProductTypes.FERTILIZANTES,
    length: db.filter(product => product.filters.includes(ProductTypes.FERTILIZANTES)).length,
  },
  {
    name: 'Insecticidas',
    filter: ProductTypes.INSECTICIDAS_GENERAL,
    length: db.filter(product => product.filters.includes(ProductTypes.INSECTICIDAS_GENERAL)).length,
  },
  {
    name: 'Fungicidas',
    filter: ProductTypes.FUNGICIDAS,
    length: db.filter(product => product.filters.includes(ProductTypes.FUNGICIDAS)).length,
  },
  {
    name: 'Hermicidas',
    filter: ProductTypes.HERMICIDAS,
    length: db.filter(product => product.filters.includes(ProductTypes.HERMICIDAS)).length,
  },
  {
    name: 'Semilla',
    filter: ProductTypes.SEMILLA,
    length: db.filter(product => product.filters.includes(ProductTypes.SEMILLA)).length,
  },
];

function groupProductsByFormulation(products: ProductData[]) {
  const groupedProducts: { [formulacion: string]: ProductData[] } = {};

  products.forEach((product: ProductData) => {
    if (!product.formulacion) return undefined;

    if (!groupedProducts[product.formulacion]) {
      groupedProducts[product.formulacion] = [product];
    } else {
      groupedProducts[product?.formulacion].push(product);
    }
  });

  return groupedProducts;
}

export const ShopNavComponentNew = ({ handleFilterNav, updateFilteredData }:
  {
    handleFilterNav: (category: ProductTypes, isName: boolean) => void;
    updateFilteredData: (filteredData: ProductData[]) => void;
  }) => {

  const [selectedCategory, setSelectedCategory] = useState<ProductTypes | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<ProductData[]>([]);
  const [selectedFormulation, setSelectedFormulation] = useState<string | null>(null);
  const [isActiveSubstance, setActiveSubstance] = useState<boolean | null>(false);

  const handleClickCategory = (category: ProductTypes, isName: boolean) => {
    handleFilterNav(category, isName);

    if (category) {
      setSelectedCategory(category)
      filterCategoryByFormulacion(category)
    }
  };

  const handleClickFormulation = (formulation: string) => {
    setSelectedFormulation(formulation);
    const filteredByFormulation = filteredProducts.filter((product) => product.formulacion === formulation);
    updateFilteredData(filteredByFormulation);
  };

  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedFormulation(null);
    setFilteredProducts([]);
  };
 
  const allData = (db: ProductData[]) => {
    updateFilteredData(db);
    resetFilters();
  };

  const filterCategoryByFormulacion = (category: ProductTypes) => {
    const newFilteredProducts = db.filter((product) => product.filters.includes(category));
    setFilteredProducts(newFilteredProducts);
    setActiveSubstance(newFilteredProducts.length > 0 ? newFilteredProducts[0].isActiveSubstance || false : false);
  }
  const groupedProducts = groupProductsByFormulation(filteredProducts);
  
  return (
    <>

      <div className="widget widget-category">
        <div className="widget-header">
          <h5>Tipos de productos</h5>
        </div>
        <ul className="agri-ul widget-wrapper">
          <li onClick={()=> allData(db)}>
            <a href="#" className="d-flex flex-wrap justify-content-between"
            >
              <span>
                <i className="icofont-double-right" ></i>Ver Todos
              </span>
              <span>({db.length})</span>
            </a>
          </li>
          {mainNavData.map(data => {
            return (
              <li key={data.filter}>
                <a href="#" className={`d-flex flex-wrap justify-content-between ${selectedCategory === data.filter ? 'active' : ''
                  }`}
                  onClick={() => handleClickCategory(data.filter, false)}>
                  <span>
                    <i className="icofont-double-right"></i>{data.name}
                  </span>
                  <span>({data.length})</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="widget widget-category">
        {selectedCategory && (
          <div className="widget-header">
            <h5>
            {selectedCategory !== ProductTypes.SEMILLA && selectedCategory !== ProductTypes.HERMICIDAS && 
            ( isActiveSubstance ? 'Principio Activo' : 'Formulación') }
            </h5>
          </div>
        )}
        <ul className="agri-ul widget-wrapper">
          {Object.keys(groupedProducts).map((formulation, index) => (
            <li key={index}>
              <a
                href="#"
                className={`d-flex flex-wrap justify-content-between ${selectedFormulation === formulation ? 'active' : ''
                  }`}
                onClick={() => handleClickFormulation(formulation)}
              >
                <span>
                  <i className="icofont-double-right"></i>
                  {formulation}
                </span>
                <span>({groupedProducts[formulation].length})</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
