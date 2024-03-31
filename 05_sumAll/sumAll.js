const sumAll = function(int1,int2) {
    if (Number.isInteger(int1) && Number.isInteger(int2)  && int1 >= 0 && int2 >= 0) {
        if (int2 < int1) {
            // swap ints
            int1 = [int2, int2 = int1][0];
        }
        let arr= [];
        while (int1 <= int2) {
            arr.push(int1++);
        }
        let sum = arr.reduce((x,y) => x + y, 0);
        return sum;
    }
    else {return 'ERROR'}
}

// Do not edit below this line
module.exports = sumAll;
