/*
An async function is a shortcut for defining a function which returns a promise
*/

function func() {
    return Promise.resolve('Test');
}

async function asyncFunc() {
    return 'TEST';
}

/*
Similar to promises async functions which throw exceptions are equilvant to functions which return reject promises
*/

function func2(){
    return Promise.reject('ERROR');
}

async function asyncFunc2(){
    throw 'ERROR';
}

/*
Await promises: 
await can only be used inside async functions and allow us to synchronously wait on a promise. 
If we wanna use promises outside of async functions we have to use then functions
*/

async function f3(){
      // response will evaluate as the resolved value of the promise
      const response = await rp('http://example.com/');
      console.log(response);
}

// We can't use await outside of async function.
// We need to use then callbacks ....
f3().then(() => console.log('Finished'));