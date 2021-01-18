// Common header HTML template for all the pages. 
// It includes header, signup and sign in modals
var header = `
<!-- Header begins-->
        <div id="header">
            <div id="title-container">
                <p id="page-title">ScriBBler</p>
                <p id="sub-heading">Explore, Imagine, Create</p>
            </div>

            <div id="auth-container">
                <button type="button" class="auth-button" id="sign-in-button" onclick="showSignInModal();">Sign In</button>
                <button type="button" class="auth-button" id="sign-up-button" onclick="showSignUpModal();">Sign Up</button>
            </div>
        </div>
        <!-- Header ends-->


    <!-- Sign-in modal begins -->
    <div id="signin-modal" class="modal">
        <div class="modal-content">
            <div class="modal-head">
                <span onclick="hideSignInModal()" id="close" class="close">&times;</span>
                <h2 class="modal-title">Welcome Back!</h2>
            </div>
            <hr>
            <form>
                <label for="username" class="label-text">Username</label>
                <input type="text" id="username" placeholder="Enter Username" required>
                <label for="password" class="label-text">Password</label>
                <input type="password" id="password" placeholder="Enter Password" required>
                <button type="submit" class="signin-btn">Sign In</button>
            </form>

            <p class=bottom-banner>Not a member?<span onclick="hideSignInModal();showSignUpModal();" class=signup>Sign
                    Up</span></p>
        </div>
    </div>
    <!-- Sign-in modal ends -->

    <!-- Sign-up modal begins -->
    <div class="modal" id="signup-modal">
        <div class="modal-content">

            <div class="modal-head">
                <span onclick="hideSignUpModal()" id="close" class="close">&times;</span>
                <h2 class="modal-title">Get Started</h2>
            </div>
            <hr>
            <form>
                <label for="fullname" class="label-text">Full name</label>
                <input type="text" id="fullname" placeholder="Enter Full Name" required>
                <label for="username" class="label-text">Username</label>
                <input type="text" id="username" placeholder="Enter Username" required>
                <label for="password" class="label-text">Password</label>
                <input type="password" id="password" placeholder="Enter Password" required>
                <label for="confirmpassword" class="label-text">Confirm Password</label>
                <input type="password" id="confirm_password" placeholder="Confirm Password" required>
                <button type="submit" class="signin-btn">Sign up</button>
            </form>
        </div>
    </div>
    <!-- Sign-up modal ends -->
`
    //It will add common header and modal template to main-container div's inner html
function addHeader() {
    var headerContainer = document.getElementById("main-container");
    headerContainer.innerHTML = header;
}

//Add header method gets executed on windows load
window.onload = addHeader;

function showSignInModal() {
    var modal = document.getElementById("signin-modal");
    modal.style.display = "flex";
}

function hideSignInModal() {
    var modal = document.getElementById("signin-modal");
    modal.style.display = "none";
}

function showSignUpModal() {
    var modal = document.getElementById("signup-modal");
    modal.style.display = "flex";
}

function hideSignUpModal() {
    var modal = document.getElementById("signup-modal");
    modal.style.display = "none";
}