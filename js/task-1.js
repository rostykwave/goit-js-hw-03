const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,

};
//до
console.table(user);


user.mood = 'happy';

user.hobby = 'skydiving';

user.premium = false;

const keys = Object.keys(user);
    for (const key of keys) {
      console.log(key,': ', user[key]);
    }

//після
console.table(user);



/////Інший спосіб, шляхом додавання вбудованих методів

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,

//   addMood(newMood){
//   this.mood = newMood;
//   },
  
//   changeHobby(newHobby) {
//     this.hobby = newHobby;
//   },

//   changePremium(newPremium) {
//     this.premium = newPremium;
//   },

//   content() {
//     const keys = Object.keys(this);
//     for (const key of keys) {
//       console.log(key,': ', this[key]);
//     }
    
//   }

// };

// console.table(user);

// user.mood('happy');

// user.changeHobby('skydiving');

// user.changePremium(false);

// user.content();


// console.table(user);