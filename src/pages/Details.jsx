import React from 'react';
import { useMatch, useParams } from 'react-router-dom';

const Details = () => {
  let { name } = useParams();
  name = name.slice(1);
  console.log();
  // const match = useMatch();
  // const name = useParams();
  // console.log(name.name.split('').splice(1).join(''));
  // const path = window.location.pathname('/')[1];
  return <div>details {name}</div>;
};

export default Details;
