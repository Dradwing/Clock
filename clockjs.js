	
			function timeshow(){
			var date=new Date();
			var h=date.getHours();
			var m=date.getMinutes();
			var s=date.getSeconds();
			var session="AM"
			if(h==0)
				h=12;
			if(h>12)
				{h=h-12;session="PM"}

			if(h<10)
				h="0"+h;
			if(m<10)
				m="0"+m;
			if(s<10)
				s="0"+s;			var time=h+':'+m+':'+s+' '+session;
			
			var d=date.toDateString();
			var hrotation=h*30+m/2;
			var mrotation=m*6;
			var srotation=s*6;
			hour.style.transform=`rotate(${hrotation}deg)`;
			minute.style.transform=`rotate(${mrotation}deg)`;
			second.style.transform=`rotate(${srotation}deg)`;
			document.querySelector("#date").innerText=d;
			document.querySelector("#time").innerText=time;
		}    
		    timeshow();
			setInterval(timeshow,100);
		