import * as axios from "axios";

let api = {

  ajax: axios.create({
    withCredentials: true,
    headers: {
      "API-KEY": "8c5f5372-65f7-4660-b011-3fa7e51ef5dc"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
  }),

  get(endpoint, count, page, id) {
    let promise;
    const get = this.ajax.get;
    switch (endpoint) {
      case 'users':
        promise = get(`${endpoint}?count=${count}&page=${page}`)
        break;
      case 'auth/me':
        promise = get(`${endpoint}`)
        break;
      case 'profile':
        promise = get(`${endpoint}/${id}`)
        break;
      case 'profile/status':
        promise = get(`${endpoint}/${id}`)
        break;
      default:
        return
    }
    return promise.then(response => response.data);
  },

  delete(endpoint, id) {
    let promise;
    const remove = this.ajax.delete;
    switch (endpoint) {
      case 'follow':
        promise = remove(`${endpoint}/${id}`)
        break;
      case 'auth/login':
        promise = remove(endpoint)
        break;
      default:
        return
    }
    return promise.then(response => response.data);
  },

  post(endpoint, id, loginData) {
    let promise;
    const post = this.ajax.post;
    switch (endpoint) {
      case 'follow':
        promise = post(`${endpoint}/${id}`)
        break;
      case 'auth/login':
        promise = post(endpoint, loginData)
        break;
      default:
        return
    }
    return promise.then(response => response.data);
  },

  put(endpoint, payload) {
    let promise;
    const put = this.ajax.put;
    switch (endpoint) {
      case 'profile/status':
        promise = this.ajax.put(endpoint, payload);
        break;
      case 'profile/photo':
        const formData = new FormData();
        formData.append('image', payload)
        promise = put(endpoint, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        break;
      default:
        return
    }
    return promise.then(response => response.data);
  }


}

export default api;


