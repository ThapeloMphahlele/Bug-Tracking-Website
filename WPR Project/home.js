document.addEventListener('DOMContentLoaded', function() {
    var homeContainer = document.getElementById('home-container');
    var createIssueLink = document.getElementById('create-issue-link');
    var assignIssueLink = document.getElementById('assign-issue-link');
    var viewAllIssuesLink = document.getElementById('view-all-issues-link');
    var viewIssueLink = document.getElementById('view-issue-link');
    var editIssueLink = document.getElementById('edit-issue-link');
    var createPeopleLink = document.getElementById('create-people-link');
    var createProjectsLink = document.getElementById('create-projects-link');
    var logoutButton = document.getElementById('logout-button');
    var createIssueContainer = document.getElementById('create-issue-container');
    var createIssueForm = document.getElementById('create-issue-form');
    var issueTable = document.getElementById('issue-table').getElementsByTagName('tbody')[0];
    var nextIssueId = 1;
  
    createIssueLink.addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = 'create issue.html';
      displayCreateIssuePage();
    });
  
    // Add event listeners for other buttons
    assignIssueLink.addEventListener('click', function(event) {
      event.preventDefault();
      // Add logic to redirect to the assign issue page
      window.location.href = 'assign.html';
    });
  
    viewAllIssuesLink.addEventListener('click', function(event) {
      event.preventDefault();
      // Add logic to redirect to the view all issues page
      window.location.href = 'view issue.html';
    });
  
    viewIssueLink.addEventListener('click', function(event) {
      event.preventDefault();
      // Add logic to redirect to the view issue page
      window.location.href = 'view an issue.html';
    });
  
    editIssueLink.addEventListener('click', function(event) {
      event.preventDefault();
      // Add logic to redirect to the edit issue page
      window.location.href = 'edit issue.html';
    });
  
    createPeopleLink.addEventListener('click', function(event) {
      event.preventDefault();
      // Add logic to redirect to the create people page
      window.location.href = 'people.html';
    });
  
    createProjectsLink.addEventListener('click', function(event) {
      event.preventDefault();
      // Add logic to redirect to the create projects page
      window.location.href = 'projects.html';
    });
  
    createIssueForm.addEventListener('submit', function(event) {
      event.preventDefault();
      createIssue();
    });
  
    function displayCreateIssuePage() {
      createIssueForm.reset();
      homeContainer.classList.add('hidden');
      createIssueContainer.classList.remove('hidden');
    }
  
    function createIssue() {
      // Issue creation logic goes here
    }
  
    // Other functionality functions go here
  });