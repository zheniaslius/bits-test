import { Review } from '../src/widgets/Reviews/types';

export const mockReviews: Review[] = [
  {
    id: '1',
    name: 'John Doe',
    date: new Date('2024-01-26').toLocaleDateString(),
    rating: 5,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dui in elit gravida bibendum. Donec vitae eleifend eros. Praesent scelerisque urna in tincidunt cursus. Aenean dictum sed lectus sed pulvinar. Sed sed vulputate ipsum. In neque tellus, vehicula a laoreet sed, tempor eget tellus. Nulla fermentum, risus et semper facilisis, ipsum justo pharetra odio, vel malesuada nisi purus eget augue. Nullam ut elit semper, consequat augue in, sollicitudin ex. Pellentesque quis leo gravida, convallis mi eu, feugiat orci. Donec dictum lorem lacinia ipsum feugiat, vitae viverra justo pellentesque. Maecenas ex sem, hendrerit et posuere at, auctor at metus.',
  },
  {
    id: '2',
    name: 'John Doe',
    date: new Date('2024-01-26').toLocaleDateString(),
    rating: 3,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dui in elit gravida bibendum. Donec vitae eleifend eros. Praesent scelerisque urna in tincidunt cursus. Aenean dictum sed lectus sed pulvinar. Sed sed vulputate ipsum. In neque tellus, vehicula a laoreet sed, tempor eget tellus. Nulla fermentum, risus et semper facilisis, ipsum justo pharetra odio, vel malesuada nisi purus eget augue. Nullam ut elit semper, consequat augue in, sollicitudin ex. Pellentesque quis leo gravida, convallis mi eu, feugiat orci. Donec dictum lorem lacinia ipsum feugiat, vitae viverra justo pellentesque. Maecenas ex sem, hendrerit et posuere at, auctor at metus.',
  },
];
