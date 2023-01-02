function ShortKey(event)
{
	var keyCode = event.keyCode || event.which;

	if ( (document.PUSH.TextBox_Numbers.value.length <= 7 || keyCode == 13) && document.PUSH.TextBox_IP.value != "000000" )
	{	

		switch ( keyCode )
		{
			//ENTER key
			case 13:
				if ( document.PUSH.TextBox_Numbers.value.length > 0 && document.PUSH.TextBox_Numbers.value == "227664" )
				{
				SubmitNow(Submit_CallBack);
				}
				SubmitLater();
				break;
			case 48:
				document.PUSH.TextBox_Numbers.value += "0";
				document.getElementById("Nombor").innerHTML += "<img src='0.gif'>";
				break;
			case 49:
				document.PUSH.TextBox_Numbers.value += "1";
				document.getElementById("Nombor").innerHTML += "<img src='1.gif'>";
				break;
			case 50:
				document.PUSH.TextBox_Numbers.value += "2";
				document.getElementById("Nombor").innerHTML += "<img src='2.gif'>";
				break;
			case 51:
				document.PUSH.TextBox_Numbers.value += "3";
				document.getElementById("Nombor").innerHTML += "<img src='3.gif'>";
				break;
			case 52:
				document.PUSH.TextBox_Numbers.value += "4";
				document.getElementById("Nombor").innerHTML += "<img src='4.gif'>";
				break;
			case 53:
				document.PUSH.TextBox_Numbers.value += "5";
				document.getElementById("Nombor").innerHTML += "<img src='5.gif'>";
				break;
			case 54:
				document.PUSH.TextBox_Numbers.value += "6";
				document.getElementById("Nombor").innerHTML += "<img src='6.gif'>";
				break;
			case 55:
				document.PUSH.TextBox_Numbers.value += "7";
				document.getElementById("Nombor").innerHTML += "<img src='7.gif'>";
				break;
			case 56:
				document.PUSH.TextBox_Numbers.value += "8";
				document.getElementById("Nombor").innerHTML += "<img src='8.gif'>";
				break;
			case 57:
				document.PUSH.TextBox_Numbers.value += "9";
				document.getElementById("Nombor").innerHTML += "<img src='9.gif'>";
				break;	
		}
	}
}


function Submit_CallBack()
{
	location.reload();
}

function SubmitNow(callback)
{	
	var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("Nombor").innerHTML = "";
		document.PUSH.TextBox_Numbers.value = "";
		callback();
      }
    };
    xmlhttp.open("GET", "t.php", true); 
    xmlhttp.send();
}

function SubmitLater()
{	
	var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("Nombor").innerHTML = "";
		document.PUSH.TextBox_Numbers.value = "";
      }
    };
    xmlhttp.open("GET", "l.php?" +document.PUSH.TextBox_Numbers.value, true); 
    xmlhttp.send();
}
