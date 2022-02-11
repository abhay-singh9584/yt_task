var myVideo = document.getElementById("video1"); 
var plpu = document.getElementById("plpu"); 
var arr=['./xyz.mp4','./flower.mp4','./butterfly.mp4','./fish.mp4','./honey_bee.mp4','./sunrise.mp4'] //These are playlist video

// console.log(x[x.length-1]);

function f1(){                                     //This Function is for playlist
    var bh=document.querySelector('#lpo')
    var x=bh.src.split('/')
    var temp=""
    arr.forEach(function(i,index){
        console.log(x);
        if(x[x.length-1]!==i.slice(2,i.length)){
            // console.log(i);
            temp+=`
            <div onClick="clickHandler('${i}')" class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
            <div class="col-md-4">
            <video class='img-fluid rounded-start' onClick="clickHandler('${i}')" src=${i} height="300"></video>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">${i.slice(2,i.length)}</h5>
                </div>
            </div>
            </div>
        </div>`
        }
    document.querySelector("#playlist").innerHTML=temp
    })
}
f1 ()

function clickHandler(i){         //This function is to play video from the playlist
    console.log(i)
    temp=`<video id="video1" width="850">
    <source id='lpo' src=${i} type="video/mp4">
    </video>
    <h3>${i.slice(2,i.length-4)}</h3>`
    document.querySelector('.vplay').innerHTML=temp
    myVideo = document.getElementById("video1")
    plpu.className='ri-play-fill'
    f1 ()
}

function playPause() {          //This function is to play/pause the video
    if (myVideo.paused) {
        myVideo.play(); 
        plpu.className='ri-pause-mini-fill'
    }
    else {

        myVideo.pause(); 
        plpu.className='ri-play-fill'
    }

} 

function fastfor(){             //This function is to fast forward the playing video
myVideo.playbackRate = myVideo.playbackRate*1.5;
}

// function slowdown(){            
//     myVideo.playbackRate = myVideo.playbackRate*0.5
// }

function restart(){      //this function is to restart the playing video
    myVideo.load()
    myVideo.play(); 
}