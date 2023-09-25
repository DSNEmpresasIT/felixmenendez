import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import type { ProductData } from 'src/util/types';

interface SearcherComponentProps {
  setProductData: Dispatch<SetStateAction<ProductData[]>>,
  allData: ProductData[]
}

export const SearcherComponent:FC<SearcherComponentProps> = ({ setProductData, allData }) => {
  const [ input, setInput ] = useState<string>('');

  const hanldeInputChange = (e: any) => {
    const search = e.target.value;
    const filter = allData.filter( product => (
      product.name.toLowerCase().indexOf(search.toLowerCase()) !== -1) 
      || (product.formulacion && product.formulacion.toLowerCase().indexOf(search.toLowerCase()) !== -1)
    )
    
    search.length ? setProductData(filter) : setProductData(allData);
    setInput(search)
  }

  return (
    <div className="widget widget-search">
        <div className="widget-header">
            <h5>Buscar</h5>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="search-wrapper">
            <input type="text" name="search" placeholder="Que está buscando?" value={input} onChange={hanldeInputChange}/>
            <button type="button"><i className="icofont-search-2"></i></button>
        </form>
    </div>
  )
}
