import React from 'react';
import styled from 'styled-components';
import { Heading, Text } from '../Typography';
import { List, Item as BaseItem } from '../List';
import { Share2, Remove, EditList } from '../Icons';
import { useAppModals } from '../../context/modals';

const StyledPlaylistActions = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: ${({ theme }) => theme.space[3]}px;

  ${({ theme }) => theme.mediaQueries.medium} {
    max-width: 770px;
    max-height: 400px;
  }
`;

const DesktopMode = styled.div`
  ${({ theme }) => theme.mediaQueries.medium} {
    display: flex;
    flex-direction: row;
    margin: auto;

    > div {
      width: 345px;
      margin-left: 24px;

      > div {
        -webkit-overflow-scrolling: touch;
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
`;

const Image = styled.div`
  width: 100%;
  padding-bottom: 20px;
  position: relative;
  margin-bottom: 16px;

  ${({ theme }) => theme.mediaQueries.medium} {
    max-width: 300px;
    max-height: 270px;
    margin: auto;
  }
  img {
    width: 100%;
    height: 270px;
    object-fit: cover;
  }
`;

const Item = styled(BaseItem)`
  justify-content: flex-start;
  padding: ${({ theme }) => theme.space[4]}px 0;
`;

const Close = styled.button`
  color: ${({ theme }) => theme.colors.orange};
  background: none;
  border: none;
  outline: 0ch;
  -webkit-tap-highlight-color: transparent;
  margin-top: auto;
  padding: ${({ theme }) => theme.space[3]}px 0;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.medium} {
    margin: 0;
    padding: 0px 16px;
    text-align: right;
  }
`;

const PlaylistActions = ({ playlist, hide, onRemove }) => {
  const { toggleOpen } = useAppModals();
  return (
    <StyledPlaylistActions>
      <DesktopMode>
        <Image>
          <img src={playlist.image} alt="" />
        </Image>
        <div>
          <Heading as="h3" fontWeight="500" m="0">
            {playlist.name}
          </Heading>
          <Text m="0" mt="1">
            {playlist.tracksNum} poddar/videos
          </Text>
          <List>
            <Item
              onClick={() => {
                toggleOpen('share');
              }}
            >
              <Share2 />
              <Text m="0" ml="3">
                Dela lista
              </Text>
            </Item>
            <Item>
              <EditList />
              <Text m="0" ml="3">
                Redigera lista
              </Text>
            </Item>
            <Item onClick={onRemove}>
              <Remove />
              <Text m="0" ml="3">
                Ta bort lista
              </Text>
            </Item>
          </List>
        </div>
      </DesktopMode>
      <Close onClick={hide}>Stäng</Close>
    </StyledPlaylistActions>
  );
};

export default PlaylistActions;
