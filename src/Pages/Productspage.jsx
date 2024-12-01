import React from 'react'
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import './Productpage.css'

function Productspage() {
  return (
    <>

      <MDBCarousel className='carousel' showControls interval={2500}>
        <MDBCarouselItem itemId={1} interval={1000}>
          <img src='./milkcarousel1.jpg' className='carouselimg d-block w-100' alt='...' />
          <MDBCarouselCaption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <img src='./milkcarousel2.jpg' className='d-block w-100' alt='...' />
          <MDBCarouselCaption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img src='milkcarousel5.jpg' className='d-block w-100' alt='...' />
          <MDBCarouselCaption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>
      <h1 className='sell text-center m-3'>MOST SELLING</h1>

      <div className='grid-container'>
        <div className='item1 container'>
        </div>
        <div className="item2">
        </div>
        <div className="item3">
        </div>
        <div className="item4">
        </div>
      </div>
    </>
  )
}

export default Productspage