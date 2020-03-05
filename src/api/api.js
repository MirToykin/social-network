import * as axios from "axios";

let api = {

  ajax: axios.create({
    withCredentials: true,
    headers: {
      "API-KEY": "a5a2c387-e5c5-41da-a00a-1e342607940a"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
  }),

  get(endpoint, count, page, id) {
    let promise;
    switch (endpoint) {
      case 'users':
        promise = this.ajax.get(`${endpoint}?count=${count}&page=${page}`)
        break;
      case 'auth/me':
        promise = this.ajax.get(`${endpoint}`)
        break;
      case 'profile':
        promise = this.ajax.get(`${endpoint}/${id}`)
        break;
      case 'profile/status':
        promise = this.ajax.get(`${endpoint}/${id}`)
        break;
      default:
        return
    }
    return promise.then(response => response.data);
  },

  delete(endpoint, id) {
    return this.ajax.delete(`${endpoint}/${id}`)
      .then(response => response.data)
  },

  post(endpoint, id) {
    return this.ajax.post(`${endpoint}/${id}`)
      .then(response => response.data)
  },

  put(endpoint, payload) {
    return this.ajax.put(endpoint, payload);
  }


}

export default api;


