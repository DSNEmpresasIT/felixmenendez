import React, { useEffect, useState } from 'react';
import './accordion-component.css';

const AccordionChild = ({ navItem, handleFilterNav }: any) => {
  const [ show, setShow ] = useState<boolean>(false)
  const handleOpen = () => {
    if (navItem.products?.length) {
      setShow(!show)
    } else {
      handleFilterNav(navItem.filter, true);
    }
  }
  
  return (
    <>
      <button 
        type='button' 
        onClick={handleOpen}
        className={`accordion-subtype-button ${!navItem.products?.length && 'fw-normal'}`}
      >
        { navItem.name }
        
        { navItem.products?.length && <i className={`icofont-rounded-right ${show && 'rotate-animation'}`} ></i> }
      </button>
        {
          navItem.products?.length && (
            <ul className={`accordion-subtypes-containers ${show && 'show-accordion-content'}`}>
              <li onClick={() => handleFilterNav(navItem.filter, false)}>Mostar todos los productos</li>
              { navItem.products?.map((item:any)=> <li key={item.name+'accordionchild'} onClick={() => handleFilterNav(item.filter, true)}>{item.name}</li>) }
            </ul>
          )
        }
    </>
  )
}

export const AccordionItem = ({ navItem, handleFilterNav }: any) => {
  const [show, setShow] = useState(false);
  return (
    <ul className="accordion-shop-component">
      <div className="accordion-button-containers">
        <button 
          type='button' 
          onClick={() => setShow(!show)}
          className="accordion-main-button"
        >
          {navItem.name}
          { navItem.subTypes?.length && <i className={`icofont-rounded-right ${show && 'rotate-animation'}`}></i> }
        </button>
        <ul className={`accordion-types-container ${show && 'show-accordion-content'}`}>
          <button 
            type='button'
            style={{ fontSize: '14px' }}
            onClick={() => handleFilterNav(navItem.filter, false)}
            className='accordion-subtype-button'
          >
            Mostrar todos los productos
          </button>
          {
            navItem.subTypes?.map((subType:any, i:number) => {
              return <AccordionChild key={i+'accordionitem'} navItem={subType} handleFilterNav={handleFilterNav} />
            })
          }
        </ul>
      </div>
    </ul>
  )
}
