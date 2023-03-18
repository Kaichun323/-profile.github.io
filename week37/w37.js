let todolist = document.getElementsByTagName("li");       //todolist:li的變數名稱(他是陣列)
console.log(todolist);
for(let i = 0; i < todolist.length; i++){     //.length:找出陣列長度
    let a = document.createElement("span");
    a.innerText = "x";
    a.className = "delete";                  // 指定這東西的class
    console.log(a);
    todolist[i].appendChild(a);             //[i]:第幾個清單
    console.log(todolist[i]);
}
function newone(){
    var s = document.getElementById("work").value;    //得到使用者輸入的字
    if(s == ""){
        alert("您現在沒有輸入任何字"); 
    }else{
        console.log(s);
        let li = document.createElement("li");
        // let t = s;
        li.innerText = s;
        let a = document.createElement("span");
        a.innerText = "x";
        a.className = "delete";
        li.appendChild(a);              //在這個li新增x
        document.getElementById("list").appendChild(li);
        document.getElementById("work").value = "";      //完成輸入後將輸入框變成空字串
        a.addEventListener("click", function(e){
            let div = this.parentElement;
            div.style.display = "none";
        });
    }
}
let list = document.getElementById("list");
list.addEventListener("click", function(e) {
    if(e.target.nodeName == "LI"){
        e.target.classList.toggle("checked");     //toggle:讓東西變相反
    }
})
let span = document.getElementsByTagName("span");
for(let i = 0; i < span.length; i++){
    span[i].addEventListener("click", function(e){
        let div = this.parentElement;
        div.style.display = "none";
        // if(e.target.nodeName == "span"){
        //     e.target.classList.toggle("checked");
        // }
    });
} 