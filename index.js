

function scroll(){
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop >30){
        document.getElementById('STop').style.display="block";
    }
    else{
        document.getElementById('STop').style.display="none";
    }
}

//Goto top of the screen.

function goToTop(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}


// Nav

function openMenu(){
    document.getElementById("sidemenu").style.right="0";
    document.querySelector(".fa-xmark").style.visibility="visible";
}

function closeMenu(){
    document.getElementById("sidemenu").style.right="-300px";
    document.querySelector(".fa-xmark").style.visibility="hidden";

}



// Tab

var tabLinks = document.getElementsByClassName('tab-links');

var tabContents = document.getElementsByClassName('tab-contents');

function tabs(tabName){

    for(tablink of tabLinks){
        tablink.classList.remove('active');
    }

    for(tabcontent of tabContents){
        tabcontent.classList.remove('active-tab');
    }

    event.currentTarget.classList.add('active');
    document.getElementById(tabName).classList.add('active-tab');

}
