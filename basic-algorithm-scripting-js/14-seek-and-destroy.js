/**
 * You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
 */
function destroyer(arr) {
    // Remove all the values
    var args = Array.prototype.slice.call(arguments, 1);
    return arr.filter(function(value) {
        return args.indexOf(value) === -1;
    });

}

var q = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(q);