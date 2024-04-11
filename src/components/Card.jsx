import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Wrapper = styled.article`
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  cursor: pointer;
  background-color: var(--colors-ui-base);
  overflow: hidden;
  transition: ease all 0.1s;
  &:hover {
    transform: scale(103%);
  }
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: fill;
  object-position: center;
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;

const CardList = styled.ul`
  margin: 0;
  padding: 0;
  padding: 1rem 0 0;
`;

const CardListItem = styled.li`
  list-style: none;
  font-size: var(--fs-sm);
  line-height: 1.5rem;
  font-weight: var(--fw-light);
`;

const Card = ({ img, name, info, onClick }) => {
  const link = '/details/:' + name;
  return (
    <Link to={link}>
      <Wrapper onClick={onClick}>
        <CardImage src={img} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardList>
            {info.map((e) => (
              <CardListItem key={e.title}>
                <b>{e.title}</b>
                {`: ${e.description}`}
              </CardListItem>
            ))}
          </CardList>
        </CardBody>
      </Wrapper>
    </Link>
  );
};

export default Card;
