// For searching in all 8 direction 
const x = [-1, -1, -1, 0, 0, 1, 1, 1];
const y = [-1, 0, 1, -1, 1, -1, 0, 1];

// This function searches in all 
// 8-direction from point 
// (row, col) in grid[][] 
search2D = (mtx, row, col, word) => {
    // If first character of word 
    // doesn't match with 
    // given starting point in grid. 
    if (mtx[row][col] != word[0])
        return false;

    const len = word.length;
    // Rows and columns in the given grid 
    const Rows = mtx.length;
    const Columns = mtx[0].length;

    var count = 0;

    // Search word in all 8 directions 
    // starting from (row, col) 
    for (var dir = 0; dir < 8; dir++) {
        // Initialize starting point 
        // for current direction 
        var k, rd = row + x[dir], cd = col + y[dir];

        // First character is already checked, 
        // match remaining characters 
        for (k = 1; k < len; k++) {
            // If out of bound break 
            if (rd >= Rows || rd < 0 || cd >= Columns || cd < 0)
                break;

            // If not matched, break 
            if (mtx[rd][cd] != word[k])
                break;

            // Moving in particular direction 
            rd += x[dir];
            cd += y[dir];
        }

        // If all character matched, 
        // then value of must 
        // be equal to length of word 
        if (k == len) {
            count++;
        }
    }

    return count;
}

// Searches given word in a given 
// matrix in all 8 directions 
exports.patternSearch = (mtx, word) => {
    // Rows and columns in the given grid 
    const Rows = mtx.length;
    const Columns = mtx[0].length;

    var total = 0;
    for (var row = 0; row < Rows; row++) {
        for (var col = 0; col < Columns; col++) {
            const appers = search2D(mtx, row, col, word)
            if (appers > 0) {
                total = total + appers;
            }
        }
    }

    return total;
} 