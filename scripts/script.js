let courseList = [
    { code: 'ACIT 1620' ,  name: 'Scripting for IT'},
    { code: 'ACIT 1515' ,  name: 'Web Fundamental Technologies'},
    { code: 'ACIT 1630' ,  name: 'Database systems'},
];


let input_code;
do {
    input_code = prompt("Enter a 4-digit number");
} while((isNaN(input_code)) || !((input_code.length == 4))); 

isClass = false
for (let lookup of courseList) {
    let course_num = lookup.code.split(" ")[1];
    if (course_num === input_code) {
        console.log(`Yes I am taking the course:  ${lookup.code} - ${lookup.name}`)
        isClass = true
    }
};

if (isClass === false) {
    courseList.push({ code: input_code ,  name: null})
    console.log(`Successfully added ${input_code} code. New courseList array is:`, courseList)
}