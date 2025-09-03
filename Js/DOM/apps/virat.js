let disLike = document.getElementById("dislike");
let like = document.getElementById("like");
let total = document.getElementById("total");

disLike = localStorage.getItem("disLike") ? +localStorage.getItem("disLike") : 0 ;
like = localStorage.getItem("like") ? +localStorage.getItem("like") : 0 ;
total = localStorage.getItem("total") ? +localStorage.getItem("total") : 0 ;

function disInc(){
    disLike++;
    localStorage.setItem("disLike",disLike);
    disLike.textContent=localStorage.getItem("disLike");
    updateTotal();
}

function likeInc(){
    like++;
    localStorage.setItem("like",like);
    disLike.textContent=localStorage.getItem("like");
    updateTotal();
}

function updateTotal(){
    total=disLike+like;
    localStorage.setItem("total",total);
    total.textContent=localStorage.getItem("total")
}