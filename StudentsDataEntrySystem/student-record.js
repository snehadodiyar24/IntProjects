
const form = document.getElementById('myform');
const table = document.getElementById('dataTable');
const deleteAllBtn = document.getElementById('deleteAll');


let records = [];

function renderTable() {

  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  records.forEach((record, index) => {
    const row = document.createElement('tr');

    Object.values(record).forEach(value => {
      const cell = document.createElement('td');
      cell.textContent = value;
      row.appendChild(cell);
    });

    
    const actionCell = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => {
     
      records.splice(index, 1);
      renderTable(); 
    };
    actionCell.appendChild(deleteBtn);
    row.appendChild(actionCell);

    table.appendChild(row);
  });
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  
  const fields = ['FirstName', 'LastName', 'Age', 'Location', 'Mobile', 'Class', 'Branch', 'Year', 'Password', 'Marks', 'Percentage', 'Status'];
  const newRecord = {};
  fields.forEach(id => {
    newRecord[id] = document.getElementById(id).value;
  });

  
  records.push(newRecord);

  renderTable();

  form.reset();
});


deleteAllBtn.onclick = () => {
  records = [];
  renderTable(); 
};
