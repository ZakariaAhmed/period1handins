function firstFunc(){
    // Simulate a code delay
    setTimeout( function(){
      console.log(1);
    }, 500 );
  }
  function secondFunc(){
    console.log(2);
  }
  firstFunc();
  secondFunc();