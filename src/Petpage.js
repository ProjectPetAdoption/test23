import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './nav'; 
import Footer from './footer'; 
import   './Petpage.css';


const Petpage = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
      slide.style.left = `${index * 100}%`;
    });
  }, []);

  const goPrev = () => {
    setCounter((prevCounter) => prevCounter - 1);
    slideImage();
  };

  const goNext = () => {
    setCounter((prevCounter) => prevCounter + 1);
    slideImage();
  };

  const slideImage = () => {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  };

  return (
    <>
    <Nav/>
    <div className="megabox">
      <div className="desc">
        <p className="text1"><b>Name</b></p>
        <br />
        <br />
        <p className="text3">
        Max is a charismatic ball of fur, his coat a mosaic of rich browns and whites that shimmer in the sunlight. His eyes, deep and soulful, mirror the boundless energy and unwavering loyalty he brings to every moment. Whether chasing after a favorite toy or curling up for a cozy nap, Max is the epitome of joy and companionship. His friendly demeanor and playful antics make every day brighter, turning ordinary moments into cherished memories. Max isn't just a pet; he's a beloved member of the family, adding warmth and love to each passing day.
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* Additional details for the dog */}
        <p className="text2"><b>11 yrs -</b> xyz</p>
        <p className="text2"><b>male -</b> xyz</p>
        <p className="text2"><b>Bulldog -</b> xyz</p>
        <p className="text2"><b>Playful-</b> xyz</p>
        <p className="text2"><b>no -</b> xyz</p>
        <p className="text2"><b>8 kgs -</b> xyz</p>
        <p className="text2"><b>1234 -</b> xyz</p>
        <p className="text2"><b>123@gmail.com -</b> xyz</p>
        <p className="text2"><b>435 -</b> xyz</p>
        <br />
        <br />
        <Link to="/Adoptform">
      <button className="badopt">Adopt</button>
    </Link>
      </div>
      <div className="images">
        <main >
          {/* Images */}
          <img src="staypic1.jpeg" className="slide" alt="" />
          <img src="staypic2.jpeg" className="slide" alt="" />
          <img src="staypic3.jpeg" className="slide" alt="" />
          <img src="staypic4.jpeg" className="slide" alt="" />
        </main>
        <div className="nav">
          <button onClick={goPrev} className="prev">←</button>
          <button onClick={goNext} className="next">→</button>
        </div>
      </div>
    </div>

    <Footer/>

    </>
  );
};



export default Petpage;

