import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

import foto from '../../assets/chestnut-restaurant.jpg';

import Skeleton from '../Skeleton';
import { Restaurant, RestaurantInfo, RestaurantPic,RestaurantName, Address } from './styles';

const RestaurantCard = ({ restaurant, onClick }) => {

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <RestaurantName>{restaurant.name}</RestaurantName>
        <ReactStars
          count={5}
          isHalf
          value={restaurant.rating}
          edit={false}
          activeColor="#e7711c"
        />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
      <RestaurantPic
        imageLoaded={imageLoaded}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : foto}
        onLoad={() => setImageLoaded(true)}
        alt="Foto do Restaurante"
      />
      {!imageLoaded && <Skeleton width="100px" height="100px" />}
    </Restaurant>
  );
};

export default RestaurantCard;
