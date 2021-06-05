window.onload = function(){
    document.getElementById('menulink').onclick = function(){
        var menu = document.getElementById('menu');
        if(menu.className != 'shownmenu'){
            menu.className = 'shownmenu';
        }
        else {
            menu.className = 'hiddenmenu';
        }
    }
}

function check_web_storage_support() {
    if(typeof(Storage) !== "undefined") {
        return(true);
    }
    else {
        alert("Web storage undefined!");
        return(false);
    }
}


function display_saved_note(){
    if(check_web_storage_support() == true){
        result = localStorage.getItem('note');
    }
    if(result === null) {
        result = "No Note Saved.";
    }
    document.getElementById('area').value = result;
}

function save() {
    if(check_web_storage_support() == true){
        var area = document.getElementById("area");
        if(area.value != '') {
            localStorage.setItem("note", area.value);
        }
        else {
            alert ("Nothing To Save");
        }
    }
}

function clear(){
    document.getElementById('area').value = "";
}