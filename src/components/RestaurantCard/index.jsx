import React from 'react';
import ReactStars from 'react-rating-stars-component';

import foto from '../../assets/chestnut-restaurant.jpg';

import { Restaurant, RestaurantInfo, RestaurantPic,RestaurantName, Address } from './styles';

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <RestaurantName>Nome do Restaurante</RestaurantName>
      <ReactStars
        count={5}
        isHalf
        value={4}
        edit={false}
        activeColor="#e7711c"
      />
      <Address>Endereco</Address>
    </RestaurantInfo>
    <RestaurantPic src={foto} alt="Foto do Restaurante" />
  </Restaurant>
);

export default RestaurantCard;
