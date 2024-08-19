// ########################### Compare LISTs
var following = [];

var followers = [];

// Get values in following that are not in followers
const nonExistingValues = following.filter(value => !followers.includes(value));
console.log(nonExistingValues); // Output: [1, 2, 5]