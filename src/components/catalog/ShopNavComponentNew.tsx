import React, { useEffect, useState } from "react";
import { db } from "src/util/catalogData";
import { PATH_ROUTES } from "src/util/pages";
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

export const ShopNavComponentNew = ({ handleFilterNav, updateFilteredData, filter }:
  {
    handleFilterNav: (category: ProductTypes, isName: boolean) => void;
    updateFilteredData: (filteredData: ProductData[]) => void;
    filter: ProductTypes
  }) => {

  const [selectedCategory, setSelectedCategory] = useState<ProductTypes | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<ProductData[]>([]);
  const [selectedFormulation, setSelectedFormulation] = useState<string | null>(null);
  const [isActiveSubstance, setActiveSubstance] = useState<boolean | null>(false);

  const [selectedSubtype, setSelectedSubtype] = useState<ProductTypes | null>(null);
  const showSubtypes = selectedCategory === ProductTypes.FERTILIZANTES || selectedCategory === selectedSubtype;
  const [selectedTags, setSelectedTags] = useState<ProductTypes[]>([]);

  const handleClickCategory = (category: ProductTypes, isName: boolean) => {
    handleFilterNav(category, isName);
    if (category) {
      if (!showSubtypes || category !== selectedSubtype) {
        setSelectedCategory(category);
        setSelectedTags([category]);
      }
      filterCategoryByFormulacion(category);
    }
  };

  const handleClickFormulation = (formulation: any) => {
    setSelectedFormulation(formulation);
    const filteredByFormulation = filteredProducts.filter(
      (product) => product.formulacion === formulation
    );
    updateFilteredData(filteredByFormulation);
    setSelectedTags([selectedCategory, formulation]);
  };

  const handleRemoveTag = (index: number) => {
    const updatedTags = [...selectedTags];
    updatedTags.splice(index, 1);
    setSelectedFormulation(null)
    setSelectedTags(updatedTags);
    if (index === 0) {
      updateFilteredData(db)
      setSelectedCategory(null);
      setSelectedTags([]);
    } else if (index === 1 && selectedCategory) {
      handleFilterNav(selectedCategory, false);
    }
  };

  const filterCategoryByFormulacion = (category: ProductTypes) => {
    const newFilteredProducts = db.filter((product) => product.filters.includes(category));
    setFilteredProducts(newFilteredProducts);
    setActiveSubstance(newFilteredProducts.length > 0 ? newFilteredProducts[0].isActiveSubstance || false : false);
  }

  return (
    <>
        {selectedTags?.map((tag, index) => (
          <ul className="widget widget-tags agri-ul widget-wrapper" key={index}>
            <li>
            <a onClick={() => handleRemoveTag(index)}>{tag} X</a>
            </li>
          </ul>
        ))}
     
      <div className="widget widget-category">
        <div className="widget-header">
          <h5>Tipos de productos</h5>
        </div>
        <ul className="agri-ul widget-wrapper">
          {selectedCategory ? (
            <li>
              <a href={`/${PATH_ROUTES.PRODUCTS_PATH}/${PATH_ROUTES.CATALOG_PATH}`} className="d-flex flex-wrap justify-content-between">
                <span>
                  <i className="icofont-double-right"></i>Ver Todos
                </span>
                <span>({db.length})</span>
              </a>
            </li>
          ) : (
            mainNavData.map((data) => (
              <li key={data.filter}>
                <a
                  className={`d-flex flex-wrap justify-content-between ${selectedCategory === data.filter ? 'active' : ''}`}
                  onClick={() => handleClickCategory(data.filter, false)}
                >
                  <span>
                    <i className="icofont-double-right"></i>
                    {data.name}
                  </span>
                  <span>({data.length})</span>
                </a>
              </li>
            ))
          )}

          {showSubtypes && (
            <li>
              {Object.values(ProductTypes)
                .filter(type => type.startsWith('Fertilizantes'))
                .map(subtype => (
                  <a
                    key={subtype}
                    className={`d-flex flex-wrap justify-content-between ${selectedSubtype === subtype ? 'active' : ''}`}
                    onClick={() => {
                      handleClickCategory(subtype, false);
                      setSelectedSubtype(subtype);
                    }}
                  >
                    <span>
                      <i className="icofont-double-right"></i>
                      {subtype.replace('FERTILIZANTES_', '')}
                    </span>
                    <span>({subtype.length})</span>
                  </a>
                ))
              }
            </li>
          )}
        </ul>
      </div>
      <div className="widget widget-category">
        {selectedCategory && (
          <div className="widget-header">
            <h5>
              {selectedCategory !== ProductTypes.SEMILLA && selectedCategory !== ProductTypes.HERMICIDAS &&
                (isActiveSubstance ? 'Principio Activo' : 'Formulación')}
            </h5>
          </div>
        )}
        <ul className="agri-ul widget-wrapper">
          {[
            ...new Set(filteredProducts.map((product) => product.formulacion))
          ].map((formulation, index) => {
            if (formulation && selectedCategory) {
              const formulationLength = filteredProducts.filter((product) => product.formulacion === formulation).length;
              return (
                <li key={index}>
                  <a
                    className={`d-flex flex-wrap justify-content-between ${selectedFormulation === formulation ? 'active' : ''}`}
                    onClick={() => handleClickFormulation(formulation)}
                  >
                    <span>
                      <i className="icofont-double-right"></i>
                      {formulation}
                    </span>
                    {formulationLength > 1 && <span>({formulationLength})</span>}
                  </a>
                </li>
              );
            }
          })
          }
        </ul>
      </div>
    </>
  );
};
