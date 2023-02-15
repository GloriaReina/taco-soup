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

let numbersArray = [1,2,3,4,5,6,7,8,9]
for(let i = 0; i < numbersArray.length; i++){
    if(numbersArray[i]/ 2 === 0){
        console.log(numbersArray)
    } else {
        console.log("This is an odd number")
    }
}