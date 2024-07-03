import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { setMenspantsData, setSelectedProduct } from '../../Redux/Actions'
import '../clothes.css'
import Example from '../../comp/Button'; 
import Menspants from '../../data/MansPants'; 
import YouTube from 'react-youtube';
import {  Carousel, Offcanvas  } from 'react-bootstrap';
import logo from'../../logo.jpg'

const Pants = () => {

  const dispatch = useDispatch();
  const menspants= useSelector(state => state.menspants);
  const selectedProduct = useSelector(state => state.selectedProduct);
  const [show, setShow] = useState(false);

                 // Fetch data from pantsData.js
                 useEffect(() => {
                  dispatch(setMenspantsData(Menspants ));
                }, [dispatch]);
            
              const handleProduct = (item) => {
                  dispatch(setSelectedProduct(item));
                  setShow(true);
              };
              const handleShow = (item) => {
                dispatch(setSelectedProduct(item));
                setShow(true);
            };
          
          
              const handleClose = () => setShow(false);

                  //  video control

                  const Items = [
                    { videoId: 'y5Cm8b4pN-s', alt: 'Fashion video', link: 'https://www.youtube.com/watch?v=92YIjFE-2k8&list=PL0cA19vPhtoXfSpSGq4Hi00YGRaRKBSMS&ab_channel=EveryDeepMoment' },
                    ];
                    
                    const opts = {
                    height: '390',
                    width: '100%',
                    playerVars: {
                    autoplay: 1,
                    controls: 0,
                    modestbranding: 1,
                    rel: 0,
                    showinfo: 0,
                    mute: 1,
                    loop: 1,
                    playlist: 'y5Cm8b4pN-s' 
                    
                    }
                    };
                    
                    const onReady = (event) => {
                    event.target.mute();
                    event.target.playVideo();
                    };
                    
                
              



  return (
    <div>
      <div  style={{display:'flex'}}>
                                                         {/* parag */}
              <div >
              <p id='prag'
           style={{
            marginTop:'41%',
           }}>
              Discover our latest men's collection Pants,<br/> 
              where style meets comfort in the most fashionable way.<br/>
                from chic and casual  to trendy<br/>
                ensuring there's something for every occasion.!</p></div>

                                           {/* video */}

                        <Carousel controls={false} style={{marginTop:'7%',width:'50%'}} >
      {Items.map((item,) => (
        
          <a  href={item.link} >
            <YouTube 
              videoId={item.videoId}
              opts={opts}
              onReady={onReady}
            />
          </a>
     
      ))}
    </Carousel>

<div>
                     {/* logo */}
</div>

<img src={logo } alt="logo" style={{ width: '20%', height: '20%',marginTop:'7.5%', opacity: 0.45}}/>
 </div>



                             {/* cards */}
                             <div className="row">
                {menspants.map(item => (
                    <div key={item.id} className="col-md-3 mb-3">
                        <Card className='crd' onClick={() => handleProduct(item)}  style={{ border: '5px solid black',width: '80%' ,marginLeft:'12%',marginTop:'10%',
                           color: 'white',
                           fontSize: '1.2em',
                           textAlign: 'center',
                           backgroundColor:'rgba(255, 255, 255, 0.15)',
                           textShadow: '2px 2px 4px rgba(0, 0, 0, 10.9)',
                           height:'90%'
                        }}>
                            <Card.Img style={{haighborderColor:'black',opacity: 0.9, border: '5px solid black',height:'600px'}} variant="top" src={item.photo_link} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                                <Card.Text>
                                    <strong>${item.price}</strong>
                                </Card.Text>

                                {/* button */}
                                <Example  onClick={() => handleShow(item)} />
                            </Card.Body> 
                        </Card>
                    </div>
                ))}
            </div>

            <Offcanvas id="display" show={show} onHide={handleClose} style={{ width:"50% " }}>
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

export default Pants