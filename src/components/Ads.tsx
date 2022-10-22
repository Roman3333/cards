import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

import AdsItem from './AdsItem';

import strelochka from '../img/svg/strelochka.svg';

import { ICard } from '../@types/ads';

//Styles
const Title = styled.h2`
  font-size: 22px;
  line-height: 25px;
  font-weight: 700;
  padding-left: 32px;
  margin-bottom: 8px;
  @media (max-width: 998px) {
    padding-left: 0;
    text-align: center;
  }
`;

const AdsItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 998px) {
    justify-content: center;
  }
`;

const AdsShowMore = styled.div`
  position: relative;
  display: flex;
  margin-left: auto;
  margin-top: 12px;
  padding-right: 24px;
  max-width: 120px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: #00a0ab;
  cursor: pointer;
  & img {
    position: absolute;
    content: '';
    top: -4px;
    right: 0;
  }
`;

const AdsLimitPosts = styled.div`
  margin-bottom: 10px;
  text-align: center;
  font-size: 18px;
  line-height: 20px;
  font-weight: 500;
  color: #00a0ab;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const LoadingSpinner = styled.div`
  width: 35px;
  height: 35px;
  border: 3px solid #ff9514;
  border-top: 3px solid transparent;
  margin: 0 auto;
  border-radius: 50%;
  transform: translateY(-20px);
  animation: ${spin} 1.5s linear infinite;
`;

const Ads = () => {
  const [items, setItems] = useState<ICard[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(16);
  const [isLoading, setIsLoading] = useState(false);
  const [isLimit, setIsLimit] = useState(false);

  const showMore = () => {
    setLimit((prev) => prev + 8);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await axios.get(
          `https://6075786f0baf7c0017fa64ce.mockapi.io/products?page=${page}&limit=${limit}`,
        );

        setItems(data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [limit]);

  useEffect(() => {
    if (limit >= 100) {
      setIsLimit(true);
    }
  }, [limit]);

  return (
    <>
      <Title>Похожие обьявления</Title>
      <AdsItems>
        {items.map((item) => (
          <AdsItem {...item} key={item.id} />
        ))}
      </AdsItems>
      {isLoading ? <LoadingSpinner></LoadingSpinner> : ''}
      <AdsShowMore onClick={showMore}>
        Показать еще <img src={strelochka} alt="arrow" />
      </AdsShowMore>
      {isLimit ? <AdsLimitPosts>Все продукты загружены</AdsLimitPosts> : ''}
    </>
  );
};

export default Ads;
