// Array to store the list of projects
var projects = [];

document.getElementById("projectForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get form values
  var id = document.getElementById("id").value;
  var name = document.getElementById("name").value;
  
  // Create a new project object
  var project = {
    id: id,
    name: name
  };
  
  // Add the project to the array
  projects.push(project);
  
  // Clear form fields
  document.getElementById("projectForm").reset();
});

document.getElementById("displayButton").addEventListener("click", function() {
  // Open a new pop-up window
  var displayWindow = window.open("", "Projects List", "width=600,height=400");
  
  // Generate HTML content for the pop-up window
  var htmlContent = "<h2>Projects List</h2>";
  htmlContent += "<ul>";
  
  for (var i = 0; i < projects.length; i++) {
    var project = projects[i];
    htmlContent += "<li>";
    htmlContent += "ID: " + project.id + "<br>";
    htmlContent += "Name: " + project.name + "<br>";
    htmlContent += "</li>";
  }
  
  htmlContent += "</ul>";
  
  // Set the generated HTML content in the pop-up window
  displayWindow.document.write(htmlContent);
});
