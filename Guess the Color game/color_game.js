var c1=c2=c3=c4=0;
var score=0;
// var bestscore=0;
var hex='#';
var copyHex;
var count=0;
var BestScore=0,currentScore=0;
const scoreValue=document.querySelector('.score_value');




const nextBtn=document.querySelector('.next');
nextBtn.addEventListener('click',function(){
   

var hex1='#';
var hex2='#';
var hex3='#';
var hex4='#';
    // generating random hex color
 const color=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];


const color_box=document.querySelector('.color1');
const hex_value=document.querySelector('#hex_value');



    // var hex='#';
for(let i=0;i<6;i++){
    hex+=color[Math.floor(Math.random() * color.length)];
    
}
console.log(hex);

hex_value.textContent=hex;


function color1(){
    
for(let i=0;i<6;i++){
    hex1+=color[Math.floor(Math.random() * color.length)];
    
    
}
   
   
}
color1();
// })
console.log(hex1);
color_box.style.backgroundColor=hex1;
c1=hex1;
// color_box.addEventListner('click',function(){
// 

function color2(){
    
for(let i=0;i<6;i++){
    hex2+=color[Math.floor(Math.random() * color.length)];
    
    
}
   
   
}
color2();
const colorbox1=document.querySelector('.color2');
colorbox1.style.backgroundColor=hex2;
c2=hex2;

function color3(){
    
    for(let i=0;i<6;i++){
        hex3+=color[Math.floor(Math.random() * color.length)];
        
        
    }


    }   
    color3();
    const colorbox2=document.querySelector('.color3');
    colorbox2.style.backgroundColor=hex3;
    c3=hex3;
    
function color4(){
    
    for(let i=0;i<6;i++){
        hex4+=color[Math.floor(Math.random() * color.length)];
        
        
    }
       
       
    }
    color4();
    const colorbox3=document.querySelector('.color4');
    colorbox3.style.backgroundColor=hex4;
    c4=hex4;

    let hexRotate=[color_box,colorbox1,colorbox2,colorbox3];
    function colorDecide(){
        let randomNum=Math.floor(Math.random() * hexRotate.length);
        console.log(randomNum);
        hexRotate[randomNum].style.backgroundColor=hex;
        if(randomNum==0){
            c1=hex;
        }
        else if(randomNum==1){
            c2=hex;
        }
        else if(randomNum==2){
            c3=hex;
        }
        else if(randomNum==3){
            c4=hex;
        }
    }
    
    colorDecide();
    copyHex=hex;
    hex='#';
   
    // get heigest score
    localStorage.setItem('my_score',score);
    currentScore=  localStorage.setItem('my_score',score);
count++;
if(count>=1){
    nextBtn.textContent='Next';
}
// next btn

})
// storing in data in local storage

const level_value=document.querySelector('.level_value');
var BestScore=localStorage.getItem('my_score');
if(BestScore>currentScore){
    level_value.innerText=BestScore;
}
else{
    level_value.innerText=currentScore;
}


function check1(){
    console.log(c1 + hex);
      if(c1==copyHex){
          alert('succesfull matched');
          score++;
          scoreValue.innerText=score;
      }
      else{
          alert('incorrect')
          score--;
          scoreValue.innerText=score;
      }
}
function check2(){
    console.log(c2+hex);
    if(c2==copyHex){
        alert('succesfully matched')
        score++;
        scoreValue.innerText=score;
    }
    else {
        alert('incorrect')
        score--;
        scoreValue.innerText=score;
    }
}


function check3(){
    console.log(c3+hex);
  if(c3==copyHex){
      alert('succesfully matched')
      score++;
      scoreValue.innerText=score;
  }
  else {
      alert('incorrect')
      score--;
      scoreValue.innerText=score;
  }
}

function check4(){
  console.log(c4+hex);
  if(c4==copyHex){
      alert('succesfully matched')
      score++;
      scoreValue.innerText=score;
  }
  else {
      alert('incorrect')
      score--;
      scoreValue.innerText=score;
  }
}
// onload
var load=document.querySelector('.loading');
function showLoading(){
    // const container=document.querySelector('.container');
    load.style.display = 'none';
    console.log('completed');
    const container=document.querySelector('.container');
    container.style.display='flex';
}
console.log(load);