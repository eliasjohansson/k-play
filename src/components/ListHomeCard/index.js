import React from 'react';
import styled from 'styled-components';
import { Podcast, Video, Plus, More, Play } from '../Icons';

const StyledHomeCard = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 0px 6px rgba(54, 54, 54, 0.2);
  width: 80%;
  margin: 0 16px 8px;
  height: auto;

  ${({ theme }) => theme.mediaQueries.desktop} {
    background-color: #f3f3f3;
    margin: 18px 12px 8px;

    &:first-child {
      margin-left: 64px;
    }
  }

  > div img {
    width: 300px;
    height: 92px;
    object-fit: cover;
    filter: brightness(70%);
    margin-top: -44px;

    ${({ theme }) => theme.mediaQueries.desktop} {
      width: 420px;
      height: 135px;
    }
  }
  > p {
    margin: -2px 16px;
    font-size: 12px;
    overflow: hidden;
    max-height: 14px;
    ${({ theme }) => theme.mediaQueries.desktop} {
      font-size: 14px;
      max-height: 16px;
    }
  }
`;

const TitleContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 16px;

  ${({ theme }) => theme.mediaQueries.desktop} {
    margin-top: 50px;
  }

  > p {
    font-size: 16px;
    font-weight: 500;
    margin: 12px 0 8px;
    letter-spacing: 0.5px;
    max-height: 20px;
    overflow: hidden;
    max-width: 250px;

    ${({ theme }) => theme.mediaQueries.desktop} {
      font-size: 24px;
      max-height: 30px;
      max-width: 360px;
    }
  }

  > svg {
    ${({ theme }) => theme.mediaQueries.desktop} {
      height: 16px;
      width: 16px;
    }
  }
`;

const Tint = styled.div`
  background-color: rgba(4, 4, 4, 0.3);
  height: 92px;
  cursor: pointer;

  > svg {
    position: relative;
    z-index: 1;
    top: 32%;
    left: 47%;
    width: 32px;
    height: 41px;

    ${({ theme }) => theme.mediaQueries.desktop} {
      top: 50%;
    }
  }
`;

const Description = styled.div`
  margin: 0 16px 8px;
  max-height: 55px;
  overflow: hidden;

  ${({ theme }) => theme.mediaQueries.desktop} {
    max-height: 52px;
  }
  > p {
    ${({ theme }) => theme.mediaQueries.desktop} {
      font-size: 16px;
      max-width: 350px;
      margin-bottom: 8px;
      max-height: 49px;
    }
  }
`;

const MainContent = styled.div`
  margin: 0 16px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.desktop} {
    margin: 0 16px 4px;
  }

  > button:nth-child(1),
  button:nth-child(2),
  button:nth-child(3) {
    padding: 0;
    border-right: 1px solid #f3f3f3;
    height: 30px;
    width: 18%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    ${({ theme }) => theme.mediaQueries.desktop} {
      border-right: 1px solid #fff;
      width: 14%;
    }
  }

  > button:nth-child(2),
  button:nth-child(3) {
    ${({ theme }) => theme.mediaQueries.desktop} {
      padding-left: 4px;
    }
  }
`;

const CornerContent = styled.div`
  ${({ theme }) => theme.mediaQueries.desktop} {
    margin-left: 100px;
  }

  > p {
    font-size: 12px;
    font-weight: 600;
    text-align: right;
    margin: 6px 0;

    ${({ theme }) => theme.mediaQueries.desktop} {
      font-weight: 500;
      font-size: 14px;
    }
  }
`;

const ListHomeCard = ({
  image,
  title,
  subtitle,
  description,
  type,
  subject,
  episodes,
  play
}) => {
  const CategoryIcon = type === 'PODD' ? <Podcast /> : <Video />;

  return (
    <StyledHomeCard>
      <Tint onClick={play}>
        <Play color="#ffffff" />
        {image && <img src={image} alt="" />}
      </Tint>

      <TitleContent>
        <p> {title} </p>
        {CategoryIcon}
      </TitleContent>

      <p> {subtitle} </p>

      <Description>
        <p> {description} </p>
      </Description>

      <MainContent>
        <button type="button">
          <Plus color="#363636" />
        </button>
        <button type="button">
          <More />
        </button>
        <button type="button" onClick={play}>
          <Play color="#363636" />
        </button>
        <CornerContent>
          <p>{subject}</p>
          <p>{episodes} avsnitt </p>
        </CornerContent>
      </MainContent>
    </StyledHomeCard>
  );
};

export default ListHomeCard;
