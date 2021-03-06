/*
 * Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
 *
 * The range will be an array of two numbers that will not necessarily be in numerical order.
 *
 * e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
 */
function smallestCommons(arr) {
    var numbers = [],
            commons = [];
    for (var i = Math.min(arr[0], arr[1]); i <= Math.max(arr[0], arr[1]); i++) {
        numbers.push(i);
    }
    return numbers.reduce(function (a, b) {
        function gcd(a, b) {
            a = Math.abs(a);
            b = Math.abs(b);
            while (b) {
                var t = b;
                b = a % b;
                a = t;
            }
            return a;
        }
        return (!a || !b) ? 0 : Math.abs((a * b) / gcd(a, b));
    });
}


