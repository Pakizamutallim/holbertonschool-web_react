interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
}

const student1: Student = {
    firstName: "Helen",
    lastName: "Doe",
    age: 19,
    location: "London"
}

const student2: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 27,
    location: "Texas"
}

const studentsList: Student[] = [student1, student2];

const body: HTMLBodyElement = document.body;
const table: HTMLTableElement = document.createElement('table');

studentsList.forEach((student) => {
    const row: HTMLTableRowElement = table.insertRow()
    const cell1: HTMLTableCellElement = row.insertCell(0);
    const cell2: HTMLTableCellElement = row.insertCell(1);
    
    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
});

body.appendChild(table)