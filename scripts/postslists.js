//To remove post card from the list
function removeCard(card) {
    const delCard = document.getElementById(card);
    delCard.parentNode.removeChild(delCard);
}

//Open post to edit
//id - is the id of individual post div
function openPost(id) {
    var post = document.getElementById(id);
    //Capture title., author name and description of the post
    var title = post.getElementsByClassName('post-title')[0];
    var username = post.getElementsByClassName('post-username')[0];
    var desc = post.getElementsByClassName('post-desc')[0];
    //Pass data to post.html using uri
    const url = `../html/post.html?heading=${encodeURIComponent(title.innerText)}&author=${encodeURIComponent(
        username.innerText
    )}&content=${encodeURIComponent(desc.innerText)}`;
    window.location.href = url;
}

//Open delete dialog box with yes and no option
function openTrashModal(id) {
    var modal = document.getElementById(id);
    modal.style.display = "flex";
}

//close delete dialog box
function closeTrashModal(id) {
    var modal = document.getElementById(id);
    modal.style.display = "none";
}