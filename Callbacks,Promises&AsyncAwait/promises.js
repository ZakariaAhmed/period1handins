/*
In Javascript a promise represents an abstraction of non blocking async execution, JS promises are similar to Java's future or C#'s Task.
Promises are usually used for network input output operations like reading from file or making http requests,
instead of blocking the thread and wait for the execution of an API call for example, we can use "then" function to attach a callback which will be triggered
when the promise completes. 
*/
const rp = require('request-promise');
const promise = rp('http://example.com');

console.log('starting execution');


promise.then(result => console.log(result));

console.log("Can't know if promise has finished yet...");