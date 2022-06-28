let studentId = 0;

function addStudent(){
    let studentName = document.getElementById("studentName").value; //receiving the value from input
    if(studentName === ""){
        alert("Student's name cannot be empty");
    } else{
        displayStudent(studentName);                                //displaying the student
        document.getElementById("studentName").value = "";          //clearing the input
    }

}
function deleteStudent(id){
    document.getElementById(id).remove();
}
function displayStudent(student){
    document.getElementById("student-list").innerHTML += `
        <li id="${++studentId}"><div><i class="fa-solid fa-bars"></i> ${student}</div>
        <button onclick="deleteStudent(${studentId})"><i class="fa-solid fa-circle-minus"></i></button></li>`; //adding the student to the list
}