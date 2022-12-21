import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/street/';

class StreetService {
  getAllStreets() {
    return axios.get(API_URL);
  }

  addStreet(title){
    const street = {
      title: title
    }
    return axios.post(API_URL+"add", street, {headers: authHeader()});
  }

  deleteStreet(id){
    return axios.delete(API_URL+id, {headers: authHeader()});
  }
}

export default new StreetService();
