function alteraricone(){
const par = document.getElementById('botao');
const share = document.getElementById('share');
const style = window.getComputedStyle(par);
if (style.backgroundColor === "rgb(238, 242, 250)") {
par.style.backgroundColor = "#49556B";
par.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#FFFFFF" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>'
share.style.display = 'flex';
}
else{
share.style.display = "none";
par.style.backgroundColor = "rgb(238, 242, 250)";
par.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E7F96" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>'
}
}

