/* Exercise 1: Output the following:
"Harry Potter and the Sorcerer's Stone"
"Harry Potter and the Chamber of Secrets"
"Harry Potter and the Deathly Hallows"*/

/*var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

for(let i = 0; i< harryPotterTitles.length;i++){
    console.log(`Harry Potter ${harryPotterTitles[i]}`)
}*/

//exercise 2:Loop through the grades with a for loop

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

/*for(let i =0; i < grades.length;i++){
if(grades[i] >=0 && grades[i] <= 69){
    console.log("You got an F")
} else if(grades[i] >=70 && grades[i] <= 76){
    console.log("You got an D")
} else if(grades[i] >=77 && grades[i] <= 84){
    console.log("You got an C")
}else if(grades[i] >=85 && grades[i] <= 92){
    console.log("You got an B")
}else if(grades[i] >=93 && grades[i] <= 100){
    console.log("You got an A")
}
}*/

/*exercise 2: part 2
Use JavaScript to answer the following questions:

How many students got A's?
How many students got B's?
Which was the most common letter grade?
What was the average percentage grade in the class?*/

/*let numberOfStudentAs = 0
let numberOfStudentBs = 0
let numberOfStudentCs = 0
let numberOfStudentDs = 0
let numberOfStudentFs = 0

for(let i =0; i < grades.length;i++){
    if(grades[i] >=0 && grades[i] <= 69){
        numberOfStudentFs+= 1
    } else if(grades[i] >=70 && grades[i] <= 76){
        numberOfStudentDs+=1
    } else if(grades[i] >=77 && grades[i] <= 84){
        numberOfStudentCs+=1
    }else if(grades[i] >=85 && grades[i] <= 92){
        numberOfStudentBs+=1
    }else if(grades[i] >=93 && grades[i] <= 100){
        numberOfStudentAs+=1
    }
    }
    console.log(`The number of students with As: ${numberOfStudentAs}`)
    console.log(`The number of students with Bs: ${numberOfStudentBs}`)
    console.log(`The number of students with Cs: ${numberOfStudentCs}`)
    console.log(`The number of students with Ds: ${numberOfStudentDs}`)
    console.log(`The number of students with Fs: ${numberOfStudentFs}`)*/
   

/*let mostcommongrade = 0

if( mostcommongrade < numberOfStudentAs){
    mostcommongrade= numberOfStudentAs
    console.log(mostcommongrade = "A")
} else if(mostcommongrade < numberOfStudentBs){
    mostcommongrade=numberOfStudentBs
    console.log(mostcommongrade = "B")
}else if(mostcommongrade < numberOfStudentCs){
    mostcommongrade= numberOfStudentCs
    console.log(mostcommongrade = "C")
}else if(mostcommongrade < numberOfStudentDs){
    mostcommongrade= numberOfStudentDs
    console.log(mostcommongrade = "D")
}else if(mostcommongrade < numberOfStudentFs){
    mostcommongrade= numberOfStudentFs
    console.log(mostcommongrade = "F")
}*/



/*let averageofgrades = 0/grades.length
for(let i= 0; i<grades.length;i++){
    averageofgrades+= (grades[i])/grades.length
}
console.log(Math.ceil(averageofgrades))*/

/*Two, Four, Six, Eight - Who do we appreciate?! CHEER
Write a loop that counts by 2's and creates the following output.
Output
2 4 6 8 Who do we appreciate?!*/

/*let numbersArray = [1,2,3,4,5,6,7,8,9]

let evennumberArray= []

for(let i = 0; i < numbersArray.length; i++){
    if(numbersArray[i]% 2 === 0){
        evennumberArray+= numbersArray[i]
    }
}
console.log(evennumberArray + " " + "Who do we appreciate")*/

/* alternate attempt
for(let i = 2; i < 10; i+=2){
    console.log(i)
    }
console.log("Who do we appreciate")*/

/*Interrupting Cow Exercise:
Write a loop that builds sentenceArray into a real sentence, except every fourth word should be "MOOOOOO". Hint: look up the modulus operator.*/

var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*for(let word= 0; word < sentenceArray.length; word++){
    if([word]% 2 === 0){
        console.log("MOOOOOO")
    } else if([word]% 4 !== 0){
        console.log(sentenceArray[word])
    }
}*/

//Exercise Beatles:Output the following values

//${name} was in the Beatles from ${year} to ${year}. He was born in ${year}. He contributed heavily to the ${albumName} Album.Please note that these values are not correct. They're just placeholders that you will need to correctly fill out. 

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

let key1= "members"
let key2= "history"
let key3= "albums"

// Access band member 1 (aka George) info: need name, birth year, year started and ended band career
let bandMember1= beatles[key1][0]
let bandMember1Name= bandMember1.name
let bandMember1Birth= bandMember1.birth
let bandMember1Album= beatles[key3][0]

let bandStartDate= beatles[key2].formed
let bandEndDate= beatles[key2].disbanded

// Access band member 2 (aka Paul) info: need name, birth year, year started and ended band career
let bandMember2= beatles[key1][1]
let bandMember2Name= bandMember2.name
let bandMember2Birth= bandMember2.birth
let bandMember2Album= beatles[key3][1]

// Access band member 3 (aka John) info: need name, birth year, year started and ended band career
let bandMember3= beatles[key1][2]
let bandMember3Name= bandMember3.name
let bandMember3Birth= bandMember3.birth
let bandMember3Album= beatles[key3][2]

// Access band member 2 (aka Paul) info: need name, birth year, year started and ended band career
let bandMember4= beatles[key1][3]
let bandMember4Name= bandMember4.name
let bandMember4Birth= bandMember4.birth
let bandMember4Album= beatles[key3][3]

//Output for each bandmember
console.log(`${bandMember1Name} was in the Beatles from ${bandStartDate} to ${bandEndDate}. He was born in ${bandMember1Birth}. He contributed heavily to the ${bandMember1Album} Album.`)

console.log(`${bandMember2Name} was in the Beatles from ${bandStartDate} to ${bandEndDate}. He was born in ${bandMember2Birth}. He contributed heavily to the ${bandMember2Album} Album.`)

console.log(`${bandMember3Name} was in the Beatles from ${bandStartDate} to ${bandEndDate}. He was born in ${bandMember3Birth}. He contributed heavily to the ${bandMember3Album} Album.`)

console.log(`${bandMember4Name} was in the Beatles from ${bandStartDate} to ${bandEndDate}. He was born in ${bandMember4Birth}. He contributed heavily to the ${bandMember4Album} Album.`)