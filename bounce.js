var y_velocity = new Array(100);
var y = new Array(100);
var x = new Array(100);
var x_velocity = new Array(100);
var noc=0, fraction=0.95;

addEventListener("click", draw, true);
setInterval(loop, 10);
setInterval(loop2, 10);

function draw(e)
{
	var cursorX = e.pageX;
	var cursorY = e.pageY;
	
	var newDiv = document.createElement("div");
	document.getElementById("bounce").appendChild(newDiv);
	newDiv.setAttribute("class", "circle");
	y[noc] =cursorY-56;
	var t =y[noc]+"px";
	newDiv.style.setProperty("top", t);
	x[noc] =cursorX-257;
	var tt =x[noc]+"px";
	newDiv.style.setProperty("left", tt);
	var u="c"+noc;
	newDiv.setAttribute("id",u);
	y_velocity[noc]=0;
	var random_velocity = Math.floor(Math.random()*5)+1;
	x_velocity[noc]=random_velocity;
	
	noc++;
}

function loop()
{
		for (var n=0; n<noc; n++)
		{
			var tt ="c"+n;
			var d = document.getElementById(tt);
			if (y[n]>=440) 
			{
				y_velocity[n]*=-0.7;
				y[n]=440;
			}
			y[n]+=y_velocity[n];
			y_velocity[n]+=0.1;
			var ddd = y[n]+"px";
			d.style.setProperty("top", ddd);
		}
}

function loop2()
{
		for (var n=0; n<noc; n++)
		{
			var tt ="c"+n;
			var d = document.getElementById(tt);
			x[n]+=x_velocity[n];
			if(x[n]>695 || x[n]<0){x_velocity[n]*=-1;}
			x_velocity[n]*=0.999;
			var pp = x[n]+"px";
			d.style.setProperty("left", pp);
		}
}




