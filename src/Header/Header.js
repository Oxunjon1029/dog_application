import React from 'react';
import './header.css';
import DogLogo from './img/dog-logo.png';
import {FaSearch,FaCartPlus,FaBars, FaTimes, FaFacebookF, FaInternetExplorer, FaTwitter} from 'react-icons/fa';
import Dog from './img/puppy.jpg';
import FirstCardImg from './img/first-card-img.png';
import SecondCardImg from './img/second-card-img.png';
import ThirdCardImg from './img/third-card-img.png';
import FifthCardImg from './img/popular-products-first-img.png';
import FourthCardImg from './img/popular-produtcs-second-img.png';
import SixthCardImg from './img/popular-pruducts-third-img.png';
import SevethCardImg from './img/popular-products-fourth-img.png';
import EigthCardImg from './img/popular-products-fifth-img.png';
import WomenWithDog from './img/woman-dog.png';
import FirstDogImg from './img/first-dog.png';
import SecondDogImg from './img/second-dog.png';
import ThirdDogImg from './img/third-dog.png';
import GalleryFirstImg from './img/gallery-first.png';
import GallerySecondImg from './img/gallery-second.png';
import GalleryThirdImg from './img/gallery-third.png';
import GalleryFourthImg from './img/gallery-fourth.png';
import GalleryFifthImg from './img/gallery-fifth.png';
import FooterLogo from './img/footer-logo.png';
import Slider from 'react-slick';
const Header = () => {
    const settings = {
        dots: false,
        prev:true,
        nextSlide:true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        beforeChange: function(currentSlide, nextSlide) {
          console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
          console.log("after change", currentSlide);
        }
      };
    const CardsObject=[
        {
            img:FirstCardImg,
            foods:`Best Quality Products  Pen Foods`,
            paw:"Dogs leave paw prints forever on our hearts. A dog shade the.",
            button:"See Details",
            
        },
        {
            img:SecondCardImg,
            foods:"Best Quality Products Pen Foods",
            paw:"Dogs leave paw prints forever on our hearts. A dog shade the.",
            button:"See Details"
        },
        {
            img:ThirdCardImg,
            foods:"Best Quality Products Pen Foods",
            paw:"Dogs leave paw prints forever on our hearts. A dog shade the.",
            button:"See Details"
        },
    ]
  const CuteDogsCards =[
      {
          img:FirstDogImg,
          h3:"Dogs leave paw prints forever on our hearts",
          bite:"Dogs never bite me. Just humans.Happiness is a warm puppy. My little dog a heartbeat at my feet.Necessity has the face of a dog.",
          button:"View Details"
      },
      {
          img:SecondDogImg,
          h3:"Dogs leave paw prints forever on our hearts",
          bite:"Dogs never bite me. Just humans.Happiness is a warm puppy. My little dog a heartbeat at my feet.Necessity has the face of a dog.",
          button:"View Details"
      },
      {
          img:ThirdDogImg,
          h3:"Dogs leave paw prints forever on our hearts",
          bite:"Dogs never bite me. Just humans.Happiness is a warm puppy. My little dog a heartbeat at my feet.Necessity has the face of a dog.",
          button:"View Details"
      }
  ]

  const ThumbUp=()=>{
      document.querySelector(".burger-shadow").classList.toggle("burger-shadow-opened")
      document.querySelector(".central").classList.toggle("central-opened")
  }
  const Cancel=()=>{
    document.querySelector(".burger-shadow").classList.toggle("burger-shadow-opened")
    document.querySelector(".central").classList.toggle("central-opened")
  }
  const SearchDiv=()=>{
      document.querySelector(".search-box").classList.toggle("search-box-opened")
  }
  const SearchCancel=()=>{
    document.querySelector(".search-box").classList.toggle("search-box-opened")
    document.querySelector(".innerHTML").value=""

  }
const Onclick=()=>{
    document.querySelector(".right-dog").classList.toggle("right-dog-opened")
}
const OnclickCancel=()=>{
    document.querySelector(".right-dog").classList.toggle("right-dog-opened")

}
    return (
        <div   className="dog-header">
            <div className="container">
            <div className="first-dog-header-row">
                <a href="#" className="d-inline-block logo"><img src={DogLogo} className="img-fluid" alt=""/>DOG</a>
                <button onClick={ThumbUp} className="burger">
                    <FaBars/>
                  
                </button>
                <div className="burger-shadow">
                    <div className="central">
                    <FaTimes onClick={Cancel} className="times" />
                        <ul className="header-menu-opened">
                        <li onClick={Cancel} ><a href="#">Products</a></li>
                        <li onClick={Cancel} ><a href="#">Dog Care</a></li>
                        <li onClick={Cancel} ><a href="#">About</a></li>
                        <li onClick={Cancel} ><a href="#">Popular</a></li>
                        </ul>
                    </div>
                </div>
                <div  className="search-box">
                    <div className="center">
                        <input className="innerHTML" type="text"/>
                        <FaSearch  onClick={SearchCancel} className="search"/>
                    </div>
                </div>
                <div onClick={OnclickCancel} className="right-dog">
                    <img src={Dog} className="img-fluid" alt=""/>
                </div>
                <ul className="header-menu">
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Dog Care</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Popular</a></li>
                </ul>
                <ul className="d-flex icons">
                    <li  onClick={SearchDiv}><a href="#"><FaSearch /></a></li>
                    <li><a href="#"><FaCartPlus/></a></li>
                    <li onClick={Onclick}><a href="#"><FaBars/></a></li>
                </ul>
            </div>
            </div>
            
            <div className="container ">
                   <div className="second-dog-row">
                       <div className="copilot dogs">
                           <h1>
                           Dog is my  Copilot.
                           </h1>
                           <div className="dog-buttons">
                               <button className="buy-now">Buy Now</button>
                               <button className="see-details">See Details</button>
                           </div>
                       </div>
                       <div className="dog-img dogs">
                           <img src={Dog} className="img-fluid" alt=""/>
                       </div>
                    </div> 
                    <div className="cards">
                       {
                           CardsObject.map(item=>(
                            <div className="card-one">
                            <div className="cards-img">
                            <img src={item.img} className="img-fluid" alt=""/>
                            </div>
                            
                            <p className="text-center pen-foods">
                                {item.foods}
                            </p>
                            <p className="text-center paw-prints">
                                {item.paw}
                            </p>
                            <button>
                                {item.button}
                            </button>
                        </div>
                           ))
                       }
                    </div>
            </div>
            <div className="container mt-5">
                <div className="popular-products">
                    <div>
                    <h1 className="text-center">
                    Popular Products
                    </h1>
                    <p className="text-center">
                    A dog in heat needs more than shade The more people I meet the more <br/> I like my dog.Dogs leave paw prints forever on our hearts.
                    </p>
                    </div>
                   
                </div>
                <div className="popular-products-cards">
                    <div className="products-cards">
                        <div className="products-cards-img-first">
                            <img src={FourthCardImg} className="img-fluid" alt=""/>
                        </div>
                        <h4>
                        Mauris blandit aliquet
                        </h4>
                        <button>
                        View Details
                        </button>
                    </div>
                    <div className="products-cards last">
                        <div className="products-cards-img-second">
                        <img src={FifthCardImg} className="img-fluid" alt=""/>
                        </div>
                        <h4>
                        Mauris blandit aliquet
                        </h4>
                        <button>
                        View Details
                        </button>
                    </div>
                </div>
                <div className="popular-products-cards-secondRow">
                    <div className="popular-products-second">
                        <div className="popular-products-cards-img-third">
                            <img src={SixthCardImg} className="img-fluid" alt=""/>
                        </div>
                        <h4>
                        Mauris blandit aliquet
                        </h4>
                        <button>
                        View Details
                        </button>
                    </div>
                    <div className="popular-products-second">
                        <div className="popular-products-cards-img-third">
                            <img src={SevethCardImg} className="img-fluid" alt=""/>
                        </div>
                        <h4>
                        Mauris blandit aliquet
                        </h4>
                        <button>
                        View Details
                        </button>
                    </div>
                    <div className="popular-products-second last">
                        <div className="popular-products-cards-img-third">
                            <img src={EigthCardImg} className="img-fluid" alt=""/>
                        </div>
                        <h4>
                        Mauris blandit aliquet
                        </h4>
                        <button>
                        View Details
                        </button>
                    </div>
                </div>
                <div className="dog-care">
                    <div className="dog-care-img">
                        <img src={WomenWithDog} className="img-fluid" alt=""/>
                    </div>
                    <div className="dog-care-adoption">
                        <p className="p-dog-care">
                        Dog Care
                        </p>
                        <h4 className="adoption">
                        Start your adoption journey <br/> with us
                        </h4>
                        <p className="dog-in-heat">
                        A dog in heat needs more than shade The more people I meet the <br/> more I like my dog.The more people I meet the more I like my Dogs <br/> leave paw prints forever on our hearts.
                        </p>
                        <div className="d-flex justify-content-space-between">
                            <button className="appointment">
                            Appointment Now
                            </button>
                            <button className="details">
                            See Details
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-center mothly-sub">
                How the Monthly <br/> Subscription Work?
                </h3>
                </div>
                
                <div className="cute-dogs-cards">
                    {
                        CuteDogsCards.map(item=>(
                            <div className="cute-dogs">
                                <img src={item.img} className="img-fluid" alt=""/>
                                <h3 className="forever">
                                    {item.h3}
                                </h3>
                                <p className="bite">
                                    {item.bite}
                                </p>
                                <button className="view-details">
                                    {item.button}
                                </button>
                            </div>
                        ))
                    }
                </div>
                <div className="subscribe">
                    <button>
                    Subscribe
                    </button>
                </div>
                <div className="gallery">
                    <div className="first-gallery">
                        <h4 className="text-center">
                        Popular Products Gallery
                        </h4>
                        <p className="text-center">
                        A dog in heat needs more than shade The more people I meet the more I like <br/> my dog.Dogs leave paw prints forever on our hearts.
                        </p>
                        <div className="first-colmuns">
                            <div className="col-one">
                                <img src={GalleryFirstImg} className="img-fluid" alt=""/>
                            </div>
                            <div className="col-two ">
                                <img src={GallerySecondImg} className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div className="second-columns">
                            <div className="second-col-one">
                                <img src={GalleryThirdImg} className="img-fluid" alt=""/>
                            </div>
                            <div className="second-col-two">
                                <img src={GalleryFourthImg} className="img-fluid" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="second-gallery last">
                        <img src={GalleryFifthImg} className="img-fluid" alt=""/>
                    </div>
                </div>
           
            </div>
            <footer className="dog-footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="first-footer-column">
                            <ul className="footer-ul-menu">
                                <li>
                               <a href="#"> Product & Policy</a>
                                </li>
                                <li>
                               <a href="#"> Privacy & About</a>
                                </li>
                                <li>
                               <p className="d-inline-block">
                               Contact: <a  style={{color:"#E27B3A"}} href="#">alaminhossen.75bd@gmail.com</a>
                               </p>
                                </li>
                            </ul>
                        </div>
                        <div className="second-footer-column">
                                <img src={FooterLogo} className="img-fluid" alt=""/>
                                <div className="footer-icons">
                                    <div className="facebook">
                                        <FaFacebookF/>
                                    </div>
                                    <div className="internet">
                                        <FaInternetExplorer/>
                                    </div>
                                    <div className="twitter">
                                        <FaTwitter/>
                                    </div>
                                </div>
                        </div>
                        <div className="third-footer-column">
                            <ul className="footer-dog-care-ul">
                                <li>
                                <a href="#">Dog Care</a>
                                </li>
                                <li>
                               <a href="#"> Privacy & Policy</a>
                                </li>
                                <li>
                               <a href="#"> Popular Product</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Header
