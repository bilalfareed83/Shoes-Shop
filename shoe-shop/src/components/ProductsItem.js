import React from 'react';
import shoes from '../shoesData.json';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Slide from 'react-reveal/Slide';

export const ProductsItem = () => {
  const { id } = useParams();
  const shoe = shoes[id];

  return (
    <div className="container">
      {/* <Slide left>
        <h3 style={{ color: '#2e303e' }}>Shoe you like</h3>
      </Slide>

      <div>
        <Slide right>
          <div className="shoeSelect">
            <h4 style={{ color: '#2e303e', padding: '20px' }}>{shoe.name}</h4>
            <img src={shoe.img} style={{ height: 300 }} />
          </div>

          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: 'black',
              cursor: 'pointer',
            }}
          >
            <Button variant="outlined">Back</Button>
          </Link>
        </Slide>
      </div> */}
      <div>
        <h3 style={{ color: '#2e303e' }}>Shoe you like</h3>
      </div>
      <div className="item-div">
        <div className="shoeSelect">
          {' '}
          <h4 style={{ color: '#2e303e', padding: '20px' }}>{shoe.name}</h4>
          <img src={shoe.img} style={{ height: 300 }} />
        </div>

        <div>
          <h1>form</h1>
          <input />
          <br />
          <br />
          <input />
        </div>
      </div>
    </div>
  );
};
