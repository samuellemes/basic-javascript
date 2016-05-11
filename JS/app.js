function addTitles() {
    for(var level = 1; level < 7; level++) {
        var title = createTitle(level, 'Title Level ' + level);
        document.body.appendChild(title);
    }
}

function createTitle(level, text){
    var title = document.createElement('h' + level);
    title.innerHTML = text;
    return title;
}

//init
addTitles();