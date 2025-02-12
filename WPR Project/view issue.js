document.addEventListener('DOMContentLoaded', function() {
    var issueForm = document.getElementById('issue-form');
    var issueTable = document.getElementById('issue-table').getElementsByTagName('tbody')[0];
  
    issueForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var issue = document.getElementById('issue').value;
      var person = document.getElementById('person').value;
      var status = document.getElementById('status').value;
      var priority = document.getElementById('priority').value;
  
      // Create a new row in the table
      var newRow = issueTable.insertRow();
      var issueCell = newRow.insertCell();
      var personCell = newRow.insertCell();
      var statusCell = newRow.insertCell();
      var priorityCell = newRow.insertCell();
  
      // Assign the entered values to the cells
      issueCell.textContent = issue;
      personCell.textContent = person;
      statusCell.textContent = status;
      priorityCell.textContent = priority;
  
      // Reset the form
      issueForm.reset();
    });
  });
  
  