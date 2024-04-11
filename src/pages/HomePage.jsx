import React from 'react';
import axios from 'axios';
import { ALL_COUNTRIES } from '../config';
import List from '../components/List';
import Card from '../components/Card';
import Controls from '../components/Controls';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [countries, setCountries] = React.useState([]);
  console.log(countries);

  const { navigate } = useNavigate();

  React.useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  const handleClickOnCard = (name) => {
    console.log('hello');
    console.log(name);
    navigate('details');
  };

  return (
    <>
      <Controls />
      <button onClick={() => handleClickOnCard('vlad')} type=""></button>

      <List>
        {countries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name.common,
            info: [
              { title: 'Population', description: c.population.toLocaleString() },
              { title: 'Region', description: c.region },
              { title: 'Capital', description: c.capital },
            ],
          };
          return <Card key={c.name.common} {...countryInfo} />;
        })}
      </List>
    </>
  );
};

export default HomePage;
