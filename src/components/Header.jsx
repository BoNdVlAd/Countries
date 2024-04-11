import React from 'react';
import { Container } from './Container';
import styled from 'styled-components';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled.a.attrs({
  href: '/',
})`
  color: var(--color);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
  cursor: pointer;
  color: var(--colors-text);
  font-size: var(--fs-sm);
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
  text-transform: capitalize;
`;

const Header = () => {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    // save color_theme to local storage
    localStorage.setItem('theme_choose', theme === 'light' ? 'dark' : 'light');
  };

  React.useEffect(() => {
    if (localStorage.getItem('theme_choose') === 'dark') {
      toggleTheme();
    }
  }, []);

  React.useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? <IoMoon size="16px" /> : <IoMoonOutline size="16px" />}
            {theme} Scene
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;
