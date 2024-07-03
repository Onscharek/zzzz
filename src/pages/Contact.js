import { ClockCircleOutlined, EnvironmentOutlined, FacebookOutlined, InstagramOutlined, MailOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';





function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // Styles for icons and list items
  const iconStyle = { fontSize: '200%', marginRight: '1%' };
  const itemStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center' };

 

  return (
    <>
      <Button onClick={handleShow} className="me-2"
      style={{backgroundColor:'black' ,borderColor:'black'}}>
      <MailOutlined />
      </Button>


      <Offcanvas  style={{backgroundColor:'black', height:"50% " }} show={show} onHide={handleClose} {...props} >
        <Offcanvas.Header  closeButton>
          <Offcanvas.Title style={{color:'white',height:'10px'}}> <p >Contact Us About Any Think You like !</p> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          
          
                             {/* contact infos */}
<div style={{ display: 'flex', justifyContent: 'center' }}>
<ListGroup style={{ width: '50%',marginRight:'2%' }}>
  <ListGroup.Item>
    <div style={itemStyle}>
      <EnvironmentOutlined style={iconStyle} />
      <p>
        <b>Chark-Garment</b><br />
        Route de la Marsa<br />
        Bureau B-7, 1e Étage,<br />
        2046 Sidi Daoud, Sidi Daoud<br />
        Tunisie
      </p>
    </div>
  </ListGroup.Item>
  <ListGroup.Item>
    <div style={itemStyle}>
      <ClockCircleOutlined style={iconStyle} />
      <p>
        <b>Timing</b><br />
        Monday - Friday: 8h - 13h, 14h - 17h<br />
        Saturday: 8h - 12h
      </p>
    </div>
  </ListGroup.Item>
  <ListGroup.Item>
    <div style={itemStyle}>
      <FacebookOutlined style={iconStyle} />
      <p><b>Charek-garment</b></p>
    </div>
  </ListGroup.Item>
  <ListGroup.Item>
    <div style={itemStyle}>
      <InstagramOutlined style={iconStyle} />
      <p><b>Charek-garment</b></p>
    </div>
  </ListGroup.Item>
  <ListGroup.Item>
    <div style={itemStyle}>
      <WhatsAppOutlined style={iconStyle} />
      <p><b>+216 56 089 588</b></p>
    </div>
  </ListGroup.Item>
  <ListGroup.Item>
    <div style={itemStyle}>
      <MailOutlined style={iconStyle} />
      <p><b>Chgarment
        @gmail.com</b></p>
    </div>
  </ListGroup.Item>
</ListGroup>

                                                {/* email input */}
     <div>
     <Form style={{ textAlign:'center'}}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       <Form.Label><b style={{color:'white'}}> Your Email address </b></Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
       <Form.Label><b style={{color:'white'}}>Your Text Here</b></Form.Label>
        <Form.Control as="textarea" rows={5} cols={100} />
      </Form.Group>
      <Button variant="secondary" onClick={handleClose} style={{textAlign:'center',backgroundColor:'black',color:'white'}}>
          Close
          </Button>
          <Button variant="primary"  style={{textAlign:'center',backgroundColor:'rgb(200,200,200)',color:'black',borderColor:'black'}}>
          Submit Email
          </Button>
    </Form>
  </div>
          
        </div>
        </Offcanvas.Body>
      </Offcanvas>
     </>
  );
}

function Contact() {
  return (
    <>
      {[ 'top'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default Contact



