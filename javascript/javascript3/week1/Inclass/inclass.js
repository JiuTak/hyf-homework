const listOfPeople = `{"name": "Jiu", "age": 24,"country": "Korea"},
  {"name": "Shabnam", "age": 24, "country": "Iran"},
  {"name": "Sunil", "age": 24, "country": "India"},
}`;

const userJiu = `{"name": "Jiu", "age": 24,"country": "Korea"}`;

const userShabnam = `{"name": "Shabnam", "age": 24, "country": "Iran"}`;

const userSunil = `{"name": "Sunil", "age": 24, "country": "India"}`;

const jiuObject = JSON.parse(userJiu);
const shabnamObject = JSON.parse(userShabnam);
const sunilObject = JSON.parse(userSunil);

console.log(jiuObject);
console.log(shabnamObject);
console.log(sunilObject);

console.log("Jiu is " + jiuObject.age + " years old");
console.log(JSON.stringify(jiuObject));
