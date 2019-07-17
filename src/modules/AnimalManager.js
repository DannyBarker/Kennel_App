const remoteURL = "http://localhost:5002"
export default {
  get(entity, id) {
    return fetch(`${remoteURL}/${entity}/${id}`).then(animalData => animalData.json())
  },
  getAll(resource) {
    return fetch(`${remoteURL}/${resource}`).then(data => data.json())
  },
  delete(entity, id) {
    return fetch(`${remoteURL}/${entity}/${id}`, {
      method: "DELETE"
    }).then(animalData => animalData.json())
  },
  post(entity, obj) {
    return fetch(`${remoteURL}/${entity}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(data => data.json())
  }
}