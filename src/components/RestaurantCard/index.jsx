import React from 'react';
import ReactStars from 'react-rating-stars-component';

import foto from '../../assets/chestnut-restaurant.jpg';

import { Restaurant, RestaurantInfo, RestaurantPic,RestaurantName, Address } from './styles';

const RestaurantCard = ({ restaurant }) => (
  <Restaurant>
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
    <RestaurantPic src={restaurant.photos ? restaurant.photos[0].getUrl() : foto} alt="Foto do Restaurante" />
  </Restaurant>
);

export default RestaurantCard;
