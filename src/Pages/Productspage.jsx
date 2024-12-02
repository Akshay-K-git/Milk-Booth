import React from 'react'
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import './Productpage.css'
import Product from '../components/Product';

function Productspage() {
  const products = [
    {
        imageSrc: './milmatoned.png',
        title: 'Product 1',
        description: 'Description for product 1',
    },
    {
        imageSrc: './milmalite.jpg',
        title: 'Product 2',
        description: 'Description for product 2',
    },
    {
        imageSrc: './milmasmart.png',
        title: 'Product 3',
        description: 'Description for product 3',
    },
    {
      imageSrc: './milmapridemilk.png',
      title: 'Product 3',
      description: 'Description for product 3',
  },
  {
    imageSrc: './homogenizedtonedmilk.png',
    title: 'Product 3',
    description: 'Description for product 3',
}
];
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
        <div className='item1'></div>
        <div className="item2"></div>
        <div className="item3"></div>
        <div className="item4">
        </div>
      </div>
      <section className='products'>
        <h3 className='milkpr ms-4 my-4'>MILK VAREITIES</h3>
     
        <div className="row my-4">
        {products.map((product, index) => (
          <div className="col" key={index}><Product imageSrc={product.imageSrc}
                            title={product.title}
                            description={product.description}/></div>
                          ))}
        </div>
        <div className="row my-4">
          <div className="col"><Product/></div>
          <div className="col"><Product/></div>
          <div className="col"><Product/></div>
          <div className="col"><Product/></div>
          <div className="col"><Product/></div>
        </div>
        <div className="row my-4">
          <div className="col"><Product/></div>
          <div className="col"><Product/></div>
          <div className="col"><Product/></div>
          <div className="col"><Product/></div>
          <div className="col"><Product/></div>
        </div>
        
       
      </section>
    </>
  )
}

export default Productspage