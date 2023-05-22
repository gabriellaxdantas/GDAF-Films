$(document).ready(inicia);
const API_KEY = 'cbdd96bc30bc48336cc257305a0fc74c&language=pt-BR&region=BR';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

function inicia (){
    console.log("TESTE1");
    console.log(localStorage.getItem("id"));
    showMovies(localStorage.getItem("id"));
}
function showMovies(id){
    
    URL =`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
    
    fetch(URL)
    .then (res => res.json())
    .then (data =>{
        console.log(data);
       document.getElementById("poster").innerHTML=`<img class="fotoFilme" src="${data.poster_path? IMG_URL+data.poster_path: "http://via.placeholder.com" }">`
        $("#titulo").html("<strong></strong>"+data.title);
        $("#sinopse").html("<strong></strong>"+data.overview);
        $("#dataLancamento").html("<strong> DATA DE LANÇAMENTO: </strong>"+data.release_date);
        $("#subtitulo").html(" "+data.tagline);
       

    })
    
}
