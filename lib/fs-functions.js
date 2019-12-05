const fs = require('fs').promises;

const mkdirp = (filepath) => {
    fs.mkdir(filepath, { recursive: true }, (err) => {
        if(err) throw err;
    });
};

const writeJSON = (filepath, object) => {
    const stringObject = JSON.stringify(object);
    return fs.writeFile(filepath, stringObject).then(() => {
        return object;
    });
};

const readJSON = (filepath) => {

    return fs.readFile(filepath, err => {
        if(err) throw err;
    }).then((result) => {
        return JSON.parse(result);
    }); 
};

const readDirectoryJSON = (filepath) => {
    return fs.readdir(filepath)
        .then((files) => Promise.all(files.map(file => readJSON(`${filepath}/${file}`))));
};

const updateJSON = (filepath, object) => {
    return fs.readFile(filepath)
        .then(results => {
            return Object.assign(JSON.parse(results), object);
        })
        .then(finalResults => writeJSON(filepath, finalResults));
};

const deleteJSON = (filepath) => {
    return fs.unlink(filepath);
};

module.exports = { mkdirp, writeJSON, readJSON, updateJSON, readDirectoryJSON, deleteJSON };
