let nameinput = document.getElementById("name");
let branchinput = document.getElementById("branch");
let numberinput = document.getElementById("number");
let photoinput = document.getElementById("photo");
let btninput = document.getElementById("download");

let badgeName = document.getElementById("badgeName");
let badgeBranch = document.getElementById("badgeBranch");
let badgeNumber = document.getElementById("badgeNumber");
let badgePhoto = document.getElementById("badgePhoto");
let profileimage = null;
photoinput.addEventListener("change", function () {
    let file = photoinput.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function (e) {
            profileimage = e.target.result;
            badgePhoto.src = profileimage;
        };
        reader.readAsDataURL(file);
    }
});
btninput.addEventListener("click", function () {
    badgeName.innerText = "Name: " + nameinput.value;
    badgeBranch.innerText = "Branch: " + branchinput.value;
    badgeNumber.innerText = "Mobile: " + numberinput.value;
    html2canvas(document.getElementById("badge")).then(canvas => {
        let link = document.createElement("a");
        link.download = "badge.png";
        link.href = canvas.toDataURL();
        link.click();
    });
});
