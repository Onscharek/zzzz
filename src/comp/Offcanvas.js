import React, { useState } from 'react'
import {   Offcanvas  } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {handleProduct,handleShow } from'

const Ocanvas = () => {

    const selectedProduct = useSelector(state => state.selectedProduct);
    const [show, ] = useState(false);
    const handleClose = () => setShow(false);

    const handleProduct = (item) => {
        dispatch(setSelectedProduct(item));
        setShow(true);
    };
    const handleShow = (item) => {
      dispatch(setSelectedProduct(item));
      setShow(true);
  };



  return (
    <div>            <Offcanvas id="display" show={show} onHide={handleClose} style={{ width:"50% " }}>
    <Offcanvas.Header closeButton>
        <Offcanvas.Header>{selectedProduct ? selectedProduct.name : 'Product Details'}</Offcanvas.Header>
    </Offcanvas.Header>
    <Offcanvas.Body>
        {selectedProduct ? (
            <div><div>
                <img src={selectedProduct.photo_link} alt={selectedProduct.name} style={{ width: '100%' }} />
                <p >{selectedProduct.description}</p>
                <strong>${selectedProduct.price}
                </strong>        
            </div>
            </div>
        ) : (
            'No product selected'
        )}
    </Offcanvas.Body>
</Offcanvas>

</div>
  )
}

export default Ocanvas