const BASE_URL = ''

async function callApi(endpoint, options = {}) {
  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8000',
    'Access-Control-Allow-Credentials': 'true',
  }
  options.credentials = 'include'
  const url = BASE_URL + endpoint
  const response = await fetch(url, options)
  const data = await response.json()
  return data
}
const api = {
  users: {
    login(params) {
      return callApi(`/users/`, {
        method: 'POST',
        body: JSON.stringify(params),
      })
    },
    listProfiles(params) {
      return callApi(`/users/profiles`, {
        method: 'POST',
        body: JSON.stringify(params),
      })
    },
    add(params) {
      return callApi(`/users/add`, {
        method: 'POST',
        body: JSON.stringify(params),
      })
    },
    update(params) {
      return callApi(`/users/update`, {
        method: 'POST',
        body: JSON.stringify(params),
      })
    },
    addProfile(params) {
      return callApi(`/users/profile/add`, {
        method: 'POST',
        body: JSON.stringify(params),
      })
    },
    updateProfile(params) {
      return callApi(`/users/profile/update`, {
        method: 'POST',
        body: JSON.stringify(params),
      })
    },
    updateProfileState(params) {
      return callApi(`/users/profile/update/state`, {
        method: 'POST',
        body: JSON.stringify(params),
      })
    },
    addTry(params) {
      return callApi(`/users/try/add`, {
        method: 'POST',
        body: JSON.stringify(params),
      })
    },
  },
  movies: {
    list(params) {
      return callApi(`/movies/list`, {
        method: 'POST',
        body: JSON.stringify(params),
      })
    },
    watching(params) {
      return callApi(`/movies/watching`, {
        method: 'POST',
        body: JSON.stringify(params),
      })
    },
    addWatching(params) {
      return callApi(`/movies/watching/add`, {
        method: 'POST',
        body: JSON.stringify(params),
      })
    },
    addFavotite(params) {
      return callApi(`/movies/favorites/add`, {
        method: 'POST',
        body: JSON.stringify(params),
      })
    },
    listFavotite(params) {
      return callApi(`/movies/favorites`, {
        method: 'POST',
        body: JSON.stringify(params),
      })
    },
  },
  ads: {
    list(params) {
      return callApi(`/ads`, {
        method: 'POST',
        body: JSON.stringify(params),
      })
    },
  },
}

export default api
