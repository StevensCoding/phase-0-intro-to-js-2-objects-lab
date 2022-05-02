// Write your solution in this file!

const employee = {
    name : "Crewmate",
    streetAddress : "Skeld"

}
function updateEmployeeWithKeyAndValue(obj, key, value){
    const employee = {...obj};
    employee[key] = value;
    return employee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(obj, key){
    let employee = {...obj}
    delete employee[key];
    return employee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
    
}
