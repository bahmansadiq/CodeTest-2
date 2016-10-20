/*1- Display the current day and time with the following format: Today is Sunday. The current time is 9 AM : 50 : 22
*/
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var currentTime = new Date();
var to_day=currentTime.getDay();
var hour=currentTime.getHours();
today=days[to_day];
	if(hour <=12){
		hour = hour + "AM"
	}
	else {
		hour = hour - 12 + " PM"
	}
var mnts= currentTime.getMinutes();
var scnds= currentTime.getSeconds();
var comments=("Today is " + today +" .The current time is "+ hour +":"+ mnts + ":" + scnds);
document.getElementById("timeAndDate").innerHTML=comments;

/*2- Scroll the string 'Origin Code Academy Rocks! ' from left to right by periodically (every 100 miliseconds)
 removing one letter from the end of the string and attaching it to the front.*/

 var originString = "Origin Code Academy Rocks! ";
function scrlsts() {
 originString = originString[originString.length - 1] + originString.substring(0, originString.length -1 ) ;
// document.title = originString;
document.getElementById("magicOrigin").innerHTML=originString;
 setTimeout("scrlsts()", 100);
 }

/*A bubble sort, sometimes referred to as a sinking sort, is a simple sorting algorithm that works by repeatedly stepping 
through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order.
 Array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213] Expected output :
[3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
 Output the bubble-sorted result using a console.log statement.*/


 
var uoArray= [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
//[3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
var orArray =uoArray.sort(function(a, b)
	{
		return b-a; 
	});
console.log(orArray);


//Write HTML and jQuery statements to complete the following tasks.

//Make the first word of each element bold

        $(".mekeBold").each(function () {
            var temp = $(this);

            temp.html(temp.text().replace(/(^\w+)/, '<strong>$1</strong>'));
        });


/* Attach a click and a double-click event to the <p> element. For single click append the following paragraph: 
<p>This is a click event</p> For double-click append the following paragraph: <p>This is a double-click event</p>
*/
$( ".single_click").click(function() {
//  alert( "Hello single click !" );
  $(".parse").text("This is a click event");
});


$("#double_click").dblclick(function() {
 // alert( "Hello double click !" );
  $(".parse").text("This is a double click event");
});

//Change the background color of the div when the button is clicked.


   $(".changeColor").click(function() {
    $(".newColor").css('background-color' , '#00bfff');
  });


   