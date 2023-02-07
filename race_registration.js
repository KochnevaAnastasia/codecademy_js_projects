let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const runnerAge = 20;

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
  } 

if (runnerAge > 18 && registeredEarly) {
  console.log(`Race will begin at 9.30 am. Your racenumber is ${raceNumber}.`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`Race will begin at 11.00 am. Your racenumber is ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`Race will begin at 12.30 pm. Your racenumber is ${raceNumber}.`);
} else {
  console.log('See the registration desk.');
}
