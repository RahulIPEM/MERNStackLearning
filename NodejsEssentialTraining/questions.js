const collectAnswers = require("./lib/collectAnswers");

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What would you like to do with Nodejs? "
]

const answerEvents = collectAnswers(questions)

answerEvents.on("answer", answer => {
    console.log(`question answered: ${answer}`)
})

answerEvents.on("complete", answers => {
    console.log("Thanks for your answers.");
    console.log(answers);
})

answerEvents.on("complete", () => {
    process.exit();
})


// const ask = (i = 0) => {
//     process.stdout.write(`\n\n\n ${questions[i]}`);
//     process.stdout.write(` > `);
// }

// ask();

// const answers = []

// process.stdin.on("data", data => {
//     answers.push(data.toString().trim());
//     if (answers.length < questions.length)
//         ask(answers.length);
//     else
//         process.exit();
// })

// process.on("exit", () => {
//     const [name, activity, lang] = answers;
//     console.log(`
//     Thank you for answers.

//     Go ${activity} ${name} you can write ${lang} code later.
//     `);
// })