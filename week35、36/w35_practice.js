// document.getElementById("hp-bar").style.width = "50%";
function Player() {
    this.hp = 100;                //屬性
    this.hurt = function(){       //方法
        this.hp = this.hp -5;
    }
    this.rest = function(){
        this.hp = this.hp +2;
    }
}

let playerA = new Player();
let playerB = new Player();

// playerA.hurt();
// playerB.hurt();

function F(s){          // s = 玩家
    console.log(s);
    if(s == 1){         //如果是player1攻擊
        playerB.hurt();
        document.getElementById("blood2").innerText = "HP: " + playerB.hp;     //顯示血量
        document.getElementById("hp-bar2").style.width = playerB.hp + "%";     //改變血量條的長度
        if(playerB.hp <= 50){
            document.getElementById("blood2").style.color = "red";       //顏色要加引號
            document.getElementById("hp-bar2").style.backgroundColor = "red";    //血量的顏色
        }
        if(playerB.hp <= 0){    //玩家2死掉了
            alert("玩家1贏了!");
        }
    }else if(s == 2){
        playerA.hurt();
        document.getElementById("blood1").innerText = "HP: " + playerA.hp;
        document.getElementById("hp-bar1").style.width = playerA.hp + "%";
        if(playerA.hp <= 50){
            document.getElementById("blood1").style.color = "red";       //顏色要加引號
            document.getElementById("hp-bar1").style.backgroundColor = "red";
        }
        if(playerA.hp <= 0){
            alert("玩家2贏了!");
        }
    }
}
function R(s){
    console.log(s);
    if(s == 1){
        if(playerA.hp >= 100){  
            alert("玩家1血量已滿");
        }else{         //血量低於100需補血超過不需要
            playerA.rest();
            document.getElementById("blood1").innerText = "HP: " + playerA.hp;
            document.getElementById("hp-bar1").style.width = playerA.hp + "%";
            if(playerA.hp >= 50){
                document.getElementById("blood1").style.color = "blue";     //顏色要加引號
                document.getElementById("hp-bar1").style.backgroundColor = "rgb(101, 143, 243)";
        }
    }
    }else if(s == 2){
        if(playerB.hp >=  100){
            alert("玩家2血量已滿");
        }else{
            playerB.rest();
            document.getElementById("blood2").innerText = "HP: " + playerB.hp;
            document.getElementById("hp-bar2").style.width = playerB.hp + "%";
            if(playerB.hp >= 50){
                document.getElementById("blood2").style.color = "blue";     //顏色要加引號
                document.getElementById("hp-bar2").style.backgroundColor = "rgb(101, 143, 243)";
            }
        }
    }
}

