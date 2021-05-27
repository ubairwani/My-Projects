const screenInput=document.querySelector('#screenInput');
const btns=document.querySelectorAll('#btns');
const ops=document.querySelectorAll('.operator')
let buttonText='';
let screenvalue='';
btns.forEach(e=>{
    e.addEventListener('click',function(btn){
        buttonText=btn.target.innerText;
        
        if(buttonText=='Off'){
            screenvalue='';
            screenInput.value=screenvalue;
            
    }
        else if(buttonText==='='){
            console.log(true);
            screenInput.value=eval(screenvalue);
        }
       else if(buttonText=='C'){
            screenvalue='';
            screenInput.value=screenvalue;
        }
        else if(buttonText=='AC'){
            screenvalue='';
            screenInput.value=screenvalue;
        }
        else if(buttonText=='%'){
            let percent=eval(screenvalue);
            console.log(percent);
            screenInput.value=percent*100;
            alert('this is decimal to percentage ')
        }
        else if(buttonText=='r'){
            let root;
            if(screenvalue){
                root=eval(screenvalue);
                console.log(root);
                screenInput.value=Math.sqrt(root);
            }
           
        }
        else{
            screenvalue+=buttonText;
            screenInput.value=screenvalue;
        }
       
    })
})