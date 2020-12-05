//Randomly generate number in parameter
randomNumberGenerator = (num) => {
    const randNum = Math.floor(Math.random() * num);
    return randNum
}

//Contains emojis and information regarding message
const emoji =["ヾ(⌐■_■)ノ","“ψ(｀∇´)ψ", "ಠﭛಠ",  "•̀.̫•́✧", "(ᵒ̤̑ ₀̑ ᵒ̤̑)", "\_(ʘ_ʘ)_/", "(¬_¬)", "(¬º-°)¬", "(¬‿¬)", "(ʘ‿ʘ)", "(̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄"];

const action = ['Call','Text','Shout','Lick'];
const callDare = ['sing','and say',''];
const textDare = ['the lyrics to',''];

const pretend = ['just breathe deeply','ask the same question in different accents','act like they called you','ask for a reservation'];
const person = ['mom', 'dad', 'sibling','uncle','aunt','ex','best friend','boyfriend','girlfriend','crush'];
const phrases = ['"Have you seen my chicken?"','"I\'m emotional"','"The end is coming!!"','"You are a banana"','"My fish drowned"'];
const song = ['"I will Always love you" by Whitney Houston', '"Hit me baby one more time" by Britney Spears','"Bad blood" by Taylor Swift','"Single ladies" by Beyonce','"Never gonna give you up" by Rick Astley', '"Into you" by Ariana Grande','"History" by One Direction'];

const object = ['the floor','the wall', 'the table','a photoframe','anyone\'s phone','a book','your couch','the tv'];
const location = ['from the balcony','in the hallway','in the elevator','at your neighbour','at your pet'];

//Generates dare based on 'Call' action
callDareGenerator = (personNum,songNum) =>{
    const callDareNum = randomNumberGenerator(callDare.length)
    const pretendNum = randomNumberGenerator(pretend.length)
    if(callDareNum === 0)
        console.log(`       Call your ${person[personNum]} and ${callDare[callDareNum]} ${song[songNum]} `); //Sing 
    else if(callDareNum === 1)
        console.log(`       Call your ${person[personNum]} and ${callDare[callDareNum]} ${phrases[phraseNum]} `); //Say
    else
        console.log(`       Call your ${person[personNum]} and ${pretend[pretendNum]} `); //Others
}

//Generates dare based on 'Text' action
textDareGenerator = (personNum,songNum) =>{
    const textDareNum = randomNumberGenerator(textDare.length)
    if(textDareNum === 0)
        console.log(`       ${action[actionNum]} your ${person[personNum]} ${textDare[textDareNum]} ${song[songNum]} `); //Lyrics
    else
        console.log(`       ${action[actionNum]} your ${person[personNum]} ${phrases[phraseNum]} `); //Other phrases
}

//Generates the dare
randomDareGenerator = () =>{
    
    //generates random number for message information 
    const actionNum = randomNumberGenerator(action.length)
    const personNum = randomNumberGenerator(person.length)
    const songNum = randomNumberGenerator(song.length)
    const phraseNum = randomNumberGenerator(phrases.length)

    switch(actionNum){
    case 0: callDareGenerator(personNum,songNum);
            break;
    case 1: textDareGenerator(personNum,songNum);
            break;
    case 2: const locNum = randomNumberGenerator(location.length)
            console.log(`        ${action[actionNum]} out loud ${phrases[phraseNum]} ${location[locNum]} `); //Shout action 
            break;
    case 3: const objectNum = randomNumberGenerator(object.length)
            console.log(`       ${action[actionNum]} ${object[objectNum]} `); //Lick action
            break;
    }

    const emojiNum = randomNumberGenerator(emoji.length); 
    console.log("           "+emoji[emojiNum]); //Display random emoji
}

//Call the randomGenerator()
dareGenerator = () => {
    console.log("Welcome to Dare Generator!")
    console.log(' Your dare is : ' )
    setTimeout(randomDareGenerator,1000);  //Wait for 1000ms to show function
}

dareGenerator()