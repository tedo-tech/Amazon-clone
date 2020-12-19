import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-aug-bc35b.cloudfunctions.net/api',
});

export default instance;
