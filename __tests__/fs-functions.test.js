const { mkdirp, writeJSON, readJSON, readDirectoryJSON, updateJSON, deleteJSON } = require('../lib/fs-functions');
const fs = require('fs').promises;

describe('writeJSON function', () => {

    beforeAll(() => {
        return mkdirp('./folder');
    });

    it('can write an object to a file', () => {
        return writeJSON('./folder/jbj.txt', { name:'JBJ', age: 41 })
            .then(() => fs.readFile('./folder/jbj.txt', 'UTF-8'))
            .then(file => expect(JSON.parse(file)).toEqual({ name:'JBJ', age: 41 }));
    });

    it('can read JSON parse', () => {
        return readJSON('./folder/jbj.txt')
            .then(result => {
                expect(result).toEqual({ name:'JBJ', age: 41 });
            });
    });

    it('can read JSON from a directory', () => {
        return readDirectoryJSON('./folder')
            .then(result => {
                expect(result).toEqual([{ name:'JBJ', age: 41 }]);
            });
    });

    it('can update JSON in a file', () => {
        return updateJSON('./folder/jbj.txt', { age: 42 })
            .then(() => fs.readFile('./folder/jbj.txt', 'UTF-8'))
            .then(file => expect(JSON.parse(file)).toEqual({ name:'JBJ', age: 42 }));
    });

    it('can delete a file', () => {
        return deleteJSON('./folder/jbj.txt')
            .then(result => {
                expect(result).toBeNull;
            });
    });

    afterAll(() => {
        return fs.rmdir('./folder', { recursive: true });
    });
});



 