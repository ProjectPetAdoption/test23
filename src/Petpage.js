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
    <p className="text2"><b>Pet type-</b>Dog</p>
        <p className="text2"><b>Age -</b> 6 months</p>
        <p className="text2"><b>Gender -</b>  Female</p>
        <p className="text2"><b>Breed -</b>French bulldog</p>
        <p className="text2"><b>Behaviour -</b> playful</p>
        <p className="text2"><b>Any Disease -</b> no</p>
        <p className="text2"><b>Weight (in kgs) -</b> 8 kgs/p>
        <p className="text2"><b>Contact -</b>1234567890</p>
        <p className="text2"><b>Email -</b>doggo123@gmail.com</p>
    <p className="text2"><b>Location -</b>Delhi</p>
        <p className="text2"><b>Vaccination -</b> Doe</p>
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

