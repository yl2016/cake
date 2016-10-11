function menu(){
	var menue=document.getElementById("menue");
	var oSpan=menue.getElementsByTagName('span');
	var oDiv=menue.getElementsByTagName('div');
	for(var i=0;i<oSpan.length;i++){
		(function(x){
			oSpan[x].onclick=function(){
				for(var j=0;j<oSpan.length;j++){
					oSpan[j].className="la";
					oDiv[j].className="shou";
				}
				oSpan[x].className+=" active";
				oDiv[x].className+=" toshow";
			}
		})(i);
	}

};

