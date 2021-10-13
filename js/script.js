//Task 1.
let user = {
  name : "John",
  surname : "Smith",
};
user.name = "Pete";
delete user.name;

//Task 2.
Можно ли изменить объект, объявленный с помощью const?

const user = {

  name: «John»

};

// это будет работать?

user.name = «Pete»;
Да,можно изменить, будет работать

//Task 3.
let salaries = {

  John: 100,

  Ann: 160,

  Pete: 130

}
let sum = salaries.John + salaries.Ann + salaries.Pete;
alert(sum);