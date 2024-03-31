const leapYears = function(year) {
    //  x % 4 = 0 && !x % 100 = 0 && x % 400 = 0
    if ( ((year % 4 ) == 0 && (year % 100) != 0) || (year % 400) == 0) {
        return true
    }
    else return false;
}
// Do not edit below this line
module.exports = leapYears;
