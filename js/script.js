var video=document.querySelector('#video');

//botones
var play=document.querySelector('#play');
var stop=document.querySelector('#stop');
var back=document.querySelector('#back');
var forward=document.querySelector('#forward');
var mute=document.querySelector('#mute');
var fullscreen=document.querySelector('#fullscreen');
var reproductor=document.querySelector('#reproductor');

//indicadores
var sonido=document.querySelector('#sonido');
var tiempo=document.querySelector('#tiempo');
var progressBar=document.querySelector('#progressBar');


video.addEventListener('click',()=>{
    if(video.paused){
        video.play();
        play.innerHTML='<span class="icon-pause2"></span>';
    }else{
        video.pause();
        play.innerHTML='<span class="icon-play3"></span>';
    }
})

video.addEventListener('pause',()=>{
    play.innerHTML='<span class="icon-play3"></span>';
})

video.addEventListener('play',()=>{
    play.innerHTML='<span class="icon-pause2"></span>';
})

video.addEventListener('volumechange',()=>{
    if(video.volume==0){
        mute.innerHTML='<span class="icon-volume-mute2"></span>';
        sonido.innerHTML='OFF';
    }else{
        mute.innerHTML='<span class="icon-volume-medium"></span>'
        sonido.innerHTML='ON';
    }
})

play.addEventListener('click',()=>{
    if(video.paused){
        video.play();
        play.innerHTML='<span class="icon-pause2"></span>';
    }else{
        video.pause();
        play.innerHTML='<span class="icon-play3"></span>';
    }
})


stop.addEventListener('click',()=>{
    video.currentTime=0;
    video.pause();
    play.innerHTML='<span class="icon-play3"></span>';
    //console.log('stop');
})


back.addEventListener('click',()=>{
    video.currentTime-=10;
    actualizarIndicadoresTiempo();
    //console.log('back');
})


forward.addEventListener('click',()=>{
    video.currentTime+=10;
    actualizarIndicadoresTiempo();
    //console.log('forward');
})


mute.addEventListener('click',()=>{
    if(video.volume==0){
        video.volume=1;
        mute.innerHTML='<span class="icon-volume-medium"></span>'
        sonido.innerHTML='ON';
    }else{
        video.volume=0;
        mute.innerHTML='<span class="icon-volume-mute2"></span>';
        sonido.innerHTML='OFF';
    }
})

fullscreen.addEventListener('click', ()=>{
    reproductor.requestFullscreen();
});

progressBar.addEventListener('click', function (e) {
    var x = e.pageX - this.offsetLeft
    var clickedValue = x * this.max / this.offsetWidth;
    video.currentTime= Math.trunc(clickedValue * video.duration /100)
    //console.log(clickedValue);
});


video.addEventListener('timeupdate',()=>{
    actualizarIndicadoresTiempo();
},false)


function actualizarIndicadoresTiempo(){
    segundos=Math.trunc(video.currentTime)
    var minutos = Math.trunc(segundos/60);
    minutos = (minutos<10)?"0"+minutos:minutos;
    var segundos = segundos % 60;
    segundos = (segundos<10)?"0"+segundos:segundos;
    tiempo.innerHTML= minutos +":"+ segundos;
    progressBar.setAttribute('value', Math.trunc((video.currentTime/video.duration)*100) );	 
   }

