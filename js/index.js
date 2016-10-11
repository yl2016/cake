        var divs=null;
		var spans=null;
		var current=0;
		var timer;
		function autoplay(){
			var banner=document.getElementsByClassName("banner")[0];
			var btn=document.getElementById("btn");
			spans=Array.prototype.slice.call(btn.getElementsByTagName("span"),0);
			divs=Array.prototype.slice.call(banner.getElementsByClassName("bpic"),0);
			function change(){
				if(divs[current].className=="bpic show"){
					divs[current].className="bpic";
					spans[current].className="";
				}
				current=current+1>divs.length-1?0:current+1;
				divs[current].className="bpic show";
				spans[current].className="btn_span";
			}
			timer=setInterval(change,2000);
			for(var i=0;i<spans.length;i++){
				spans[i].index=i;
				spans[i].onmouseover=function(){
					clearInterval(timer);
					for(var j=0;j<spans.length;j++){
						spans[j].className="";
						divs[j].className="bpic";
					}
					this.className="btn_span";
					divs[this.index].className="bpic show";
					current=this.index;
					
				}
				spans[i].onmouseout=function(){
					timer=setInterval(change,2000);
				}
			}
		}
		window.onload=function(){
			autoplay();
		}