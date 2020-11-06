var assert = require('assert');

const matrix = require('../matrix')
const word = 'OIE';

const matrix_3_3 = [
    ['O', 'I', 'E'],
    ['I', 'I', 'X'],
    ['E', 'X', 'E'],
];

const matrix_1_10 = [
    ['E', 'I', 'O', 'I', 'E', 'I', 'O', 'E', 'I', 'O'],
];

const matrix_5_5 = [
    ['E', 'A', 'E', 'A', 'E'],
    ['A', 'I', 'I', 'I', 'A'],
    ['E', 'I', 'O', 'I', 'E'],
    ['A', 'I', 'I', 'I', 'A'],
    ['E', 'A', 'E', 'A', 'E'],
];

const matrix_7_2 = [
    ['O', 'X'],
    ['I', 'O'],
    ['E', 'X'],
    ['I', 'I'],
    ['O', 'X'],
    ['I', 'E'],
    ['E', 'X'],
];

const matrix_1_1 = ['E'];

describe('Sopa 3 3', function () {
    describe('#patternSearch()', function () {
        it('should return 3 appers', function () {
            assert.equal(matrix.patternSearch(matrix_3_3, word), 3);
        });
    });
});

describe('Sopa 1 10', function () {
    describe('#patternSearch()', function () {
        it('should return 4 appers', function () {
            assert.equal(matrix.patternSearch(matrix_1_10, word), 4);
        });
    });
});

describe('Sopa 5 5', function () {
    describe('#patternSearch()', function () {
        it('should return 8 appers', function () {
            assert.equal(matrix.patternSearch(matrix_5_5, word), 8);
        });
    });
});

describe('Sopa 7 2', function () {
    describe('#patternSearch()', function () {
        it('should return 3 appers', function () {
            assert.equal(matrix.patternSearch(matrix_7_2, word), 3);
        });
    });
});

describe('Sopa 1 1', function () {
    describe('#patternSearch()', function () {
        it('should return 0 appers', function () {
            assert.equal(matrix.patternSearch(matrix_1_1, word), 0);
        });
    });
});