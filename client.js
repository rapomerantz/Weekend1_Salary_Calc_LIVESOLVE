/* jshint esversion: 6 */

$(document).ready(readyNow);
let totalYearlySalary = 0;
let employees = [];

function readyNow () {
  console.log('JQ');
  addClickHandlers ();

}

function addClickHandlers () {
  $('#submitButton').on('click', addEmployeeData);
  $('#tableContent').on('click', '.deleteButton', deleteEmployee);
}

class Employee {
  constructor (firstIn, lastIn, titleIn, idIn, salaryIn) {
    this.first = firstIn;
    this.last = lastIn;
    this.title = titleIn;
    this.id = idIn;
    this.salary = salaryIn;
  }
  // Create a table row
  toHTML() {
    let result = '<tr>';
    result += '<td>' + this.first + '</td>';
    result += '<td>' + this.last + '</td>';
    result += '<td>' + this.id + '</td>';
    result += '<td>' + this.title + '</td>';
    //don't change the order here! we are using it in the delete function
    result += '<td>' + this.salary + '</td>';
    result += '<td><button class="deleteButton">Delete</button></td>';
    result += '</tr>';
    return result;
  }
}

function addEmployeeData () {
  let salary = $('#salary').val();
  let first = $('#firstName').val();
  let last = $('#lastName').val();
  let title = $('#title').val();
  let empId = $('#employeeId').val();
  console.log('salary', salary);
  let employee = new Employee (first, last, empId, title, salary);
  employees.push(employee);
  updateEmployeesOnDOM ();
}

//using the array to update employees on the DOM
function updateEmployeesOnDOM () {
  totalYearlySalary = 0;
  $('#tableContent').empty();
  for (let employee of employees) {
    //.toHTML returns HTML as a string
    $('#tableContent').append(employee.toHTML());
    totalYearlySalary += parseInt(employee.salary);
  }
  updateMonthlyCosts ();
}

function deleteEmployee () {
  console.log('delete the employee', $(this));
  let removedSalary = $(this).parent().prev().text(); //salary td
  $(this).parent().parent().remove();
  console.log(removedSalary);
  totalYearlySalary -= removedSalary;
  updateMonthlyCosts ();
}

//updates the monthly cost based on the new empoloyee salary
function updateMonthlyCosts () {
  let monthlyCost = (totalYearlySalary/12).toFixed(2);
  console.log('total monthly', monthlyCost);
  $('#monthlyCost').text(monthlyCost);
  if (monthlyCost > 20000) {
    $('#monthlyCost').addClass('highlight');
  }
  else {
    $('#monthlyCost').removeClass('highlight');
  }
}
