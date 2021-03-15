function goToSearch() {
    window.open('search.html', '_blank');
}
function showInstructions() {
    var search = document.getElementById("search-bar");
    search.value = "Click on the google logo!";
}
function deleteInstructions() {
    var search = document.getElementById("search-bar");
    search.value = "";
}