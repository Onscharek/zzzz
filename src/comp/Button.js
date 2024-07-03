// src/comp/Button.js
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import '../pages/clothes.css';
import Modal from 'react-bootstrap/Modal';


function OffCanvasExample({ name, onClick, ...props }) {
    const [show, setShow] = useState(false);
    const selectedProduct = useSelector(state => state.selectedProduct);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        onClick(); 
        setShow(true);
    };

    return (
        <>
            <Button id="shopNow" variant="primary" onClick={handleShow}>
                Shop Now
            </Button>

            <Modal show={show} onHide={handleClose} {...props} >
                <Modal.Header closeButton style={{textAlign:'center',backgroundColor:'black',color:'white'}} >
                    <Modal.Title >PRODUCT ADDED TO CART SUCCESSFULLY!</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{backgroundColor:'rgb(240,240,240)'}}>
                    {selectedProduct ? (
                        <div style={{textAlign:'center'}}>
                            
                            <p>{selectedProduct ? selectedProduct.name : 'Product Details'}</p>
                            <div style={{display:'flex' ,alignItems:'center'}}>
                            <img src={selectedProduct.photo_link} alt={selectedProduct.name} style={{ width: '50%' }} />
                            <p> {selectedProduct.description}</p></div>
                            <strong>${selectedProduct.price}</strong>
                        </div>
                    ) : (
                        'No product selected'
                    )}
                </Modal.Body>
                <Modal.Footer style={{textAlign:'center',backgroundColor:'black',color:'white'}}>
          <Button variant="secondary" onClick={handleClose} style={{textAlign:'center',backgroundColor:'black',color:'white'}}>
          Continue Shopping
          </Button>
          <Button variant="primary" href="/ShCart" style={{textAlign:'center',backgroundColor:'rgb(200,200,200)',color:'black',borderColor:'black'}}>
          Check Cart
          </Button>
        </Modal.Footer>
      </Modal>
         
        </>
    );
}

function Example(props) {
    return (
        <>
            {['end'].map((placement, idx) => (
                <OffCanvasExample key={idx} placement={placement} name={placement} {...props} />
            ))}
        </>
    );
}

export default Example;
