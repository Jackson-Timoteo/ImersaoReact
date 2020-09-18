const URL_BE_TP = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://cloudflix1.herokuapp.com';

export default {
  URL_BE_TP,
};
