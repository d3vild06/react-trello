import React from 'react';
import List from './list';

export default function Board(props) {
  const listsTitles = props.lists;
  const cardContent = ['Launch key features', 'Feature 1 refactoring', 'Bug #31 fixed', 'Feature #2 completed'];
  const list = listsTitles.map((title, index) => {
    return <List title={title} cards={cardContent} key={index} />;
  });
  
  return(
    <div>
      <h1>{props.title}</h1>
      {list}
    </div>
  );
}
