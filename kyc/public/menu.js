$(document).ready(function () {

    document.getElementById('oname').innerHTML = localStorage.getItem('oname');

});
function reg() {
    location.href = "http://localhost:3001/reg";
}
function view_all_customers() {
    location.href = "http://localhost:3001/view_all_customers.html";
}
function logout() {
    alert("Logout successful");
    location.href = "http://localhost:3001/";
}