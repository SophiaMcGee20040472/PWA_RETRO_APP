import { RiBearSmileLine } from 'react-icons/ri';
import { SiMusicbrainz } from 'react-icons/si';
import { BsRecordCircle } from 'react-icons/bs';
import { HiHomeModern } from 'react-icons/all';

export const musicGenres = [
  { title: 'Pop', value: 'POP' },
  { title: 'Alternative', value: 'ALTERNATIVE' },
  { title: 'Rock', value: 'ROCK' },
  { title: 'Latin', value: 'LATIN' },
  { title: 'Film', value: 'FILM_TV' },
  { title: 'Country', value: 'COUNTRY' },
  { title: 'Soul', value: 'SOUL_RNB' },
  { title: 'Worldwide', value: 'WORLDWIDE' },
  { title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
  { title: 'Dance', value: 'DANCE' },
  { title: 'Electronic', value: 'ELECTRONIC' },
  { title: 'House', value: 'HOUSE' },
  { title: 'K-Pop', value: 'K_POP' },
];

export const ArtistType = [

];

export const links = [
  { name: 'Discover', to: '/', icon: HiHomeModern },
  { name: 'Around You', to: '/around-you', icon: RiBearSmileLine },
  { name: 'Top Artists', to: '/top-artists', icon: SiMusicbrainz },
  { name: 'Top Charts', to: '/top-hits', icon: BsRecordCircle },
];
