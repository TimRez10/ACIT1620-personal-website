courseList = [
    { code: 'ACIT 1620' ,  name: 'Scripting for IT'},
    { code: 'ACIT 1515' ,  name: 'Web Fundamental Technologies'},
    { code: 'ACIT 1630' ,  name: 'Database systems'},
];



let class_code;
do {
    class_code = prompt("Enter a 4-digit number");
    console.log((Number(class_code)).length);
} while((isNaN(class_code)) || !((class_code.length == 4))); 