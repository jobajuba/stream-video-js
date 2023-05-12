import { Outlet } from 'react-router-dom';
import { useMemo } from 'react';
import {
  StreamVideo,
  useCreateStreamVideoClient,
} from '@stream-io/video-react-sdk';

// a list of random star-wars characters
export const characters = [
  'Luke Skywalker',
  'C-3PO',
  'R2-D2',
  'Darth Vader',
  'Leia Organa',
  'Han Solo',
  'Chewbacca',
  'Yoda',
  'Obi-Wan Kenobi',
  'Kylo Ren',
  'Bobba Fett',
  'Finn',
];

const apiKey = import.meta.env.VITE_STREAM_API_KEY as string;

export const Hosts = () => {
  const randomCharacter = useMemo(() => {
    const index = Math.floor(Math.random() * characters.length);
    return characters[index];
  }, []);

  const client = useCreateStreamVideoClient({
    apiKey,
    tokenOrProvider: async () => {
      const endpoint = new URL(
        'https://stream-calls-dogfood.vercel.app/api/auth/create-token',
      );
      endpoint.searchParams.set('api_key', apiKey);
      endpoint.searchParams.set('user_id', randomCharacter);
      const response = await fetch(endpoint).then((res) => res.json());
      return response.token as string;
    },
    user: {
      id: randomCharacter,
      name: randomCharacter,
      role: 'host',
    },
  });

  return (
    <StreamVideo client={client}>
      <Outlet />
    </StreamVideo>
  );
};