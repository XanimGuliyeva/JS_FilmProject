const form = document.getElementById("film-form");
const titleElement =  document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear  = document.getElementById("clear-films");

//UI object
const ui = new UI();
//Storage
const storage = new Storage();


eventListener();

function eventListener(){
    form.addEventListener("submit",addForm);

    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromSTorage();
        ui.loadAllFilms(films);
    });

    cardBody.addEventListener("click",deleteFilm);

    clear.addEventListener("click",clearAllFilms)
}

function addForm(e){
    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;
    if(title === '' || director === '' || url === ''){
        ui.displayMessage("Hamisini doldur","danger")
    }
    else{
        //New Film
        const newfilm =  new Film(title,director,url);
        ui.addFilmToUI(newfilm) //UI film adding
        storage.addFilmToStorage(newfilm);
        ui.displayMessage("Ela","success");
        
    }

    ui.clearInputs(titleElement,directorElement,urlElement);
    e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromUI(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessage("Basarili silinme",success);
    }

}

function clearAllFilms(){
    if(confirm("Emin misiniz?")){
        ui.deleteAllFilmsFromUI();
        storage.deleteAllFilmsFromStorage();
    }

}