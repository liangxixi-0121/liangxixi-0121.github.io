//获取图片标签
		 	 var items= document.getElementsByClassName('item'); /*1.wrap图片列表获取*/
		   var points = document.getElementsByClassName('point');  /*2.获取点列表*/
		 	 var goPreBtn = document.getElementById('goPre'); /*3.按扭获取*/
		   var goNextBtn  = document.getElementById('goNext');  /*4.按扭获取*/
		  
		   var time = 0; //定时器图片跳转参数
		  
		   var index = 0; /*index表示第几张图片在展示 -- 第index张图片有active这个类名*/  
		  
		   var clearActive = function(){   /*items列表长度*/
		   	   for(var i = 0; i < items.length;  i++){
		   		    items[i].className = 'item';
		   		 }
		   		 for(var i = 0; i < points.length; i++){  /*点列表*/
		   		 	  points[i].className = 'point'; 
		   	   }
		   		 
		   		
		   		 
		   }
		  
		   var goIndex = function(){    /*active类名的跳转*/
		   	   clearActive();        /*先把全部active去掉*/
		   	   points[index].className = 'point active';
		   	   items[index].className = 'item active';
		   }
		  /*事件一*/
		  var goNext = function(){
		  	if(index < 2){
		  		index++;
		  	}else{
		  		index=0;   /*回到0第一张再执行goIndex*/
		  	} 
		  	   goIndex(); /*自动执行下一张*/ 
		  }
		  /*事件二*/
		  var goPre =function(){
		  	if(index == 0){
		  		index = 2;
		  	}else{
		  		index --;
		  	}
		  	goIndex();
		  }
		  
		  goNextBtn.addEventListener('click',function(){  /*执行下一张事件*/
		  	  goNext();
		  })
		  
		  goPreBtn.addEventListener('click',function(){  /*去上一张事件*/
		  	 goPre();
		  })
		  
		   //每个点挂上事件 每点一个跳转 ,位置在最后
		       for(var i = 0; i < points.length; i++){
		       	 points[i].addEventListener('click',function(){
		       	 	  var pointIndex = this.getAttribute('data-index');
		       	 	  index = pointIndex;
		       	 	  goIndex();
		       	 	  time =0;  //定时器图片跳转参数
		       	 })
		       }
		 
		      //定时器自动轮播
		      /*获取容器*/

/*设置定时器图片控件*/
setInterval(function(){
	time++;
	if(time == 20){  //20*100=2000毫秒
		goNext();
		time = 0;
	 }
	},100);
				