const queryString = new Array();
let editMode = false;
let num = 0;

window.onload = function() {
    if (queryString.length == 0) {
        if (window.location.search.split('?').length > 1) {
            const params = window.location.search.split('?')[1].split('&');
            for (let i = 0; i < params.length; i++) {
                const key = params[i].split('=')[0];
                const value = decodeURIComponent(params[i].split('=')[1]);
                queryString[key] = value;
            }
        }
    }
    if (queryString.heading != null && queryString.author != null) {
        const { heading } = queryString;
        const { author } = queryString;
        const { content } = queryString;
        document.getElementsByClassName('heading-content')[0].innerHTML = heading;
        document.getElementsByClassName('author-name')[0].innerHTML = author;
        document.getElementsByClassName('post-content')[0].innerHTML = content;
    }
    document.getElementById('comments').style.visibility = 'hidden';
};