function start(){

	  var oDiv=document.getElementById('div2'),
	      oU=document.getElementById('div1'),
	      aLi=document.getElementsByTagName('li');

	  for(var i=0;i<aLi.length;i++){

	      if(i%2==1){
		       aLi[i].style.left=-aLi[i].offsetWidth+'px';
	      }

	      else{
		        aLi[i].style.left+=aLi[i].offsetWidth+'px';
	      }
	   }

	  oDiv.onclick=function(){
			var i=0;
			var timer=setInterval(function(){

	             starMove(aLi[i],{left:0,opacity:1000});
	                  i++;
	                  if(i==aLi.length){
			  	          clearInterval(timer);
			          }
			     },77);
	  };
			  //给Li加事件
	   for(var i=0;i<aLi.length;i++){

		  aLi[i].onclick=function(){

				var oSpan=document.getElementById('sp');
				var i=aLi.length-1;
				oSpan.innerHTML=this.children[0].innerHTML;

				var timer=setInterval(function(){

	                var left=i%2?-aLi[i].offsetWidth:aLi[i].offsetWidth;
	                 starMove(aLi[i],{left:left,opacity:0});
				     i--;
				     if(i==-1){
					   clearInterval(timer);
				     }
			     },70);
		  }
	    }

}

start();
