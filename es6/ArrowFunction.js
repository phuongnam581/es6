//'this' in arrow function

const anotherPerson = {
  talk() {
    setTimeout(function() {
      console.log("this", this);
    }, 1000);
  }
};
anotherPerson.talk(); //'this' -> window because 'this' in normal function depend on Who call it in this case
// setTimeout be called by window so 'this' is windows

const anotherPerson1 = {
  talk() {
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  }
};
anotherPerson1.talk(); //'this' -> anotherPerson1 because 'this' in arrow function depend on Where it be denfined
//in this case setTimeout be definded in anotherPerson1 so 'this' is anotherPerson1
