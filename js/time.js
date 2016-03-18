$(function(){
   	arise('.list b',10,0);
 	arise('.list p',-60,0);
 	arise('.list i',-14,0);
	function arise(obj,t,n){
	 	$(obj).eq(n).animate({top:t,'opacity':1},1000,function(){
	         n++;
	         if( $(obj).eq(n)){
	         	arise(obj,t,n);
	         }
   		 });
    }
  
	 
})