const unfunnyJokes = ['What do you call fake spaghetti? An impasta!', 
    'Why did the scarecrow win an award? Because he was outstanding in his field!',
`What do you call cheese that isnt' yours? Nacho cheese!`,
`Why can't you give Elsa a balloon? Because she will let it go!`,
`What did one wall say to the other wall? I'll meet you at the corner!`,
'Why did the bicycle fall over? Because it was two-tired!',
'How does a penguin build its house? Igloos it together!',
 'What did the zero say to the eight? Nice belt!',
`Why don't skeletons fight each other? They don’t have the guts!`,
'What do you call a factory that makes good products? A satisfactory!'];
const randomMessages = arrayMessage =>{
    const indexRandom = Math.floor(Math.random() * arrayMessage.length)
    return arrayMessage[indexRandom]
}

console.log(randomMessages(unfunnyJokes));