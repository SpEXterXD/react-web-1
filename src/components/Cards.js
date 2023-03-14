import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Updates Will be Here</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src=''
              text='TODO'
              label='Updates'
              path='/about'
            />
             <CardItem
              src=''
              text='TODO'
              label='Updates'
              path='/about'
            />
          </ul>
          <ul className='cards__items'>
              <CardItem
              src=''
              text=''
              label=''
              path='/about'
            />
            <CardItem
              src=''
              text=''
              label=''
              path=''
            />
            <CardItem
              src=''
              text=''
              label=''
              path=''
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;