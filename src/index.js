const data = [
  {
    id: 26,
    title: 'Побег из Шоушенка',
    imdb: 9.30,
    year: 1994,
  },
  {
    id: 25,
    title: 'Крёстный отец',
    imdb: 9.20,
    year: 1972,
  },
  {
    id: 27,
    title: 'Крёстный отец 2',
    imdb: 9.00,
    year: 1974,
  },
  {
    id: 1047,
    title: 'Тёмный рыцарь',
    imdb: 9.00,
    year: 2008,
  },
  {
    id: 223,
    title: 'Криминальное чтиво',
    imdb: 8.90,
    year: 1994,
  },
];

const dataFields = ['id', 'title', 'year', 'imdb'];
const tableElement = document.getElementById('table');

function renderCell(row, content) {
  const cellElement = document.createElement('td');
  cellElement.textContent = content;
  row.appendChild(cellElement);
}

function renderFieldCell(row, fieldName, fieldToSort) {
  renderCell(row, fieldName === fieldToSort ? `↓ ${fieldName}` : fieldName);
}

function renderTable(fieldToSort) {
  tableElement.replaceChildren();

  const headerRow = document.createElement('tr');
  renderFieldCell(headerRow, 'id', fieldToSort);
  renderFieldCell(headerRow, 'title', fieldToSort);
  renderFieldCell(headerRow, 'year', fieldToSort);
  renderFieldCell(headerRow, 'imdb', fieldToSort);
  tableElement.appendChild(headerRow);

  for (const {
    id, title, year, imdb,
  } of data) {
    const dataRow = document.createElement('tr');
    renderCell(dataRow, id);
    renderCell(dataRow, title);
    renderCell(dataRow, year);
    renderCell(dataRow, imdb.toFixed(2));
    tableElement.appendChild(dataRow);
  }
}

function renderSorted() {
  const fieldToSort = dataFields[Math.floor(Math.random() * dataFields.length)];

  data.sort((a, b) => (a[fieldToSort] > b[fieldToSort] ? 1 : -1));

  renderTable(fieldToSort);
}

renderSorted();

setInterval(renderSorted, 5000);
