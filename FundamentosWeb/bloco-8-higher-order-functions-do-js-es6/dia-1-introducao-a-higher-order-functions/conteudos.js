const wakeUp = () => 'Acordando!!'; 

const coffeeTime = () => 'Bora tomar café!!';

const goodNight = () => 'Partiu dormir!!';

const doingThings = (action) => action();

console.log(doingThings(goodNight));
