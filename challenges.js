//EASY: Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"

var run = function exercise(x) {
    return Todays exercise ${x}
}
console.log(run('Running'));

var swim = function exercise(x) {
    return Todays exercise ${x}
}
console.log(run('Swimming'))

// MEDIUM: Write a function that would allow you to do this:
// var sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));
// prints "Each person gets 4.00 slices of pizza"
// console.log(sharePizza(3));
// prints "Each person gets 2.67 slices of pizza"

let sharePizza = function cutPizzaSlices(people) {
    let s = 8 / people
    return Each person gets ${s} slices of pizza
}
console.log(sharePizza(2))
console.log(sharePizza(3))

// HARD: Data security exercise. Inside of a closure, create an object called pii (Personally Identifiable
//     Information)that cannot be accessed directly. The object should have at least two properties: name and
//     ssn. Only the name property should be accessible, and it should be called through a public function.
//     The ssn property should not be accessible at all.
//     Creating private objects and private properties helps you control who has access to what data and
//     helps you prevent people who shouldn't see important info like social security numbers from getting
//     access to the data.
//     You can use 'getName' or other get methods to access data that people might need. For example,
//     people addressing a package or email may need a customer's name, but they definitely shouldn't have
//     access to their ssn.

function dataFunction() {
    function dataFunction2(name) {
        let pii = {
            name: "Shade Hassan",
            ssn: 123 - 45 - 6789,
            getName() {
                return this.name;
            }
        };
        return pii.getName()
    }
    return dataFunction2()
}
console.log(dataFunction());


// VERY HARD: Object prototype chain and prototypal inheritance exercise.
// 1. Create a Person constructor that has three properties: name, job, and age.
// 2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is
// fun! - said no one ever".
// 3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad
// is a back-end developer".

class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
        this.busy = false;
    }
    exercise() {
        console.log("Running is fun!");
    }
    fetchJob() {
        console.log(`${this.name} is a ${this.job}!`)
    }
}

class Programmer extends Person {
    constructor(name, job, age, languages){
        super(name, job, age);
        this.languages=[languages];
        this.busy=true;
    }
    completeTask(){
        if(this.completeTask.busy){
            this.busy=false;
            console.log(`${this.name} isn't busy, please give another task.`);
        }else
        console.log(`${this.name} is busy`);
    }
    newTask(){
        if(this.newTask.busy){
            console.log(`${this.name} is not busy, available for new task.`);
        }else
        console.log(`${this.name} is currently busy, no new tasks.`);
    }
    learnLanguage(language){
        this.languages.push(language);
        console.log(`${this.name} has learned a new language, its ${language}!`);
    }
    listLanguage(){
        console.log(`${this.name} is fluent in ${this.languages.toString()}.`);
    }
}

const barry = new Programmer ("barry", "junior dev", 26);
const sarah = new Programmer ("sarah", "mid dev", 34);