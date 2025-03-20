function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
  }
  
  const moveRandom = document.querySelector("#move-random");
  
  moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
  });

  moveRandom.addEventListener("touchstart", function (e) {
    moveRandomEl(e.target);
  });
      
  document.querySelector('a[href="no3.html"]').addEventListener("click", function (e) {
    e.preventDefault(); // Default action rokna
       
    fetch("save_response.php") // PHP script ko call karna
      .then(response => response.text())
      .then(data => {
          console.log("Server Response:", data);
          alert("YES Confirmed! 🎉"); // Confirmation alert
          window.location.href = "yes.html"; // Redirect karna
      })
      .catch(error => console.error("Error:", error));
  });
