const play_btn=document.querySelector('.play');
const myvideo=document.querySelector('.myvideo');
const progress=document.querySelector('.progress');
const mute=document.querySelector('.mute');
const inputRange=document.querySelector('#inputRange');
const inputValue=document.querySelector('#rangeValue');

play_btn.addEventListener('click',function(){
    if(myvideo.paused===true){
        play_btn.innerHTML='<i class="far fa-pause-circle fa-2x"></i>'
        myvideo.play(); 
    }
    else{
        play_btn.innerHTML='<i class="far fa-play-circle fa-2x"></i>'
        myvideo.pause();
    }

    
   
})
    myvideo.addEventListener('timeupdate',function(){
        progress.style.width=myvideo.currentTime/myvideo.duration*100+'%';
        if(myvideo.ended){
            play_btn.innerHTML='<i class="far fa-play-circle fa-2x"></i>'
        }
    })
// mute funtion
mute.addEventListener('click',function(){
    if(myvideo.muted){
        mute.innerHTML='<i class="fas fa-volume-up">';
        myvideo.muted=false;
    }
    else{
        mute.innerHTML='<i class="fas fa-volume-mute">'
        myvideo.muted=true;
    }

    
})
inputRange.addEventListener('touchmove',function(){
    inputValue.innerText=inputRange.value;
    myvideo.volume=inputRange.value/100;
})
inputRange.addEventListener('click',function(){
    inputValue.innerText=inputRange.value;
    myvideo.volume=inputRange.value/100;
})
// playback controls

const slowB=document.querySelector('.slowbackward');
const fastB=document.querySelector('.fastforward');
const forward=document.querySelector('.forward');
const backward=document.querySelector('.backward');
const fullscreen=document.querySelector('.fullscr');
slowB.addEventListener('mousedown',function(){
    myvideo.playbackRate=0.7;
})
slowB.addEventListener('mouseup',function(){
    myvideo.playbackRate=1.0;
})
fastB.addEventListener('mousedown',function(){
    myvideo.playbackRate+=1.3;
})
fastB.addEventListener('mouseup',function(){
    myvideo.playbackRate=1.0;
})
// fullscreen
fullscreen.addEventListener('click',function(){
   getfullscreen();
   myvideo.removeAttribute('controls');
})
function getfullscreen(){
    myvideo.requestFullscreen();
}