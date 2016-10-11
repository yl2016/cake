window.onload=function(){
		var oPrev=document.getElementById("prev");
		var oNext=document.getElementById("next");
		var oImg=document.getElementById("pic");
		var oBox=document.getElementsByClassName("box")[0];
		var aDiv=oBox.getElementsByTagName("div");
		// alert(aDiv.length);
		//点击
		var num=0;
		var aSrc=[
		'images/lunbo2.jpg',
		'images/lunbo3.jpg',
		'images/lunbo4.jpg',
		'images/lunbo5.jpg']
		var timer=null;
		var oUl=document.getElementById('children');
		var oli=oUl.getElementsByTagName('li');
		var odiv=document.getElementsByClassName('showi');
		for(var i=0;i<oli.length;i++){
			oli[i].index=i;
			oli[i].onclick=function(){
				for(var j=0;j<oli.length;j++){
					oli[j].className="";
					odiv[j].className="showi"
				}
				this.className="bgg";
				odiv[this.index].className="showi shows";	
			}
		}
	
		oPrev.onclick=function(){//点击左边事件
			clearInterval(timer);
			num--;
			if(num==-1){num=aSrc.length-1}
			modify();
			timer=setInterval(autoplay,2000);

		}
		oNext.onclick=function(){//点击右边事件
			clearInterval(timer);
			num++;
			if(num==aSrc.length){num=0}
			modify();
			timer=setInterval(autoplay,2000);
		}
		for(var i=0;i<aDiv.length;i++){//四个小圆
			aDiv[i].index=i;
			aDiv[i].onclick=function(){
				clearInterval(timer);
				num=this.index;
				modify();
				timer=setInterval(autoplay,2000);
			}
		}
		function modify(){
			oImg.src=aSrc[num];//改变图片路径
			for(var j=0;j<aDiv.length;j++){//变成小红点
				aDiv[j].className="circle"+j;	
			}
			aDiv[num].className+=" active";
		}
		function autoplay(){//自动播放
			num++;
			if(num==aSrc.length){num=0}
				modify();
		}
		timer=setInterval(autoplay,2000);//定时器：没1000ms(1s)调用一次autoplay（）函数
	}