// Sample data for demonstration
const issues = [
    {
      summary: "Issue 1 Summary",
      description: "Detailed description of Issue 1",
      identifiedBy: "John Doe",
      identifiedDate: "2023-07-10",
      project: "Project A",
      assignedTo: "Thapelo Mphahlele",
      status: "Open",
      priority: "Medium",
      targetResolutionDate: "2023-07-15",
      actualResolutionDate: null,
      resolutionSummary: ""
    },
    {
      summary: "Issue 2 Summary",
      description: "Detailed description of Issue 2",
      identifiedBy: "Jane Smith",
      identifiedDate: "2023-07-12",
      project: "Project B",
      assignedTo: "John Doe",
      status: "Resolved",
      priority: "High",
      targetResolutionDate: "2023-07-14",
      actualResolutionDate: "2023-07-13",
      resolutionSummary: "Issue fixed."
    },
    // Add more issue objects as needed
  ];
  
  // Create the table
  const table = document.createElement('table');
  
  // Create table header row
  const headerRow = document.createElement('tr');
  headerRow.innerHTML = `
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
  `;
  table.appendChild(headerRow);
  
  // Create table rows for each issue
  issues.forEach(issue => {
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
    `;
    table.appendChild(row);
  });
  
  // Add the table to the document
  document.body.appendChild(table);
  