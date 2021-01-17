//Open create post modal
function showCreatePostModal() {
    var modal = document.getElementById("create-post-modal");
    modal.style.display = "flex";
}

//Close create post modal
function hideCreatePostModal() {
    var modal = document.getElementById("create-post-modal");
    modal.style.display = "none";
}

//Show all posts
function showPosts() {
    location.href = "html/postslist.html"
}