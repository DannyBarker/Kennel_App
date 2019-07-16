const remoteURL = "http://localhost:5002"
export default {
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(animalData => animalData.json())
  },
  getAll() {
    return fetch(`${remoteURL}/animals`).then(data => data.json())
  }
}