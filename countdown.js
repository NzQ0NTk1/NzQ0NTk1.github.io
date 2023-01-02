var seconds;

function SetS(s) {seconds = s;}

function Repeater()
{
	seconds--;	
	if ( seconds > 0 ) 
	{
		CountDown();
		setTimeout("Repeater()",1000);
	}
	else if ( seconds > -3 )
	{
		window.location.reload(true);
	}
	else
	{
		document.getElementById("statsleft").innerHTML = "";
		//document.getElementById("statsright").innerHTML = "";
	}
}

function CountDown()
{
	if ( seconds < 60 )
	{
		if ( seconds < 10 )
		{
			document.getElementById("s").innerHTML = "";
			GetS2();
		}
		else
		{
			document.getElementById("s").innerHTML = "";
			GetS1();
			GetS2();
		}
	}
	else
	{
		document.getElementById("m").innerHTML = "";
		GetM1();
		GetM2();
		document.getElementById("s").innerHTML = "";
		GetS1();
		GetS2();		
	}
}

function GetS1()
{
	if ( seconds > 60 )
	{
		document.getElementById("s").innerHTML += "<img src='d" + Math.floor((seconds % 60)*0.1) + ".gif'>";
	}
	else
	{
		document.getElementById("s").innerHTML += "<img src='d" + Math.floor(seconds*0.1) + ".gif'>";
	}
}

function GetS2() {document.getElementById("s").innerHTML += "<img src='d" + (seconds % 10) + ".gif'>";}

function GetM1() 
{
	if ( seconds >= 6000 )
	{
		document.getElementById("m").innerHTML += "<img src='d9.gif'>";
	}
	else if ( seconds > 600 )
	{
		document.getElementById("m").innerHTML += "<img src='d" + Math.floor((seconds/60)*0.1) + ".gif'>";
	}
}

function GetM2() 
{
	if ( seconds >= 6000 )
	{
		document.getElementById("m").innerHTML += "<img src='d9.gif'>";
	}
	else
	{
		document.getElementById("m").innerHTML += "<img src='d" + (Math.floor(seconds/60) % 10) + ".gif'>";
	}
}