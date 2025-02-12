// Array to store the list of people
var people = [];

document.getElementById("personForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get form values
  var id = document.getElementById("id").value;
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var profilePicture = document.getElementById("profilePicture").value;
  
  // Create a new person object
  var person = {
    id: id,
    name: name,
    surname: surname,
    email: email,
    username: username,
    profilePicture: profilePicture
  };
  
  // Add the person to the array
  people.push(person);
  
  // Clear form fields
  document.getElementById("personForm").reset();
});

document.getElementById("displayButton").addEventListener("click", function() {
  // Open a new pop-up window
  var displayWindow = window.open("", "People List", "width=600,height=400");
  
  // Generate HTML content for the pop-up window
  var htmlContent = "<h2>People List</h2>";
  htmlContent += "<ul>";
  
  for (var i = 0; i < people.length; i++) {
    var person = people[i];
    htmlContent += "<li>";
    htmlContent += "ID: " + person.id + "<br>";
    htmlContent += "Name: " + person.name + "<br>";
    htmlContent += "Surname: " + person.surname + "<br>";
    htmlContent += "Email: " + person.email + "<br>";
    htmlContent += "Username: " + person.username + "<br>";
    htmlContent += "Profile Picture: " + person.profilePicture + "<br>";
    htmlContent += "</li>";
  }
  
  htmlContent += "</ul>";
  
  // Set the generated HTML content in the pop-up window
  displayWindow.document.write(htmlContent);
});