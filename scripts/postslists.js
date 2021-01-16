function removeCard(card) {
    const delCard = document.getElementById(card);
    delCard.parentNode.removeChild(delCard);
}

function openPost(author, heading, content) {
    const url = `../html/post.html?heading=${encodeURIComponent(heading.innerText)}&author=${encodeURIComponent(
            author.innerText
    )}&content=${encodeURIComponent(content.innerText)}`;
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