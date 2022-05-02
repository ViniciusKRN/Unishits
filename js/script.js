const container = document.querySelector(".container"),
musicImg = container.querySelector(".img-area img"),
musicNome = container.querySelector(".song-details .nome"),
musicArtista = container.querySelector(".song-details .artista");
musicAudio = container.querySelector("#main-audio");


let musicIndex = 1;

window.addEventListener("load", ()=>{
    loadMusic(musicIndex);
})

function loadMusic(indexNumb){
    musicNome.innerText = allMusic[indexNumb -1 ].nome;
    musicArtista.innerText = allMusic[indexNumb - 1].artista;
}



