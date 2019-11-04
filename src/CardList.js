import React from 'react';
import Card from './Card';


import Slider from "react-slick";


const CardList = ({ robots }) => {
    return (
      <div class='ml3 mt3 w-100'>
        {
          robots.map((user, i) => {
            return (
              <Card
                key={i}
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
                />
            );
          })
        }
      </div>
    );
  }
  

/*
 const CardList = ({ robots }) => {

        var settings = {
            dots: false,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
        return (
            <div className='container'>
              <Slider {...settings}>
                <div style={{display: 'inline-block ba bg-white', width: 500}}>
                   Hello
                </div>
                <div style={{display: 'inline-block', width: 500}}>
                   Hello
                </div>
            </Slider>
          </div>
        );

  }
*/
 
/*
 const CardList = ({ robots }) => {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        return (
          <div>
            <h2> Multiple items </h2>
            <Slider {...settings}>
                <div class=''>
                {
                    robots.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                    })
                }
                </div>
            </Slider>
          </div>
        );      
  }
  */

  export default CardList;