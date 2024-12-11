let songIndex = 0;
let audioElement = new Audio('content/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let forward = document.getElementById('forward');

let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs=[
    {songName: "..Dekha tenu pahli pahli..",size:"03:10", filepath:"content/1.mp3",coverpath: "content/mahi.png"},
    {songName: "..Khaab..",size:"03:39", filepath:"content/2.mp3",coverpath: "content/khaab(cover).png"},
    {songName: "..Tu mileya..",size:"05:52", filepath:"content/3.mp3",coverpath: "content/tu mileya.png"},
    {songName: "..Lofi lovee..",size:"03:42", filepath:"content/4.mp3",coverpath: "content/lofi lovee(cover).png"},
    {songName: "..Dil besabar..",size:"03:10", filepath:"content/5.mp3",coverpath: "content/dil besabar.png"},
    {songName: "..Dil tu jaan tu..",size:"03:17", filepath:"content/6.mp3",coverpath: "content/dil tujaan tu(cover).png"},
    {songName: "..Senorita (instrumental)..",size:"03:13", filepath:"content/7.mp3",coverpath: "content/senorita-i(cover).png"},
    {songName: "..Senorita..",size:"03:25", filepath:"content/8.mp3",coverpath: "content/senorita(cover).png"},
    {songName: "..Blue sky..",size:"03:53", filepath:"content/9.mp3",coverpath: "content/1.jpg"},
    {songName: "..Mi amor..",size:"03:23", filepath:"content/10.mp3",coverpath: "content/mi.png"},
]


songItems.forEach((element, i)=> {
  /*  console.log(element, i);  */
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
}) 
// hardle play/ pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
    
})


//audioElement.play();
audioElement.addEventListener('timeupdate', () =>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
   // console.log(progress);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.addEventListener('click', (e) =>{
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `content/${index+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        refresh.innerText = songs[index].songName;
        right.innerText = songs[index].size;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `content/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    refresh.innerText = songs[songIndex].songName;
    right.innerText = songs[songIndex].size;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<0){
        songIndex = 9;

    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `content/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    refresh.innerText = songs[songIndex].songName;
    right.innerText = songs[songIndex].size;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})