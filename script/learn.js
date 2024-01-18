
//  function age() {
// //   var d1 = document.getElementById("day").value;
// //   var m1 = document.getElementById("month").value;
// //   var y1 = document.getElementById("years").value;
// //   var date = new Date();
// //   var d2 = date.getDate();
// //   var m2 = 1 + date.getMonth();
// // //   console.log(m2);
 
//   console.log(m2);
//   var y2 = date.getFullYear();
//   var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   if (d1 > d2) {
//     d2 = d2 + month[m2 - 1];
//     m2 = m2 - 1;
//   }
//   if (m1 > m2) {
//     m2 = m2 + 12;
//     y2 = y2 - 1;
//   } console.log(d );
//   var d = d2 - d1;
//   var m = m2 - m1;
//   var y = y2 - y1;
//   document.getElementById("demo").innerHTML =
//     "Your Age is " + y + " Years " + m + " Months " + d + " Days";

   
// //    let h2 = document.querySelector("h2");
// //    let day = document.getElementById("day").value;
// //    let month = document.getElementById("month").value;
// //    let year = document.getElementById("year").value;
// //    console.log(day);
// //    let demo = document.getElementById("demo")
// //    demo.innerHTML = 
// //    `age is ${dd} month ${mm} year is ${yy}`
//  }



 function lost(){
    let d1 = document.getElementById("day").value
    let m1 = document.getElementById("month").value
    let y1 = document.getElementById("year").value
    let date = new Date()
    let d2 = date.getDate()
    let m2 = 1 + date.getMonth()
    let y2 = date.getFullYear()
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if(d1 > d2){
        d2 = d2 + month[m2 - 1]
        m2 = m2 - 1

    }
    if(m1 > m2){
        m2 = m2 + 12
        y2 = y2 - 1
    }
    let d = d2 - d1
    let m = m2 - m1
    let y = y2 - y1
    let demo = document.querySelector(".demo")
    document.querySelectorAll("input").value = 0
    
    
    demo.style.display = "flex"
    demo.innerHTML = `
     <div class="date">
            <span id="days">${d}</span>
            <span id="months">${m}</span>
            <span id="years">${y}</span>
        </div>
        <div class="name">
            <span>day</span>
            <span>month</span>
            <span>years</span>
        </div>`;
        
        
        
    }