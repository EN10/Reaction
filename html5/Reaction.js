var start;	var setTimer;	var time;	var score;	var sp;
var x;	var y;	var sq;			// Mouse ClickXY & Sq clicked
w=window.innerHeight/4-10; 		// Sq Size
h=w;	r=0;	a=0;			// Sq X

window.onload = load;			
function load()				// Reset variables		
{	score = 1; 	time = 10;	start = "no"; a=0;	drawCanvas();
	document.getElementById("header").style.fontSize=w/6+1+"px";
	if (navigator.platform = "Win32")	{ sp = "&emsp; &emsp; &ensp;"; }
	else					{ sp = "&ensp;"; }
	document.getElementById("header").innerHTML="Time: "+time+sp+" Click $ "+sp+" Score: "+score;
	document.getElementById("footer").innerHTML="";
	document.getElementById("canvas").addEventListener("mousedown", onMouseDown);
}					// Initial Click $ Header
	
function onMouseDown(event)		// Mouse ClickXY
{	x = event.clientX; y = event.clientY;
	console.log("(",x,", ", y, ")");
	if (time >0)	{sqClicked();	refresh();}
}

function sqClicked()			// Detect Sq clicked
{  if	(x < 10)	{ sq = 0; }	// Canvas starts 10 pixels on x
else if	(x < 10+w)	{ sq = 1; }
else if	(x < 10+2*w)	{ sq = 2; }
else if	(x < 10+3*w)	{ sq = 3; }
else			{ sq = 0; }
if	(y < 60)	{ sq = 0; }	// Canvas starts 60 pixels on y
else if	(y < 60+h)	{	}
else if (y < 60+2*h)	{ sq += 3; }
else if (y < 60+3*h)	{ sq += 6; }
else			{ sq = 0;  }
}

function onKeyPress()
{	sq = parseInt(String.fromCharCode(event.charCode));
	console.log("ID: ", event.charCode);
	if 	(sq<4) sq+=6;
	else if	(sq>6) sq-=6;
	refresh();	
}

function refresh()
{ 	if (start == "no")
	{	setTimer = setInterval(function(){HeadFoot()},1000);
		start = "yes";
	}	drawCanvas();
}

function HeadFoot()
{	if (time >= 1)
	{	time -= 1;				// Countdown	Update Header
		if (score >= 10)	{ document.getElementById("header").style.fontSize=w/6-0.5+"px"; }
		document.getElementById("header").innerHTML="Time: "+time+sp+"&ensp; Click $ "+sp+" Score: "+score;
	}	else
	{	time = 0;				// Stop Clock	Generate Footer
		window.clearTimeout(setTimer);
		document.getElementById("header").style.fontSize=w/6-1.25+"px";
		document.getElementById("footer").style.fontSize=w/6+1+"px";
		link = "<a href=http://topscores.herokuapp.com>Top Scores</a>";
		document.getElementById("header").innerHTML=link+sp+"Click $"+sp+"Score: "+score;
		document.getElementById("footer").innerHTML="GAME OVER! ".fontcolor("red")
		+sp+sp+"&emsp;Restart?".fontcolor("green");
	  // AJAX
	  var xhr = new XMLHttpRequest();
	  xhr.onreadystatechange=function()
	  { if (xhr.readyState==4 && xhr.status==200)	
	    { document.getElementById("footer").innerHTML=xmr.responseText; }
	  } 
	  var un = prompt("Please enter your name");
	  if (un != null && un != "")
	  { var url = "http://topscores.herokuapp.com?un="+un+"&s="+score;
	    xhr.open("GET",url,true);	// faster than POST
	    xhr.send(); 
	  }
	}
}

function drawCanvas()		// Create HTML5 Canvas 
{	var canvas = document.getElementById("canvas");
	canvas.width =  w*3 	
	canvas.height = h*3 	
	var ctx = canvas.getContext("2d");
	
ctx.fillStyle = "White";	// White background
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.fillStyle = "Black";	// Black squares
ctx.fillRect(0,0,w,h);
ctx.fillRect(2*w,0,w,h);
ctx.fillRect(w,h,w,h);
ctx.fillRect(0,2*h,w,h);
ctx.fillRect(2*w,2*h,w,h);

if	(r == sq && time != 0)		{ score += 1; }		// Update score
else if (time != 0 && score > 0)	{ score -= 1; }
var path=[3,2,1,4,5,6,9,8,7];
if 	(time != 0 && a < 10)	{ r = path[a]; a++; }		// path
if 	(time != 0 && a > 9)	{ r = Math.round(Math.random() * 8) + 1; }

ctx.fillStyle = "Red";		// Draw $
ctx.font = w/2+"px Arial";
i=w/3; j=h*2/3;			// Offset Sq Center
if (r == 1) ctx.fillText("$",i,j);
if (r == 2) ctx.fillText("$",i+w,j);
if (r == 3) ctx.fillText("$",i+2*w,j);
if (r == 4) ctx.fillText("$",i,j+h);
if (r == 5) ctx.fillText("$",i+w,j+h);
if (r == 6) ctx.fillText("$",i+2*w,j+h);
if (r == 7) ctx.fillText("$",i,j+2*h);
if (r == 8) ctx.fillText("$",i+w,j+2*h);
if (r == 9) ctx.fillText("$",i+2*w,j+2*h);
if (time < 10)	{ document.getElementById("header").innerHTML="Time: "+time+sp+"&ensp; Click $ "+sp+" Score: "+score; }
else		{ document.getElementById("header").innerHTML="Time: "+time+sp+" Click $ "+sp+" Score: "+score; }
}
