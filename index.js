document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();
    var email = document.getElementById("email").value;
    window.open('mailto:'+email);
    
 
 })