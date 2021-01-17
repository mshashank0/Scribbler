const queryString = new Array();
let editMode = false;
let num = 0;

//On loading the window, get the passed values - author name, title and description
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

//On editing post, update the values
function onEdit() {
    num += 1;
    if (!editMode) {
        document.getElementById('edit-heading').style.borderWidth = '2px';
        document.getElementById('edit-heading').style.borderStyle = 'solid';
        document.getElementById('edit-heading').style.borderColor = 'pink';

        document.getElementById('edit-contenttext').style.borderWidth = '2px';
        document.getElementById('edit-contenttext').style.borderStyle = 'solid';
        document.getElementById('edit-contenttext').style.borderColor = 'pink';

        document.getElementById('edit-button').innerHTML =
            'Save<i class="fa fa-save" id="edit-button-icon"></i></button>';
        editMode = true;
    } else {
        if (num === 2) {
            var temp = document.getElementById('edit-heading');
            document.getElementById('edit-heading').innerHTML = `<span>UPDATED:</span>${temp.innerHTML}`;

            var temp = document.getElementById('edit-contenttext');
            document.getElementById('edit-contenttext').innerHTML = `<div>UPDATED:</div>${temp.innerHTML}`;
        }

        document.getElementById('edit-contenttext').style.border = 'none';
        document.getElementById('edit-heading').style.border = 'none';

        document.getElementById('edit-button').innerHTML =
            'Edit<i class="fa fa-edit" id="edit-button-icon"></i>';
        document.getElementById('edit-button').disabled = true;
    }
}

let count = 0;

//Update likes
function countLikes() {
    count = parseInt(count) + parseInt(1);
    const divData = document.getElementById('show-count');
    const likeButton = document.getElementById('like-button');
    likeButton.innerHTML = 'Liked!';
    if (count == 1) {
        divData.innerHTML = `${count} person likes this!`;
    } else {
        divData.innerHTML = `${count} people like this!`;
    }
}

const comments = [];

//Add comment div
function addingComment(item, index) {
    const temp = document.getElementById('comments').innerHTML;
    document.getElementById('comments').innerHTML = `<div class="comment">${item}</div>`;
    document.getElementById('comments').innerHTML += `${temp}`;
    comments.pop();
}

//Make comments div visible
function addComment(comment) {
    if (comment.value !== '') {
        document.getElementById('comments').style.visibility = 'visible';
        var comment = comment.value;
        comments.unshift(comment);
        comments.forEach(addingComment);
    }
}