# period1handins


### Explain and Reflect:

- Java is a class based object oriented compiled language, that can run on many platforms, versus Javascript which is a prototype based interpreted scripting language that runs usually on the browser. 


 - Typescript is a layer on top of javascript, you usually notice a typescript file it ends on .ts 
 it is a better way of writing javascript code, it supports type definitions, and you can compile it into javascript ES5 and run it on the browsers. with the goals of ES6 which has been adopted by Node, we see differences in how to write a function, the arrow functions got introduced etc. 
 
 - node.js make sense when you wanna build a javascript almost sort of compiled version of it, complete with its own server, listening on port 3000 for example. node.js is a javascript runtime environment that is very fast, you can use it both as a server and desktop applications. its main feature is that it takes a non-blocking approach to serving requests.
 - <img src="https://mdn.mozillademos.org/files/4617/default.svg">
 - The event loop in node.js, can be esaily explained 
 while (queue.waitForMessage()) {
  queue.processNextMessage();
}
there's the stack, the heap and the queue
in this case if a function call takes a while to process, it will skip and go to the next functions on the stack,
it will then return later once it processed the rest of the functions in the stack 


