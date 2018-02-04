'use strict'

function whatIsThis(howCalled) {//function whatIsThis(howCalled, secondArg){secondArg=secondArg||'default value ==>here if argument is empty then default value is shown'; console.log(secondArg);}
    console.log(arguments);
    console.log('\nCalled ' + howCalled + ', "this" is:', this);
}

//whatIsThis('as a function');//undefined why???
const newFunction = whatIsThis.bind('Hello');
console.log('the type of newFunction is: ' + typeof newFunction);
newFunction('using bind');

//whatIsThis.call('HYF', 'using the call jamshid');//Called using the call jamshid, "this" is: HYF
//.call is a method inhereted inside a function
//there is also .toString .apply, .bind
console.log();
const myObj = {
    myData: 'HYF'
};
function test() {
    console.log(this.myData);
}
const newFunc = test.bind(myObj);
newFunc();
