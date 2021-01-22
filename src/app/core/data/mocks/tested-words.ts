import { TestedWord } from '@app/model/test-word';

export const testedWordsMock: TestedWord[] = [
  {
    word: {
      id: 1,
      category: 1,
      level: 1,
      english: 'bag',
      polish: 'torba',
    },
    answers: [
      {
        id: 1,
        value: 'torba',
      },
      {
        id: 2,
        value: 'samolot',
      },
      {
        id: 3,
        value: 'kaczka',
      },
      {
        id: 4,
        value: 'podróżować',
      },
      {
        id: 5,
        value: 'stołek',
      },
    ],
  },
  {
    word: {
      id: 2,
      category: 2,
      level: 1,
      english: 'car',
      polish: 'samochód',
    },
    answers: [
      {
        id: 1,
        value: 'kaczka',
      },
      {
        id: 2,
        value: 'samochód',
      },
      {
        id: 3,
        value: 'samolot',
      },
      {
        id: 4,
        value: 'podkład',
      },
      {
        id: 5,
        value: 'mecz',
      },
    ],
  },
];
