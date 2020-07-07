import React from 'react';
import shoes from '../shoesData.json';

export const Products = () => {
  const shoe = Object.keys(shoes);
  return (
    <div>
      <h3>Products page</h3>
      <div>
        {shoe.map((item) => {
          return (
            <div key={item} className="shoeDisplay">
              <h4>{shoes[item].name}</h4>
              <img src={shoes[item].img} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
