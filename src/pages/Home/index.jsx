import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import foto from '../../assets/chestnut-restaurant.jpg';
import { Card, RestaurantCard, Modal, Map, Loader, Skeleton } from '../../components';
import { Wrapper, Container, Search, Logo, Carousel, CarouselTitle } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState('');
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Restaurant Finder" />
          <TextField
            label="Pesquisar"
            outlined
            onTrailingIconSelect={() => this.setState({value: ''})}
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          >
            <Input
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={(e) => setInputValue(e.target.value) } />
          </TextField>
          {restaurants.length > 0 ? (
            <>
              <CarouselTitle>Na sua Área</CarouselTitle>
                <Carousel { ... settings}>
                  {restaurants.map((restaurant) => (
                    <Card
                      key={restaurant.place_id}
                      photo={restaurant.photos ? restaurant.photos[0].getUrl() : foto}
                      title={restaurant.name}
                    />
                  ))}
                </Carousel>
            </>
          ) : (
            <Loader />
          )}
        </Search>
        {restaurants.map((restaurant) =>(
          <RestaurantCard restaurant={restaurant} />
        ))}
      </Container>
      <Map query={query}/>
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
  );
};

export default Home;
