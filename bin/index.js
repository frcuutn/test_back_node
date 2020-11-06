#!/usr/bin/env node
console.log("Home TEST!");

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

matrix.patternSearch(matrix_3_3, word);

matrix.patternSearch(matrix_1_10, word);

matrix.patternSearch(matrix_5_5, word);

matrix.patternSearch(matrix_7_2, word);

matrix.patternSearch(matrix_1_1, word); 