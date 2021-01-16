function showCreatePostModal() {
    var modal = document.getElementById("create-post-modal");
    modal.style.display = "flex";
}

function hideCreatePostModal() {
    var modal = document.getElementById("create-post-modal");
    modal.style.display = "none";
}

function showPosts() {
    location.href = "html/postslist.html"
}