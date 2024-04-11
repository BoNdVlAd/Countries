import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const name = useParams();
  console.log(name.name.split('').splice(1).join(''));
  // const path = window.location.pathname('/')[1];
  return <div>details </div>;
};

export default Details;
