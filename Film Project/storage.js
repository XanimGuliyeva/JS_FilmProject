function Storage(){

}

Storage.prototype.addFilmToStorage = function(newfilm){
    let films = this.getFilmsFromSTorage();
    films.push(newfilm);
    localStorage.setItem("films",JSON.stringify(films));
}

Storage.prototype.getFilmsFromSTorage = function()  {
    let films;

    if(localStorage.getItem("films") === null){
        films = [];
    }
    else{
        films = JSON.parse(localStorage.getItem("films"));

    }
    return films;
}

Storage.prototype.deleteFilmFromUI = function(filmTitle){

    let films = this.getFilmsFromSTorage()

    films.forEach(function(film,index){
        if(film.title === filmTitle){
            films.splice(index,1);
        }
    });
    localStorage.setItem("films",JSON.stringify(films))
}

storage.prototype.deleteAllFilmsFromStorage = function(){
    localStorage.removeItem("films");
}