const position=document.querySelectorAll('#pos');
var count=0;
position.forEach(e => {
    e.addEventListener('click',function(){
        count++;
        if(count%2==0){
            if(e.innerHTML){

            }
            else{
                e.innerHTML='<i class="fab fa-opera fa-2x"></i>';
            }
           
        }
        else{
            if(e.innerHTML){

            }
            else{
                e.innerHTML='<i class="fas fa-times fa-2x"></i>';
            }
            
        }
        console.log(count);
    })
});