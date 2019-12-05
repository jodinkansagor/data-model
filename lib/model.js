const fs = require('fs').promises;
const { mkdirp, writeJSON, readJSON, readDirectoryJSON, updateJSON, deleteJSON } = require('./fs-functions');

module.exports = class Module {
    constructor(nameString, schema) {
        this.nameString = nameString;
        this.schema = schema;
    };

    create(filepath, object) {
        writeJSON(filepath, object);
    };

    findById(id) {
        readJSON(filepath)
    };

    find() {
        readDirectoryJSON();
    };

    findByIdAndUpdate() {
        updateJSON();
    };

    findByIdAndDelete() {
        deleteJSON();
    };
};