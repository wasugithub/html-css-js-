
//dom
const name = document.querySelector(#name);
const age = document.querySelector(#age);
const btn = document.querySelector(#addBtn);
const search = document.querySelector(#search);
const studentlist = document.querySelector(#studentList);

// array store 
let students = JSON.parse(localStorage.getItem("students")) || [];

//oop class 
class Student {
    constructor(name, age) {

        this.id = Date.now();
        this.name = name;
        this.age = age;
    }
}

function renderStudents(data = students) {
    renderStudents();

    clearInputs();
};

// Delete Student
function deleteStudent(id) {

    students = students.filter(student => {
        return student.id !== id;
    });

    saveToLocalStorage();

    renderStudents();
}

// Search Student
searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    const filtered = students.filter(student => {

        return student.name.toLowerCase().includes(value);
    });

    renderStudents(filtered);
});

// Clear Inputs
function clearInputs() {

    nameInput.value = "";
    ageInput.value = "";
}

// Local Storage Save
function saveToLocalStorage() {

    localStorage.setItem("students", JSON.stringify(students));
}

// Fake Async API
async function loadFakeData() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);
    }
}

loadFakeData();

// Initial Render
renderStudents();