import React from 'react';
import axios from 'axios';
import { ALL_COUNTRIES } from '../config';
import List from '../components/List';
import Card from '../components/Card';
import Controls from '../components/Controls';
import { useNavigate, useOutletContext } from 'react-router-dom';
import {AllCountriesContext} from '../App.jsx'

const HomePage = () => {
  const [countries, setCountries] = useOutletContext()
  const [filteredCountries, setfilteredCountries] = React.useState(countries);


  const handleSearch = (search, region) => {
    let data = [...countries]
    if(region){
      data = data.filter(c => c.region.includes(region))
    }
    if(search){
      data = data.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()))
    }
    setfilteredCountries(data)
  }


  React.useEffect(() => {
    if(!countries.length){
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }
    console.log('rerender')
  }, []);


  return (
    <>
      <Controls onSearch = {handleSearch}/>
      <List>
      {filteredCountries.map((c) => {
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
