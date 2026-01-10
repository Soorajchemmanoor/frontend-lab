const api  = "https://www.omdbapi.com/?apikey=61e576a4&t=";

let searchIn = document.querySelector('#searchIn');
let searchBtn = document.querySelector('#searchBtn');
let movieContainer = document.querySelector('#movieContainer');
let movieNotFoundContainer = document.querySelector('#movieNotFoundContainer');
let movieSearch = document.querySelector('#movieSearch');

let poster = document.querySelector('#poster');
let title = document.querySelector('#title');
let description = document.querySelector('#description');
let rating = document.querySelector('#rating');
let genre = document.querySelector('#genre');
let director = document.querySelector('#director');
let actors = document.querySelector('#actors');
let writer = document.querySelector('#writer');
let awards = document.querySelector('#awards');
let lang = document.querySelector('#lang');
let released = document.querySelector('#released');
let collection = document.querySelector('#collection');

searchBtn.addEventListener('click', (e)=>{

    let movieName = searchIn.value;
    let query = api+movieName;
    fetch(query).then(data=>data.json()).then( (data)=>{
        
        if(data.Error != 'Movie not found!')
        {
            movieContainer.classList.remove('hidden')
            movieNotFoundContainer.classList.add('hidden');

            poster.src = data.Poster;
            title.innerText = data.Title;
            description.innerText = data.Plot;
            rating.innerText = data.imdbRating;
            genre.innerText = data.Genre;
            director.innerText = data.Director;
            actors.innerText = data.Actors;
            writer.innerText = data.Writer;
            awards.innerText = data.Awards;
            lang.innerText = data.Language;
            released.innerText = data.Released;
            collection.innerText = data.BoxOffice;

        }
        else{
            movieContainer.classList.add('hidden')
            movieNotFoundContainer.classList.remove('hidden');

            movieSearch.innerText = movieName;
        }

    } );
    


});
