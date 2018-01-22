
var menuFlag = false;
var profileFlag = false;
function inIt() {
    event();
}


function event() {

    document.getElementById("menu").addEventListener("click", menu, false);


    //document.getElementById("mask").addEventListener("click", menu, false);


    document.getElementById("user").addEventListener("click", profile, false);
    document.getElementById("mainArticle").addEventListener("click", articleClickHandler, false);
}
function articleClickHandler() {
    if (profileFlag === true) {
        document.querySelector(".profileMenu").style = "height:0px";
        profileFlag = false;

    }
}
function menu() {
    var mainMenuBoard;
    mainMenuBoard = document.querySelector("#menuBoard");

        if (menuFlag === true) {
            mainMenuBoard.style = "width:0px";
            document.querySelector("#menu").style = "transform: rotate(0)";
            //document.querySelector(".mask").style = "width:0";
            menuFlag = false;
        }else if(menuFlag === false) {
            mainMenuBoard.style = "width:15%";
            document.querySelector("#menu").style = "transform: rotate(90deg)";
           // document.querySelector(".mask").style = "width: 100%";

            menuFlag = true;

        }
    //document.getElementById("menu").addEventListener("click", menu, false);
    }

    function profile() {
        var profileBoard = document.querySelector(".profileMenu");

        if (profileFlag === true) {
            profileBoard.style = "height:0px";
            profileFlag = false;

        } else if (profileFlag === false) {
            profileBoard.style = "height:18%";

            profileFlag = true;

        }
    }

    //Chart

