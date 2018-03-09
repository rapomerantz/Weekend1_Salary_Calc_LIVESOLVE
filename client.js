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

// createEmployee ('Atticus', 'Pomerantz', 1234, 'Intern', 5000);
// createEmployee ('Jesse', 'River', 5678, 'Guitar Tech', 4000);


$(document).ready(readyNow);

function readyNow () {
  engageEventHandlers ();
  addToTable();


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
  passInfoToConstructor();
}

//function to pass all input field .val()s to createEmployee()
function passInfoToConstructor () {
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
  createEmployee(inputFirstName, inputLastName, inputIdNumber, inputJobTitle, inputAnnualSalary);

}

function addToTable () {
  let tableInput = $('#tableInput');
  console.log('about to add to table...');

  // let firstNameData = $('<td class="firstName"></td>');
  // let lastNameData = $('<td class="lastName"></td>');
  // let idNumberData = $('<td class="idNumber"></td>');
  // let jobTitleData = $('<td class="jobTitle"></td>');
  // let annualSalaryData = $('<td class="annualSalary"></td>');
  $('#targetMe').append('<tr><td>First Name</td><td>Last Name</td><td>Id Number</td><td>Job Title</td><td>Annnual Salary</td><td>[no button]</td></tr>');
}












//end
