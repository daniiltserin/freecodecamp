/**
 * Perform a search and replace on the sentence using the arguments provided and return the new sentence.
 * 
 * First argument is the sentence to perform the search and replace on.
 * 
 * Second argument is the word that you will be replacing (before).
 * 
 * Third argument is what you will be replacing the second argument with (after).
 * 
 * NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
 * 
 * 1. Array.prototype.slice()
 * 2. String.prototype.replace()
 * 3. Array.prototype.join()
 */

function myReplace(str, before, after) {
  var arr = str.split(' ');

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == before) {
      if (before.charCodeAt(0) >= 65) {
        after.charAt(0).toUpperCase();
        console.log(after, after.charAt(0).toUpperCase());
      }
      arr[i] = after;
    }
  }

  str = arr.join(" ");
  return str;
}