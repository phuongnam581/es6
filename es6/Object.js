//object
const person = {
  name: "Nam",
  walk() {
    console.log(this);
  },
  talk() {
    console.log(person.name);
  }
};
person.talk();

person["name"] = "Mosh";

person.talk();

//this: this in js depend on how it call, in this case because person call walk so 'this' is person and if
//it stand alone we can understand it be called by window so 'this' is window
person.walk();

const walk = person.walk;
walk();
