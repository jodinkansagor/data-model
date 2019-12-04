const fs = require('fs').promises;

//mkdirp - makes dir and parents

const mkdirp = (filepath) => {
    fs.mkdir(filepath, { recursive: true }, (err) => {
        if(err) throw err;
    });
};

//writeJSON - stringify and then write to file



//readJSON - read file, then parse file

//readDirectoryJSON - read, parse, put in array

//updateJSON = get file, add new JSON, update

// deleteFile = get file and delete it

module.exports = { mkdirp }