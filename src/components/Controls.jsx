import React from 'react';
import Search from './Search';
import { CustomSelect } from './CustomSelect';
import { styled } from 'styled-components';

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Controls = () => {
  const [search, setSearch] = React.useState('');
  const [region, setRegion] = React.useState('');

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        styles={'backgroundColor: red'}
        options={options}
        placeholder="Filter by Region"
        isClearable
        onChange={setRegion}
      />
    </Wrapper>
  );
};

export default Controls;
