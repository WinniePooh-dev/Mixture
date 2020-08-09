export default class CityStorage {
    static getNotesList() {
        const notes = localStorage.getItem('notes') || [];
        return notes.length ? JSON.parse(notes) : ["note 1", "note 2", "note 3", "note 4"];
    };
};