function removeCard(card) {
    const delCard = document.getElementById(card);
    delCard.parentNode.removeChild(delCard);
}

function openPost(id) {
    var post = document.getElementById(id);
    var title = post.getElementsByClassName('post-title')[0];
    var username = post.getElementsByClassName('post-username')[0];
    var desc = post.getElementsByClassName('post-desc')[0];
    const url = `../html/post.html?heading=${encodeURIComponent(title.innerText)}&author=${encodeURIComponent(
        username.innerText
    )}&content=${encodeURIComponent(desc.innerText)}`;
    window.location.href = url;
}

function openTrashModal(id) {
    var modal = document.getElementById(id);
    modal.style.display = "flex";
}

function closeTrashModal(id) {
    var modal = document.getElementById(id);
    modal.style.display = "none";
}