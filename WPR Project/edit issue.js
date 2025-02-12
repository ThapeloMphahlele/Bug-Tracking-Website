// Sample data for demonstration
let issues = [
    {
          summary: "A brief summary about issue 1",
          description: "Detailed description of Issue 1",
          identifiedBy: "Tshepo Ngozwana",
          identifiedDate: "2022-05-17",
          project: "Project A",
          assignedTo: "Oratile Kutumela",
          status: "Open",
          priority: "Medium",
          targetResolutionDate: "2023-05-17",
          actualResolutionDate: null,
          resolutionSummary: ""
    },
    {
          summary: "Issue 2 brief summary",
          description: "Detailed description of Issue 2",
          identifiedBy: "Oratile Kutumela",
          identifiedDate: "2023-05-17",
          project: "Project D",
          assignedTo: "Tshepo Ngozwana",
          status: "Resolved",
          priority: "High",
          targetResolutionDate: "2023-05-30",
          actualResolutionDate: "2023-05-27",
          resolutionSummary: "Issue fixed."
    },
    // Add more issue objects as needed
  ];

  const table = document.getElementById('issueTable');
  const form = document.getElementById('issueForm');

  // Function to render the table
  function renderTable() {
    table.innerHTML = `
      <tr>
        <th>Summary</th>
        <th>Description</th>
        <th>Identified By</th>
        <th>Identified Date</th>
        <th>Project</th>
        <th>Assigned To</th>
        <th>Status</th>
        <th>Priority</th>
        <th>Target Resolution Date</th>
        <th>Actual Resolution Date</th>
        <th>Resolution Summary</th>
        <th>Actions</th>
      </tr>
    `;

    issues.forEach((issue, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${issue.summary}</td>
        <td>${issue.description}</td>
        <td>${issue.identifiedBy}</td>
        <td>${issue.identifiedDate}</td>
        <td>${issue.project}</td>
        <td>${issue.assignedTo}</td>
        <td>${issue.status}</td>
        <td>${issue.priority}</td>
        <td>${issue.targetResolutionDate}</td>
        <td>${issue.actualResolutionDate || '-'}</td>
        <td>${issue.resolutionSummary}</td>
        <td>
          <button onclick="updateIssue(${index})">Update</button>
          <button onclick="deleteIssue(${index})">Delete</button>
        </td>
      `;
      table.appendChild(row);
    });
  }

  // Function to add a new issue
  function addIssue(event) {
    event.preventDefault();

    const summary = document.getElementById('summary').value;
    const description = document.getElementById('description').value;
    const identifiedBy = document.getElementById('identifiedBy').value;
    const identifiedDate = document.getElementById('identifiedDate').value;
    const project = document.getElementById('project').value;
    const assignedTo = document.getElementById('assignedTo').value;
    const status = document.getElementById('status').value;
    const priority = document.getElementById('priority').value;
    const targetResolutionDate = document.getElementById('targetResolutionDate').value;

    const newIssue = {
      summary,
      description,
      identifiedBy,
      identifiedDate,
      project,
      assignedTo,
      status,
      priority,
      targetResolutionDate,
      actualResolutionDate: null,
      resolutionSummary: ""
    };

    issues.push(newIssue);
    renderTable();

    form.reset();
  }

  // Function to update an existing issue
  function updateIssue(index) {
    const issue = issues[index];

    const summary = prompt('Enter the updated summary:', issue.summary);
    const description = prompt('Enter the updated description:', issue.description);
    const identifiedBy = prompt('Enter the updated identified by:', issue.identifiedBy);
    const identifiedDate = prompt('Enter the updated identified date:', issue.identifiedDate);
    const project = prompt('Enter the updated project:', issue.project);
    const assignedTo = prompt('Enter the updated assigned to:', issue.assignedTo);
    const status = prompt('Enter the updated status:', issue.status);
    const priority = prompt('Enter the updated priority:', issue.priority);
    const targetResolutionDate = prompt('Enter the updated target resolution date:', issue.targetResolutionDate);

    issues[index] = {
      ...issue,
      summary,
      description,
      identifiedBy,
      identifiedDate,
      project,
      assignedTo,
      status,
      priority,
      targetResolutionDate,
    };

    renderTable();
  }

  // Function to delete an issue
  function deleteIssue(index) {
    const confirmation = confirm('Are you sure you want to delete this issue?');

    if (confirmation) {
      issues.splice(index, 1);
      renderTable();
    }
  }

  form.addEventListener('submit', addIssue);

  // Initial table rendering
  renderTable();