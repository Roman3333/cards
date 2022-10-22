import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { ICard } from '../@types/ads';

//Styles
const Item = styled.div<{ seen: boolean }>`
  position: relative;
  margin-bottom: 24px;
  margin-right: 24px;
  width: 224px;
  height: 368px;
  background-color: ${({ seen }) => (seen ? '#FFF6A5' : '#ffffff')};
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  &:nth-child(4n) {
    margin-right: 0;
  }
  @media (max-width: 998px) {
    &:nth-child(4n) {
      margin-right: 24px;
    }
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
  @media (max-width: 750px) {
    &:nth-child(3n) {
      margin-right: 24px;
    }
    &:nth-child(2n) {
      margin-right: 0;
    }
  }
  @media (max-width: 501px) {
    &:nth-child(3n) {
      margin-right: 0;
    }
    margin-right: 0;
  }
`;

const ItemImgBox = styled.div`
  width: 224px;
  height: 260px;
`;

const ItemImg = styled.img`
  border-radius: 8px 8px 0 0;
  width: 224px;
  height: 260px;
`;

const ItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
`;

const ItemFooterPrices = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemFooterOldPrice = styled.div`
  position: relative;
  margin: 2px 0 1px;
  font-size: 14px;
  line-height: 16px;
  color: #5a5a5a;
  &::after {
    position: absolute;
    top: 8px;
    left: 0px;
    content: '';
    width: 60px;
    height: 1px;
    background-color: #5a5a5a;
  }
`;

const ItemFooterNewPrice = styled.div`
  font-size: 22px;
  line-height: 25px;
  font-weight: 700;
  color: #2c2c2c;
  margin-bottom: 8px;
`;

const ItemFooterOldPriceSpan = styled.span``;

const ItemFooterNewPriceSpan = styled.span``;

const ItemFooterIcons = styled.div`
  display: flex;
  svg {
    z-index: 15;
    cursor: pointer;
    &:hover path {
      fill: #00a0ab;
    }
  }
`;

const ItemAbsolutIcons = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  content: '';
  top: 156px;
  right: 12px;
  svg {
    z-index: 15;
    cursor: pointer;
    &:hover path {
      fill: #00a0ab;
    }
  }
  svg:nth-child(1) {
    margin-bottom: 12px;
  }
`;

const ItemHidden = styled.div`
  position: absolute;
  top: 12px;
  left: 65px;
  padding: 5px 8px;
  background-color: rgba(44, 44, 44, 0.74);
  color: #fff;
  font-size: 12px;
  line-height: 14px;
`;

const ItemName = styled.div`
  padding: 0 12px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const ItemBottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
  color: #8f8f8f;
`;

const ItemBottomLEft = styled.div``;

const ItemBottomRight = styled.div``;

const AdsItem: React.FC<ICard> = ({ oldPrice, price, title, seen, locality, date }) => {
  const [time, setTime] = useState<string>();

  useEffect(() => {
    const giveCorrectDate = () => {
      let ms = new Date(date);
      let year = String(ms.getFullYear()).substring(2);
      let month = ms.getMonth();
      let day = ms.getDay();
      let hours = ms.getHours();
      let minutes = ms.getMinutes();
      let currentDate = `${day}.${month}.${year}, ${hours}.${minutes}`;
      setTime(currentDate);
    };
    giveCorrectDate();
  }, []);

  return (
    <Item seen={seen}>
      <ItemImgBox>
        <ItemImg
          src="https://images.unsplash.com/photo-1665770020130-9a363c7f06db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NjM1MDM1Mg&ixlib=rb-1.2.1&q=80&w=1080"
          alt="img"
        />
      </ItemImgBox>
      <ItemAbsolutIcons>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.7145 22.3777L12.0346 22.6553L12.3609 22.3852C13.7603 21.2268 15.9105 19.3458 17.8187 17.4619C18.7725 16.5203 19.6721 15.5719 20.3888 14.7086C21.0941 13.859 21.6617 13.0463 21.9022 12.3825C22.9848 9.3955 22.7974 5.73779 19.6122 3.72888C17.6001 2.45985 15.589 2.78969 14.1306 3.40281C13.4019 3.70916 12.7982 4.09036 12.3774 4.39363C12.2533 4.4831 12.1445 4.56621 12.0524 4.63922C12.0244 4.61489 11.9949 4.5894 11.9638 4.5629C11.7025 4.33971 11.334 4.04131 10.9066 3.74188C10.4805 3.44341 9.98676 3.13747 9.47528 2.90464C8.96903 2.6742 8.41213 2.4999 7.86868 2.5C6.19655 2.5003 4.01031 3.18253 2.76019 5.02228C1.07992 7.49509 1.07994 11.172 2.76021 13.6446C3.42257 14.6193 5.07482 16.289 6.82053 17.9439C8.58336 19.615 10.4931 21.3185 11.7145 22.3777Z"
            fill="white"
            stroke="#2C2C2C"
          />
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.5 2.73684V21.2632L9.5 21.2669C9.49997 21.3799 9.49981 21.9023 9.73278 22.4119C9.85392 22.6768 10.0453 22.9547 10.346 23.1653C10.6505 23.3786 11.0346 23.5 11.5 23.5C11.9654 23.5 12.3495 23.3786 12.654 23.1653C12.9547 22.9547 13.1461 22.6768 13.2672 22.4119C13.5002 21.9023 13.5 21.3799 13.5 21.2669L13.5 21.2632V2.73684C13.5 2.38076 13.4113 1.84835 13.1246 1.38729C12.8213 0.899478 12.2959 0.5 11.5 0.5C10.7041 0.5 10.1787 0.899478 9.87539 1.38729C9.5887 1.84835 9.5 2.38076 9.5 2.73684Z"
            fill="white"
            stroke="#2C2C2C"
          />
          <path
            d="M16.5 7.34211V21.6579L16.5 21.6609C16.5 21.757 16.4998 22.2045 16.7572 22.6395C17.0432 23.1228 17.5906 23.5 18.5 23.5C19.4094 23.5 19.9568 23.1228 20.2428 22.6395C20.5002 22.2045 20.5 21.757 20.5 21.6609L20.5 21.6579V7.34211C20.5 7.02628 20.3986 6.57393 20.0895 6.18983C19.7632 5.78424 19.2408 5.5 18.5 5.5C17.7592 5.5 17.2368 5.78424 16.9105 6.18983C16.6014 6.57393 16.5 7.02628 16.5 7.34211Z"
            fill="white"
            stroke="#2C2C2C"
          />
          <path
            d="M2.5 10.1053V21.8947L2.5 21.8963C2.49999 21.9845 2.49994 22.3934 2.78144 22.7852C3.08545 23.2083 3.63206 23.5 4.5 23.5C5.36794 23.5 5.91455 23.2083 6.21856 22.7852C6.50006 22.3934 6.50001 21.9845 6.5 21.8963V21.8947V10.1053C6.5 9.80295 6.38228 9.39728 6.05762 9.06503C5.72148 8.72103 5.20807 8.5 4.5 8.5C3.79193 8.5 3.27852 8.72103 2.94238 9.06503C2.61772 9.39728 2.5 9.80295 2.5 10.1053Z"
            fill="white"
            stroke="#2C2C2C"
          />
        </svg>
      </ItemAbsolutIcons>
      {seen ? <ItemHidden>Просмотрено</ItemHidden> : ''}
      <ItemFooter>
        <ItemFooterPrices>
          <ItemFooterOldPrice>
            {oldPrice} <ItemFooterOldPriceSpan>₽</ItemFooterOldPriceSpan>
          </ItemFooterOldPrice>
          <ItemFooterNewPrice>
            {price} <ItemFooterNewPriceSpan>₽</ItemFooterNewPriceSpan>
          </ItemFooterNewPrice>
        </ItemFooterPrices>
        <ItemFooterIcons>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.42149 19.4356C7.50378 19.4356 8.38115 18.5583 8.38115 17.476C8.38115 16.3937 7.50378 15.5163 6.42149 15.5163C5.33919 15.5163 4.46182 16.3937 4.46182 17.476C4.46182 18.5583 5.33919 19.4356 6.42149 19.4356Z"
              fill="#C7C7C7"
            />
            <path
              d="M19.6681 7.15701C19.3836 6.62474 18.8285 6.29297 18.225 6.29432H15.9336V9.35927C15.9336 9.70064 16.2333 9.97678 16.5748 9.97678H21.1774L19.6681 7.15701Z"
              fill="#C7C7C7"
            />
            <path
              d="M17.5007 15.5163C16.4183 15.5163 15.5409 16.3937 15.5409 17.4761C15.5409 18.5585 16.4183 19.4359 17.5007 19.4359C18.5831 19.4359 19.4605 18.5585 19.4605 17.4761C19.4605 17.4761 19.4605 17.476 19.4605 17.476C19.4592 16.3942 18.5825 15.5175 17.5007 15.5163Z"
              fill="#C7C7C7"
            />
            <path
              d="M22.6466 12.064L21.6335 10.7729H16.5748C15.7943 10.7729 15.1374 10.1396 15.1374 9.35918V5.58964C15.1447 5.27131 14.8925 5.00741 14.5742 5.00015C14.5629 4.9999 14.5516 4.99995 14.5403 5.0004H2.63458C2.29315 5.0004 2 5.24822 2 5.58964V16.4847C2 16.8262 2.29315 17.0928 2.63458 17.0928H3.69119C3.89637 15.585 5.285 14.529 6.79282 14.7341C8.01972 14.901 8.98457 15.8659 9.15153 17.0928H14.7706C14.9759 15.5849 16.3646 14.529 17.8725 14.7342C19.0993 14.9012 20.064 15.866 20.231 17.0928H22.3654C22.7068 17.0928 23 16.8262 23 16.4847V13.0707C22.9966 12.7053 22.8724 12.3514 22.6466 12.064Z"
              fill="#C7C7C7"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 5L12 2L19 5V12.5C18 20 12 21 12 21C12 21 6 20 5 12.5V5ZM13.1325 9.07651L12.439 7.80489C12.2495 7.45742 11.7505 7.45742 11.561 7.80489L10.8675 9.07651C10.7956 9.20838 10.6682 9.30092 10.5206 9.32857L9.09692 9.59518C8.7079 9.66803 8.55372 10.1425 8.82562 10.4301L9.8207 11.4826C9.92389 11.5918 9.97255 11.7415 9.95322 11.8905L9.76683 13.3269C9.7159 13.7194 10.1195 14.0126 10.4771 13.8429L11.7856 13.2218C11.9213 13.1574 12.0787 13.1574 12.2144 13.2218L13.5229 13.8429C13.8805 14.0126 14.2841 13.7194 14.2332 13.3269L14.0468 11.8905C14.0275 11.7415 14.0761 11.5918 14.1793 11.4826L15.1744 10.4301C15.4463 10.1425 15.2921 9.66803 14.9031 9.59518L13.4794 9.32857C13.3318 9.30092 13.2044 9.20838 13.1325 9.07651Z"
              fill="#C4C4C4"
            />
          </svg>
        </ItemFooterIcons>
      </ItemFooter>
      <ItemName>{title}</ItemName>
      <ItemBottomBox>
        <ItemBottomLEft>{locality.substring(0, 12)}</ItemBottomLEft>{' '}
        <ItemBottomRight>{time}</ItemBottomRight>
      </ItemBottomBox>
    </Item>
  );
};

export default AdsItem;
