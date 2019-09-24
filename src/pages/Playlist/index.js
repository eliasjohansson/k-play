import React from 'react';
import Banner from './Banner';
import Track from '../../components/Track';
import Modal from '../../components/Modals';
import useModal from '../../hooks/useModal';
import PlaylistActions from '../../components/Modals/PlaylistActions';
import TrackActions from '../../components/Modals/TrackActions';


const tracks = [
  {
    id: 1,
    title: 'Måla ditt ansikte',
    type: 'video',
    description: 'Måla ditt ansikte som en galning.',
    duration: '59 min',
    episode: '3/10',
    image:
      'https://images.unsplash.com/photo-1568621779193-e6e6c9ab80f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 2,
    title: 'Dance in fog',
    type: 'podcast',
    description: 'Dansa dansa som en galning.',
    duration: '22 min',
    episode: '1/3',
    image:
      'https://images.unsplash.com/photo-1494255109162-2f3d1eddb31e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Pumpor',
    type: 'video',
    description: 'Stora fina pumpor till halloween.',
    duration: '15 min',
    episode: '3/5',
    image:
      'https://images.unsplash.com/photo-1568574097055-c552b8dfcc23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 4,
    title: 'Måla ditt ansikte',
    type: 'video',
    description: 'Måla ditt ansikte som en galning.',
    duration: '59 min',
    episode: '3/10',
    image:
      'https://images.unsplash.com/photo-1568621779193-e6e6c9ab80f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 5,
    title: 'Dance in fog',
    type: 'podcast',
    description: 'Dansa dansa som en galning.',
    duration: '22 min',
    episode: '1/3',
    image:
      'https://images.unsplash.com/photo-1494255109162-2f3d1eddb31e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'Pumpor',
    type: 'video',
    description: 'Stora fina pumpor till halloween.',
    duration: '15 min',
    episode: '3/5',
    image:
      'https://images.unsplash.com/photo-1568574097055-c552b8dfcc23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  }
];

const Playlist = () => {
  const modal = useModal();
  return (
    <>
      <Banner
        openModal={modal.toggle}
        name="Favoriter"
        context="Mina Listor"
        image="https://images.unsplash.com/photo-1568621779193-e6e6c9ab80f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
      />
      <div>
        {tracks.map(t => (
          <Track
            key={t.id}
            title={t.title}
            type={t.type}
            description={t.description}
            duration={t.duration}
            episode={t.episode}
            image={t.image}
          />
        ))}
      </div>

      <Modal isShowing={modal.isShowing} hide={modal.toggle}>
        <PlaylistActions
          playlist={{
            name: 'Favoriter',
            tracksNum: tracks.length,
            image:
              'https://images.unsplash.com/photo-1568621779193-e6e6c9ab80f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
          }}
          isShowing={modal.isShowing}
          hide={modal.toggle}
        />
      </Modal>


      <Modal >
        <TrackActions
          trackInfo={{
            name: 'Dansare - oavsett villkor?',
            subtitle: 'I samarbete med Folkteatern',
            image:
              'https://files.list.co.uk/images/2019/07/02/sdt-ritualia-colette-sadler-double-bill1-LST341078.jpg',
            contentType: 'podcast'
          }}

        />
      </Modal>

    </>
  );
};


export default Playlist;
