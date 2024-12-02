import React from 'react'
import './Landingpage.css'
import { useInView } from 'react-intersection-observer';

function LandingPage() {
    // const { ref: card1Ref, inView: card1InView } = useInView({ triggerOnce: true });
    // const { ref: card2Ref, inView: card2InView } = useInView({ triggerOnce: true });
    // const { ref: card3Ref, inView: card3InView } = useInView({ triggerOnce: true });



    const cards = [
        {
            id: 1,
            title: "KCMMF Units",
            description: "Straight from the farm to your table.",
            image: "./milk_dairy.jpg",
        },
        {
            id: 2,
            title: "MILMA Dairies",
            description: "Supporting local producers and communities.",
            image:"./factory.jpg",
        },
        {
            id: 3,
            title: "MILMA Societies",
            description: "Packed with essential nutrients for your health.",
            image: "./Milk.jpg",
        },
    ];

    return (
        <>

            <div className='section1'>

                <div className='content'>
                    <div className="slogan">FARM FRESH MILK</div>
                    <div className="des">Farm-fresh milk offers a richer taste, higher nutritional value, and fewer additives compare to store-bought milk. It supports local farmers, promote sustainability, and provides transparency in production practices.</div>
                    <div className="buttons">
                        <button className='a'>Login</button>
                        <button className='b'>See more</button>
                    </div>
                </div>
                <div className="milma">
                    <img className='logoround' src="./logoround.png" width={'105px'} height={'100px'} alt="" />
                    <div class="loader">
                        <span><h1>milma</h1></span>
                        <span> <h1>milma </h1></span>
                    </div>
                </div>
            </div>
            <div className=' section2 '>
                <video className='cowgraze' width={'100%'} autoPlay loop muted>
                    <source src='./cowgrazing.mp4' type='video/mp4' />
                </video>
                <h1 className='heading'>MILMA UNITS </h1>               
                 <div className='cardsec'>
                  
                     {cards.map((card) => {
                        // Use the `useInView` hook for each card
                        const { ref, inView } = useInView({
                            threshold: 0.5, // Trigger when 50% of the card is visible
                        });

                        return (
                            <div
                            key={card.id}
                            ref={ref}
                        className={`cardx ${inView ? "zoom-in" : "zoom-out"}`}
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="card-image"
                            />
                            <h3 className="card-title">{card.title}</h3>
                            <p className="card-description">{card.description}</p>
                        </div>
                        );
                    })}
                </div>

            </div>

        </>
    )
}

export default LandingPage