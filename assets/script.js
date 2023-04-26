window.onload = function() {
    document.getElementById("nav-home").addEventListener("click", function() {
        window.location.href = "index.html";
    });
    document.getElementById("nav-about").addEventListener("click", function() {
        window.location.href = "#about";
    });
    document.getElementById("nav-projects").addEventListener("click", function() {
        window.location.href = "#project-holder";
    });
    document.getElementById("nav-contact").addEventListener("click", function() {
        window.location.href = "#contact-holder";
    });
}