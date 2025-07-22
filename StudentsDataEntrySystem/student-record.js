const form = document.getElementById('myform');
const table = document.getElementById('dataTable');
const deleteAllBtn = document.getElementById('deleteAll');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const fields = ['FirstName', 'LastName', 'Age', 'Location', 'Mobile', 'Class', 'Branch', 'Year', 'Password', 'Marks', 'Percentage', 'Status'];

  const row = document.createElement('tr');

  // Add each input value into a <td>
  fields.forEach(id => {
    const cell = document.createElement('td');
    cell.textContent = document.getElementById(id).value;
    row.appendChild(cell);
  });

  // Create the delete button cell
  const actionCell = document.createElement('td');
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = () => row.remove(); 
  actionCell.appendChild(deleteBtn);
  row.appendChild(actionCell);

  // Append the row directly to the table
  table.appendChild(row);

  // Clear the form inputs
  form.reset();
});

deleteAllBtn.onclick = () => {
  // Remove all rows except the header row
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
};
