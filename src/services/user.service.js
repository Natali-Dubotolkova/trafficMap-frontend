import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/street/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getAllStreets() {
    return axios.get(API_URL);
  }

  addTraffic(id, streetTo, streetFrom, grade){
    const traffic = {
      grade: grade,
      titleStreetFrom: streetFrom,
      titleStreetTo: streetTo
    }
    return axios.post(API_URL+id+"/traffic", traffic, {headers: authHeader()});
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
