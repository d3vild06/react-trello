import React from 'react';
import Card from './card';

export default function List(props) {
  const cardContent = props.cards;
  const card = cardContent.map((content, index) => {
    return <Card text={content} key={index}/>
  });

  return(
    <div>
      <h3>{props.title}</h3>
      {card}
    </div>
  );
}
