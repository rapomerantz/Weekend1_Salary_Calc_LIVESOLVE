/* jshint esversion: 6 */
//The application should have an input form that collects _employee first name,
//last name, ID number, job title, annual salary_.



//`employee` constructor
class Employee {
  constructor (firstNameIn, lastNameIn, idNumberIn, jobTitleIn, annualSalaryIn) {
      this.firstName = firstNameIn;
      this.lastName = lastNameIn;
      this.idNumber = idNumberIn;
      this.jobTitle = jobTitleIn;
      this.annualSalary = annualSalaryIn;
  }
}
const employeeList = [];
let salarySum = 0;

// createEmployee ('Atticus', 'Pomerantz', 1234, 'Intern', 5000);
// createEmployee ('Jesse', 'River', 5678, 'Guitar Tech', 4000);









$(document).ready(readyNow);

function readyNow () {
  engageEventHandlers ();
  // addToTable();


}
//function to create a new Employee class
function createEmployee (firstName, lastName, idNumber, jobTitle, annualSalary) {
  let newEmployee = new Employee (firstName, lastName, idNumber, jobTitle, annualSalary);
  employeeList.push(newEmployee);
  console.log(employeeList);
}

function engageEventHandlers () {
  $('#submitButton').on('click', submitClicked);
}


//function performed when #submitButton is clicked
function submitClicked () {
  passToConstructorAndTable();
}

//function to pass all input field .val()s to createEmployee() and addToTable ()
function passToConstructorAndTable () {
    let inputFirstName = $('#firstNameInput').val();
    let inputLastName = $('#lastNameInput').val();
    let inputIdNumber = $('#idNumberInput').val();
    let inputJobTitle = $('#jobTitleInput').val();
    let inputAnnualSalary= $('#annualSalaryInput').val();
    // console.log('First name is:', inputFirstName);
    // console.log('Last name is:', inputLastName);
    // console.log('ID Number is:', inputIdNumber);
    // console.log('Job title is:', inputJobTitle);
    // console.log('Annual Salary is:', inputAnnualSalary);
    if (inputFirstName.length > 0 && inputLastName.length > 0 && inputIdNumber.length > 0 && inputJobTitle.length > 0 && inputAnnualSalary.length > 0 ) {
      createEmployee(inputFirstName, inputLastName, inputIdNumber, inputJobTitle, inputAnnualSalary);
      addToTable(inputFirstName, inputLastName, inputIdNumber, inputJobTitle, inputAnnualSalary);
      salaryMath();
      $('#firstNameInput').val('');
      $('#lastNameInput').val('');
      $('#idNumberInput').val('');
      $('#jobTitleInput').val('');
      $('#annualSalaryInput').val('');
      $('#errorMessage').empty();
      $('#errorMessage').append("(All input fields are required)");
    }
    else {
      $('#errorMessage').empty();
      $('#errorMessage').append("something's wrong...did you fill in all the input fields?");
    }
}

//accepts inputs from passToConstructorAndTable() and appends them to #tableId
function addToTable (inputFirstName, inputLastName, inputIdNumber, inputJobTitle, inputAnnualSalary) {
  console.log(inputFirstName, inputLastName, inputIdNumber, inputJobTitle, inputAnnualSalary);
  // if (inputFirstName.length > 0 && inputLastName.length > 0 && inputIdNumber.length > 0 && inputJobTitle.length > 0 && inputAnnualSalary.length > 0 ) {
    $('#tableId').append('<tr><td>'+inputFirstName+'</td><td>'+inputLastName+'</td><td>'+inputIdNumber+'</td><td>'+inputJobTitle+'</td><td>'+inputAnnualSalary+'</td><td>[no button]</td></tr>');

  // }
  // let firstNameData = $('<td class="firstName"></td>');
  // let lastNameData = $('<td class="lastName"></td>');
  // let idNumberData = $('<td class="idNumber"></td>');
  // let jobTitleData = $('<td class="jobTitle"></td>');
  // let annualSalaryData = $('<td class="annualSalary"></td>');
}

//function to empty then increment var salarySum and append it to #grandTotal
function salaryMath () {
 for (let eachEmployee of employeeList) {
   console.log('At salaryMath beginning salarySum is:', salarySum);
   let increaseSalaryCount = (parseInt(eachEmployee.annualSalary));
   salarySum +=increaseSalaryCount;
   console.log("now salarySum is", salarySum);
   $('#grandTotal').empty();
   $('#grandTotal').append('$' + salarySum);
   greaterThanTwentyThousand();
 }
}


//function to change the color of #grandTotal when it is > 20,000
function greaterThanTwentyThousand () {
  if (salarySum >= 20000) {
    $('#grandTotal').css('background-color', 'red');
    $('#grandTotal').css('color', 'white');
  }
}











//end
