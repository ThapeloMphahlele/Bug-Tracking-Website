document.addEventListener('DOMContentLoaded', function() {
  var assignIssueForm = document.getElementById('assign-issue-form');
  var assignedIssuesTable = document.getElementById('assigned-issues-table');
  
  assignIssueForm.addEventListener('submit', function(event) {
    event.preventDefault();
  
    var issueName = document.getElementById('issue-name').value;
    var personFirstName = document.getElementById('person-first-name').value;
    var personSurname = document.getElementById('person-surname').value;
    var personId = document.getElementById('person-id').value;
  
    // Perform the issue assignment logic here
    console.log('Issue Name:', issueName);
    console.log('Person\'s First Name:', personFirstName);
    console.log('Person\'s Surname:', personSurname);
    console.log('Person\'s ID:', personId);
  
    // Create a new row in the assigned issues table
    var newRow = assignedIssuesTable.insertRow();
  
    // Add the assigned issue details to the new row
    var cell1 = newRow.insertCell();
    var cell2 = newRow.insertCell();
    var cell3 = newRow.insertCell();
    var cell4 = newRow.insertCell();
  
    cell1.innerHTML = issueName;
    cell2.innerHTML = personFirstName;
    cell3.innerHTML = personSurname;
    cell4.innerHTML = personId;
  
    // Reset the form
    assignIssueForm.reset();
  });
});
