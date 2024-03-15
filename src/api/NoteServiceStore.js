// NoteServiceStore.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/notes';

const noteServiceStore = {
  // Abrufen einer spezifischen Notiz anhand ihrer ID
  getNoteById(id) {
    return axios.get(`${API_URL}/${id}`).then(response => response.data);
  },

  // Erstellen einer neuen Notiz
  createNote(note) {
    return axios.post(API_URL, note).then(response => response.data);
  },

  // Löschen einer Notiz anhand ihrer ID
  deleteNote(id) {
    return axios.delete(`${API_URL}/${id}`).then(response => response.data);
  },
};

export default noteServiceStore;
