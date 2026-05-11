// DOM Select
const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const addBtn = document.querySelector("#addBtn");
const studentList = document.querySelector("#studentList");
const searchInput = document.querySelector("#search");

// Students Array
let students = JSON.parse(localStorage.getItem("students")) || [];

// Student Class
class Student{

    constructor(name, age){

        this.id = Date.now();
        this.name = name;
        this.age = age;
    }
}

// Render Function
function renderStudents(data = students){

    studentList.innerHTML = "";

    data.map(student => {

        studentList.innerHTML += `
        
        <div class="student">

            <h3>${student.name}</h3>

            <p>Age : ${student.age}</p>

            <button onclick="deleteStudent(${student.id})">
                Delete
            </button>

        </div>
        
        `;
    });
}

// Add Student
addBtn.addEventListener("click", () => {

    const name = nameInput.value;
    const age = ageInput.value;

    // Validation
    if(name === "" || age === ""){

        alert("Fill all fields");
        return;
    }

    // Create Object
    const student = new Student(name, age);

    // Add to Array
    students.push(student);

    // Save
    saveToLocalStorage();

    // Refresh UI
    renderStudents();

    // Clear Inputs
    clearInputs();
});

// Delete Function
function deleteStudent(id){

    students = students.filter(student => {

        return student.id !== id;
    });

    saveToLocalStorage();

    renderStudents();
}

// Search
searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    const filteredStudents = students.filter(student => {

        return student.name
            .toLowerCase()
            .includes(value);
    });

    renderStudents(filteredStudents);
});

// Clear Inputs
function clearInputs(){

    nameInput.value = "";
    ageInput.value = "";
}

// Save Storage
function saveToLocalStorage(){

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );
}

// Initial Render
renderStudents();