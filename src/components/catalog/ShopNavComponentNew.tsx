import React, { useEffect, useState } from "react";
import { db } from "src/util/catalogData";
import { PATH_ROUTES } from "src/util/pages";
import { ProductData, ProductTypes } from "src/util/types";

const mainNavData = [
  {
    name: "Herbicidas",
    filter: ProductTypes.HERBICIDAS,
    length: db.filter((product) =>
      product.filters.includes(ProductTypes.HERBICIDAS)
    ).length,
  },
  {
    name: "Fertilizantes",
    filter: ProductTypes.FERTILIZANTES,
    length: db.filter((product) =>
      product.filters.includes(ProductTypes.FERTILIZANTES)
    ).length,
  },
  {
    name: "Insecticidas",
    filter: ProductTypes.INSECTICIDAS_GENERAL,
    length: db.filter((product) =>
      product.filters.includes(ProductTypes.INSECTICIDAS_GENERAL)
    ).length,
  },
  {
    name: "Fungicidas",
    filter: ProductTypes.FUNGICIDAS,
    length: db.filter((product) =>
      product.filters.includes(ProductTypes.FUNGICIDAS)
    ).length,
  },
  {
    name: "Hermicidas",
    filter: ProductTypes.HERMICIDAS,
    length: db.filter((product) =>
      product.filters.includes(ProductTypes.HERMICIDAS)
    ).length,
  },
  {
    name: "Semilla",
    filter: ProductTypes.SEMILLA,
    length: db.filter((product) =>
      product.filters.includes(ProductTypes.SEMILLA)
    ).length,
  },
];

export const ShopNavComponentNew = ({
  handleSetFilter,
  updateFilteredData,
  filters,
  productsLength
}: {
  handleSetFilter: (category: ProductTypes) => void;
  updateFilteredData: (filteredData: ProductData[]) => void;
  filters: ProductTypes | null;
  productsLength: number
}) => {
  const [filteredProducts, setFilteredProducts] = useState<ProductData[]>([]);
  const [selectedFormulation, setSelectedFormulation] = useState<string | null>(null);
  const [isActiveSubstance, setActiveSubstance] = useState<boolean | null>(false);
  const [selectedSubtype, setSelectedSubtype] = useState<ProductTypes | null>(null);
  const [selectedTags, setSelectedTags] = useState<ProductTypes[]>([]);

  const showSubtypes = filters === ProductTypes.FERTILIZANTES || (selectedSubtype !== null && selectedSubtype === filters);

  const handleClickCategory = (category: ProductTypes, isName: boolean) => {
    if (category) {
      if (!showSubtypes || category !== selectedSubtype) {
        handleSetFilter(category);
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
    setSelectedTags([filters, formulation]);
  };

  const resetFilters = () => {
    // @ts-ignore
    handleSetFilter(null);
    setSelectedSubtype(null);
    setSelectedTags([]);
  };

  const handleRemoveTag = (index: number) => {
    const updatedTags = selectedTags.filter((_, i) => i !== index);
    setSelectedFormulation(null);
    setSelectedTags(updatedTags);

    if (index === 0) {
      updateFilteredData(db);
      resetFilters();
    } else if (index === 1 && filters) {
      updateFilteredData(db.filter(item => item.filters.includes(filters)))
    }
  };

  const filterCategoryByFormulacion = (category: ProductTypes) => {
    const newFilteredProducts = db.filter((product) =>
      product.filters.includes(category)
    );
    setFilteredProducts(newFilteredProducts);
    setActiveSubstance(
      newFilteredProducts.length > 0
        ? newFilteredProducts[0].isActiveSubstance || false
        : false
    );
  };

  useEffect(() => {
    if (filters) {
      filterCategoryByFormulacion(filters);
      setSelectedTags([filters])
    }
  }, [filters]);

  return (
    <>
      <div className="widget widget-category">
        <div className="widget-header">
            {!filters 
              ? <h5>Tipos de productos</h5> 
              : (
                <>
                  <h5>{selectedTags[0]} {selectedTags[1] && selectedTags[1]}</h5>
                  <span>{productsLength} {productsLength === 1 ? 'resultado' : 'resultados'}</span>
                </>
              )
            }
        </div>
        {filters && (
          <div className="widget widget-tags mt-2">
            <ul className="agri-ul widget-wrapper">
              {selectedTags?.map((tag, index) => (
                <li
                  className=""
                  style={{ backgroundColor: "none" }}
                  key={index}
                >
                  <a type="button" style={{ textTransform: 'capitalize' }} onClick={() => handleRemoveTag(index)}>
                    {tag}
                    <span style={{ marginLeft: "10px", padding: "2px" }}>
                      x
                    </span>
                  </a>{" "}
                </li>
              ))}
            </ul>
            <a 
              onClick={resetFilters}
              style={{ marginTop: '5px', color: 'rgb(0, 103, 160)', fontSize: '13px' }} 
              type="button"
            >
              Limpiar filtros
            </a>
          </div>
        )}
        <ul className="agri-ul widget-wrapper">
          {filters ? (
            <li>
              <a
                href={`/${PATH_ROUTES.PRODUCTS_PATH}/${PATH_ROUTES.CATALOG_PATH}`}
                className="d-flex flex-wrap justify-content-between"
              >
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
                  className={`d-flex flex-wrap justify-content-between ${
                    filters === data.filter ? "active" : ""
                  }`}
                  type="button"
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
                .filter((type) => type.startsWith("Fertilizantes"))
                .map((subtype) => (
                  <a
                    key={subtype}
                    className={`d-flex flex-wrap justify-content-between ${
                      selectedSubtype === subtype ? "active" : ""
                    }`}
                    type="button"
                    onClick={() => {
                      handleClickCategory(subtype, false);
                      setSelectedSubtype(subtype);
                    }}
                  >
                    <span>
                      <i className="icofont-double-right"></i>
                      {subtype.replace("FERTILIZANTES_", "")}
                    </span>
                    <span>({subtype.length})</span>
                  </a>
                ))}
            </li>
          )}
        </ul>
      </div>
      <div className="widget widget-category">
        {filters && (
          <div className="widget-header">
            <h5>
              {filters !== ProductTypes.SEMILLA &&
                filters !== ProductTypes.HERMICIDAS &&
                (isActiveSubstance ? "Principio Activo" : "Formulación")}
            </h5>
          </div>
        )}
        <ul className="agri-ul widget-wrapper">
          {[
            ...new Set(filteredProducts.map((product) => product.formulacion)),
          ].map((formulation, index) => {
            if (formulation && filters) {
              const formulationLength = filteredProducts.filter(
                (product) => product.formulacion === formulation
              ).length;
              return (
                <li key={index}>
                  <a
                    type="button"
                    className={`d-flex flex-wrap justify-content-between ${
                      selectedFormulation === formulation ? "active" : ""
                    }`}
                    onClick={() => handleClickFormulation(formulation)}
                  >
                    <span>
                      <i className="icofont-double-right"></i>
                      {formulation}
                    </span>
                    {formulationLength > 1 && (
                      <span>({formulationLength})</span>
                    )}
                  </a>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
};
