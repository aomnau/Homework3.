
function drawCircles() {
    const selectValue = document.getElementById("circleSelect").value;
    const circles = document.querySelectorAll(".circle");

    circles.forEach((circle, index) => {
      if (index < selectValue - 1) {
        circle.style.backgroundColor = "#00e390";
      } else {
        circle.style.backgroundColor = "";
      }
    });
  }
        function drawCircles1() {
          const selectValue = document.getElementById("circleSelect1").value;
          const circles = document.querySelectorAll(".circle1");

          circles.forEach((circle1, index) => {
            if (index < selectValue - 1) {
              circle1.style.backgroundColor = "#00e390";
            } else {
              circle1.style.backgroundColor = "";
            }
          });
        }
        drawCircles1();