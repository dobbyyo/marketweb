import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Router from 'next/router';

import CardImg from './CardImg';
import noImg from '../../img/noimg.png';

const Div = styled.div`
  display: flex;
  justify-content: center;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Box = styled(motion.div)`
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 5rem;
  opacity: 0;
  .title {
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: bold;
    border-bottom: 1px solid #fff;
  }
  .category {
    height: 70%;
    display: flex;
    align-items: center;
  }
`;
const CardContainer = styled(motion.div)`
  width: 20rem;
  height: 20rem;
  margin: 2px;
  color: #fff;
  position: relative;
  &:hover {
    ${Box} {
      opacity: 1;
    }
  }
`;

const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 1,
      duaration: 0.1,
      type: 'tween',
    },
  },
};

const Card = ({ data }) => {
  const onClickPost = useCallback((postId) => {
    const id = postId;
    Router.push(`/post/${id}`);
    console.log(id);
  }, []);
  return (
    <CardContainer onClick={() => onClickPost(data.id)}>
      {data.Images[0] ? (
        <Div>
          <CardImg images={data.Images} />
        </Div>
      ) : (
        <Div>
          <Img src={noImg.src} alt="img" />
        </Div>
      )}
      <Box variants={infoVariants}>
        <div className="title">{data.title}</div>
        <div className="category">종류: {data.clothes}</div>
        <div>{data.id}</div>
      </Box>
    </CardContainer>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    Comment: PropTypes.arrayOf(PropTypes.any),
    Images: PropTypes.arrayOf(PropTypes.any),
    UserId: PropTypes.number,
    clothes: PropTypes.string,
    content: PropTypes.string,
    id: PropTypes.number,
    people: PropTypes.string,
    price: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};
export default Card;