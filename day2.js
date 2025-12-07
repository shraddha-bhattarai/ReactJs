const students=["bikesh","alice","john","mike","sara"];
console.log(students.length);

const collegeDetails = {
    name : "techspire",
    section: 20,
    students: students,
    award: null,
};
console.log(collegeDetails.students[3]);

const fruits=["apple","banana","mango","grapes","orange"];
console.log(fruits[2])

const fruitsDetails = {
    name: fruits,
    type: "citrus",
    color: "yellow",
    taste: "sweet",
    pricePerKg: 60,
};
console.log(fruitsDetails.name[1]); 

getStudetnsName();
function getStudetnsName() {
    console.log("i am a student")
}