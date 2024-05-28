const students = [
    { sNo: 1, name: 'John Doe', fatherName: 'Richard Doe', age: 16, rollNo: '101', class: '10th Grade' },
    { sNo: 2, name: 'Jane Smith', fatherName: 'Robert Smith', age: 15, rollNo: '102', class: '9th Grade' },
    { sNo: 3, name: 'Michael Johnson', fatherName: 'James Johnson', age: 17, rollNo: '103', class: '11th Grade' },
    { sNo: 4, name: 'Emily Davis', fatherName: 'William Davis', age: 14, rollNo: '104', class: '8th Grade' },
    { sNo: 5, name: 'Jessica Brown', fatherName: 'Charles Brown', age: 16, rollNo: '105', class: '10th Grade' },
    { sNo: 6, name: 'Daniel Wilson', fatherName: 'Thomas Wilson', age: 15, rollNo: '106', class: '9th Grade' },
    { sNo: 7, name: 'Sarah Taylor', fatherName: 'Andrew Taylor', age: 17, rollNo: '107', class: '11th Grade' },
    { sNo: 8, name: 'David Lee', fatherName: 'George Lee', age: 14, rollNo: '108', class: '8th Grade' },
    { sNo: 9, name: 'Laura Martin', fatherName: 'Paul Martin', age: 16, rollNo: '109', class: '10th Grade' },
    { sNo: 10, name: 'Kevin White', fatherName: 'Mark White', age: 15, rollNo: '110', class: '9th Grade' }
];

const totalPresent = document.getElementById('totalPresent');
const totalAbsent = document.getElementById('totalAbsent');
const totalLeave = document.getElementById('totalLeave');
const studentTableBody = document.getElementById('studentTableBody');

let statusCounts = {
    Present: 0,
    Absent: 0,
    Leave: 0
};

function updateCounts() {
    totalPresent.textContent = statusCounts.Present;
    totalAbsent.textContent = statusCounts.Absent;
    totalLeave.textContent = statusCounts.Leave;
}

function createStatusRadioButtons(studentIndex) {
    const statusDiv = document.createElement('div');
    statusDiv.classList.add('status');

    const presentRadio = document.createElement('input');
    presentRadio.type = 'radio';
    presentRadio.id = `present-${studentIndex}`;
    presentRadio.name = `status-${studentIndex}`;
    presentRadio.value = 'Present';
    presentRadio.addEventListener('change', () => {
        handleStatusChange(studentIndex, 'Present');
    });

    const presentLabel = document.createElement('label');
    presentLabel.htmlFor = `present-${studentIndex}`;
    presentLabel.textContent = 'Present';

    const absentRadio = document.createElement('input');
    absentRadio.type = 'radio';
    absentRadio.id = `absent-${studentIndex}`;
    absentRadio.name = `status-${studentIndex}`;
    absentRadio.value = 'Absent';
    absentRadio.addEventListener('change', () => {
        handleStatusChange(studentIndex, 'Absent');
    });

    const absentLabel = document.createElement('label');
    absentLabel.htmlFor = `absent-${studentIndex}`;
    absentLabel.textContent = 'Absent';

    const leaveRadio = document.createElement('input');
    leaveRadio.type = 'radio';
    leaveRadio.id = `leave-${studentIndex}`;
    leaveRadio.name = `status-${studentIndex}`;
    leaveRadio.value = 'Leave';
    leaveRadio.addEventListener('change', () => {
        handleStatusChange(studentIndex, 'Leave');
    });

    const leaveLabel = document.createElement('label');
    leaveLabel.htmlFor = `leave-${studentIndex}`;
    leaveLabel.textContent = 'Leave';

    statusDiv.appendChild(presentRadio);
    statusDiv.appendChild(presentLabel);
    statusDiv.appendChild(absentRadio);
    statusDiv.appendChild(absentLabel);
    statusDiv.appendChild(leaveRadio);
    statusDiv.appendChild(leaveLabel);

    return statusDiv;
}

function handleStatusChange(studentIndex, newStatus) {
    const radios = document.getElementsByName(`status-${studentIndex}`);
    let previousStatus;
    radios.forEach(radio => {
        if (radio.checked) {
            previousStatus = radio.value;
        }
    });

    if (previousStatus && previousStatus !== newStatus) {
        statusCounts[previousStatus]--;
    }

    statusCounts[newStatus]++;
    updateCounts();
}

students.forEach((student, index) => {
    const row = document.createElement('tr');

    const sNoCell = document.createElement('td');
    sNoCell.textContent = student.sNo;
    row.appendChild(sNoCell);

    const nameCell = document.createElement('td');
    nameCell.textContent = student.name;
    row.appendChild(nameCell);

    const fatherNameCell = document.createElement('td');
    fatherNameCell.textContent = student.fatherName;
    row.appendChild(fatherNameCell);

    const ageCell = document.createElement('td');
    ageCell.textContent = student.age;
    row.appendChild(ageCell);

    const rollNoCell = document.createElement('td');
    rollNoCell.textContent = student.rollNo;
    row.appendChild(rollNoCell);

    const classCell = document.createElement('td');
    classCell.textContent = student.class;
    row.appendChild(classCell);

    const statusCell = document.createElement('td');
    statusCell.appendChild(createStatusRadioButtons(index));
    row.appendChild(statusCell);

    studentTableBody.appendChild(row);
});

updateCounts();
