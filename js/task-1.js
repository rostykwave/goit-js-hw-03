const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,

  changeName(newName) {
    this.name = newName;
  },

  changeHobby(newHobby) {
    this.hobby = newHobby;
  },

  changePremium(newPremium) {
    this.premium = newPremium;
  },

};
console.table(user);

// user.name = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

user.changeName('happy');
user.changeHobby('skydiving');
user.changePremium(false);
//виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

console.table(user);