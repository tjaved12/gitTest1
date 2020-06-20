//When the factButton is clicked...
$("#factButton").on("click", function() {
	// We generate a random number between 0 and 4 (the number of facts in the catFactArray)
	var number = Math.floor((Math.random() * skillsArray.length));
	// We display the fact from the skillsArray that is in the random position we just generated.
	$("#factText").text(skillsArray[number])
});

// This array holds all of my skills facts!
var skillsArray = ["10+ years of QA experience", "Excellent communication skills", "Team player", "Proficient in Automation Engineering",
 "Proficient in Functional, Integration, E2E, System, Accessibility, UAT and Performance testing"]

 // When the boxGrow button is clicked...
$("#boxGrow").on("click", function() {
	// Increase the size of the box.
    $("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
});
    // When the boxShrink button is clicked...
$("#boxShrink").on("click", function() {
	// Decrease the size of the box.
    $("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
});
     //When button Reset is clicked
    document.getElementById("reset").addEventListener("click", function(){
     document.getElementById("box").style.height = "180px";
     document.getElementById("box").style.width = "180px";


   // $("#reset").on("click", function() {
    //$("#box").style.height ="180px";
   // $("#box").style.width = "180px";
   // $("#box").style.animate = "fast";
})
