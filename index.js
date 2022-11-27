//function greeting(name) {
    //alert(`Hello, ${name}`);
//  }
  
  //function receivesAFunction (callback) {
    //const name = prompt("Please enter your name.");
    //callback(name);
 // }


//  processUserInput(greeting);

  function receivesAFunction (callback){
    callback ()
}
receivesAFunction ();
  
  function returnsANamedFunction (){
    return function add (){
      console.log()
    }
  }
  function returnsAnAnonymousFunction (){
    return function (){
     console.log ("AnonymousFuntion " )
    }
  }