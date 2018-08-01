export const orderBy = [
  {
    name: 'Popularity',
    field: 'popularity.desc',
  },
  {
    name: 'Title',
    field: 'original_title.asc',
  },
  {
    name: 'Release date',
    field: 'release_date.desc',
  },
  {
    name: 'Vote average',
    field: 'vote_average.desc',
  },
];

export const filterBy = [
  {
    name: 'All Genre',
    field: '',
  },
  {
    name: 'Action',
    field: '28',
  },
  {
    name: 'Adventure',
    field: '12',
  },
  {
    name: 'Animation',
    field: '16',
  },
  {
    name: 'Comedy',
    field: '35',
  },
  {
    name: 'Crime',
    field: '80',
  },
];

export const ORDER_BY_TITLE = {
  name: 'Order By',
  field: 'sort_by',
};

export const FILTER_BY_TITLE = {
  name: 'Filter By',
  field: 'with_genres',
};
