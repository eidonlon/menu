
function starMove(object,json,fnEnd)
 {
   clearInterval(object.timer);
   object.timer=setInterval(function(){
         var stop=true;
         for(var attr in json)
         {
           var curr=parseInt(getStyle(object,attr));
           var curr=0;
           if(attr=='opacity')
           {
            curr=Math.round(parseFloat(getStyle(object,attr)*100))
           }
           else
           {
            curr=parseInt(getStyle(object,attr));
           }
           var speed=(json[attr]-curr)/2;
           speed=speed>0?Math.ceil(speed):Math.floor(speed);
           if(curr!=json[attr])
           {
            stop=false;
           }
         
           if(attr=='opacity')
            {
                 object.style.filter='alpha(opacity:'+(curr+speed)+')';
                   object.style.opacity=(curr+speed)/100;
              
            }
           else
            {
               object.style[attr]=curr+speed+'px';
            }
             
          }
          if(stop)
          {
            clearInterval(object.timer);
            if(fnEnd)return fnEnd;
          }
   },30)
 }
 function getStyle (obj,name) {
   if(obj.currentStyle)
   {
      return obj.currentStyle[name];
   }
   else
   {
      return getComputedStyle(obj,false)[name];
   }
 }
