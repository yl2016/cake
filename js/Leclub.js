var position=[
		  {x:-240,z:-200},
		  {x:-120,z:-100},
		  {x:0,z:100},
		  {x:100,z:-100},
		  {x:220,z:-200}
		  ];
	  var position1=[
	  {x:-240,z:-200},
	  {x:-120,z:-100},
	  {x:0,z:100},
	  {x:100,z:-100},
	  {x:220,z:-200}
	  ];
		/*about页的木马转动**/
		function picShow(){ 
		  var div=document.getElementById('container');
		  var imgs=Array.prototype.slice.call(div.getElementsByTagName('img'),0);
		  for(var i=0;i<imgs.length-1;i++){
		      position1[i].x=position[i+1].x;
		      position1[i].z=position[i+1].z;
		      imgs[i].style.transform='translateX('+position[i+1].x+'px) translateZ('+position[i+1].z+'px)';
		  }
		  imgs[position.length-1].style.transform='translateX('+position[0].x+'px) translateZ('+position[0].z+'px)';
		  position1[4].x=position[0].x;
		  position1[4].z=position[0].z;
		  for(var i=0;i<position.length;i++){
		      position[i].x=position1[i].x;
		      position[i].z=position1[i].z;
		  }
		}
	// window.onload=function(){
	// 	setInterval(picShow,2000);
	// }