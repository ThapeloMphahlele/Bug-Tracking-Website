document.addEventListener('DOMContentLoaded', function() {
    var issueForm = document.getElementById('issue-form');
  
    issueForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var summary = document.getElementById('summary').value;
      var description = document.getElementById('description').value;
      var identifier = document.getElementById('identifier').value;
      var date = document.getElementById('date').value;
      var project = document.getElementById('project').value;
      var assignee = document.getElementById('assignee').value;
      var status = document.getElementById('status').value;
      var priority = document.getElementById('priority').value;
      var targetResolutionDate = document.getElementById('target-resolution-date').value;
      var actualResolutionDate = document.getElementById('actual-resolution-date').value;
      var resolutionSummary = document.getElementById('resolution-summary').value;
  
      // Process the issue data (e.g., send to server, store in a database)
      var issueData = {
        summary: summary,
        description: description,
        identifier: identifier,
        date: date,
        project: project,
        assignee: assignee,
        status: status,
        priority: priority,
        targetResolutionDate: targetResolutionDate,
        actualResolutionDate: actualResolutionDate,
        resolutionSummary: resolutionSummary
      };
  
      console.log(issueData);
      alert("Issue submitted successfully!");
  
      // Reset the form
      issueForm.reset();
    });
  });
  
