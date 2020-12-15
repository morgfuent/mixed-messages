const message1 = ['Today is your lucky day!', 'You will win the lottery tomorrow.', 'You\'d better stay at home today.'];

const message2 = [' The world will end tomorrow. ', ' It is raining candy outside. ', ' You just inherited a million dollars. '];

const message3 = ['And you owe me 30 dollars, so pay up!', 'And let\'s dance to the rythm of some funky song.', 'And the entire world will celebrate.'];

const getRandomNum = () => {
    let index = Math.floor(Math.random() * 3);
    return index;
}

console.log(message1[getRandomNum()] + message2[getRandomNum()] + message3[getRandomNum()]);