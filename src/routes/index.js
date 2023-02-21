import {
  addbookAPI, getAllbooksAPI, getbookByIdAPI, editbookByIdAPI,
  deletebookByIdAPI,
} from '../controller/index.js';

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addbookAPI,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllbooksAPI,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getbookByIdAPI,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editbookByIdAPI,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deletebookByIdAPI,
  },
];

export default routes;
