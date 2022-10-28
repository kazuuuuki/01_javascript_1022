//display hidden でvsボタンを隠す
//準備できたらボタン表示
//ジョジョバトル関数が動いたら
//キャラクター選択したら準備完了
//vs関数をつくる→キャラによる判定設計
//よく使う変数は


//------------
//jojo
//------------

//敵＆味方の画像セット
let e_battle = ["ディアボロ","ドッピオ","チョコラータ","兄貴"]
let t_battle = ["ジョルノ","ブチャラティ","ナランチャ","ミスタ","アバッキオ"];

let enemy_n = null
let team_n = null

// let result = null
let t_battle_r = null

document.querySelector("#vs").style.visibility ="hidden";



function jojo_battle(t_battle_r){
    
    enemy_n = Math.floor(Math.random() * 4);
    team_n = t_battle_r;

    if(team_n === 0){
        alert("ジョルノ：\n「覚悟」とは！暗闇の荒野に進むべき道を切り開くことだッ！")
    } else if (team_n === 1){
        alert("ブチャラティ：\n『任務は遂行する』『部下も守る』、『両方』やらなくっちゃあならないのが幹部のつらいとこところだな…覚悟はいいか？俺はできてる")
    } else if (team_n === 2){
        alert("ナランチャ：\n「命令」してくれよ…「いっしょに来い！」って命令してくれるのならそりゃあ勇気がわいてくる……あんたの命令なら何も怖くないんだ…")
    } else if (team_n === 3){
        alert("ミスタ：\n知らねーのかマヌケッ！！「4つ」のものから ひとつ選ぶのは縁ギが悪いんだ！5つのものから選ぶのはいい！！")
    } else if (team_n === 4){
        alert("アバッキオ：\nうらやましいな...以前オレは警官になりたいと思っていた...子供のころから...ずっと、りっぱな警官に...なりたかったんだ...")
    }

        document.querySelector("#team_r").src = "img/battle" + t_battle_r +".png" ;
        document.querySelector("#enemy_r").src = "img/enemy" + enemy_n + ".png";
        document.querySelector("#vs").style.visibility="visible";
        document.querySelector("#vs").src = "img/vslogo.png";
        document.querySelector("#jo_r").innerHTML =  t_battle[t_battle_r] + "の出番だァ！！";
    // document.querySelector("#enemy").innerHTML = "相手は" + e_battle[e_battle_r] ;

}



//バトル開始

function vs_r(vsResult){
        if(team_n === 0){
            vsResult = 0;
            console.log(vsResult);
            function popUp(elem){
                if(!elem) return;
              
                elem.addEventListener('click', function(){
                  popup.classList.toggle('is-show');
                });
              }
            battle_end = t_battle[team_n] + "の勝ちだ!!";
        } else if (team_n === 1 && enemy_n === 0){
            vsResult = 2;
            console.log(vsResult);
            function popUp(elem){
                if(!elem) return;
              
                elem.addEventListener('click', function(){
                  popup.classList.toggle('is-show');
                });
              }
            battle_end = t_battle[team_n] + "の負けだ!!";
        } else if(team_n === 1) {
            vsResult = 1;
            console.log(vsResult);
            function popUp(elem){
                if(!elem) return;
              
                elem.addEventListener('click', function(){
                  popup.classList.toggle('is-show');
                });
              }
            battle_end = t_battle[team_n] + "の勝ちだ!!";
        } 
        if (team_n === 2 && enemy_n === 1 ){
            vsResult = 3;
            console.log(vsResult);
            function popUp(elem){
                if(!elem) return;
              
                elem.addEventListener('click', function(){
                  popup.classList.toggle('is-show');
                });
              }
            battle_end = t_battle[team_n] + "の勝ちだ!!";
        } else if(team_n === 2){
            vsResult = 4;
            console.log(vsResult);
            function popUp(elem){
                if(!elem) return;
              
                elem.addEventListener('click', function(){
                  popup.classList.toggle('is-show');
                });
              }
            battle_end = t_battle[team_n] + "の負けだ!!";
        }

        if (team_n === 3 && enemy_n === 0){
            vsResult = 5;
            console.log(vsResult);
            function popUp(elem){
                if(!elem) return;
              
                elem.addEventListener('click', function(){
                  popup.classList.toggle('is-show');
                });
              }
            battle_end =t_battle[team_n] + "の負けだ!!";
        } else if (team_n === 3 && enemy_n === 3){
            vsResult = 5;
            console.log(vsResult);
            function popUp(elem){
                if(!elem) return;
              
                elem.addEventListener('click', function(){
                  popup.classList.toggle('is-show');
                });
              }
            battle_end = t_battle[team_n] + "の負けだ!!";
        } else if(team_n === 3){
            vsResult = 6;
            console.log(vsResult);
            function popUp(elem){
                if(!elem) return;
              
                elem.addEventListener('click', function(){
                  popup.classList.toggle('is-show');
                });
              }
            battle_end = t_battle[team_n] + "の勝ちだ!!";
        }

        if (team_n === 4 && enemy_n === 1){
            vsResult = 7;
            console.log(vsResult);
            function popUp(elem){
                if(!elem) return;
              
                elem.addEventListener('click', function(){
                  popup.classList.toggle('is-show');
                });
              }
            battle_end = t_battle[team_n] + "の勝ちだ!!";
        } else if(team_n === 4){
            vsResult = 8;
            console.log(vsResult);
            function popUp(elem){
                if(!elem) return;
              
                elem.addEventListener('click', function(){
                  popup.classList.toggle('is-show');
                });
              }
            battle_end = t_battle[team_n] + "の負けだ!!";
        }
        document.querySelector("#vsImg").src = "img/vs" + vsResult + ".png";
        document.querySelector("#jo_r").innerHTML =  battle_end;
    }



// // //リセット関数
    function reset(){
        location.reload();
    }



// ポップアップのセッティング処理
function popupSetting(){
    let popup = document.getElementById('popup');
    if(!popup) return;
  
    let bgBlack = document.getElementById('bg-black');
    let closeBtn = document.getElementById('close-btn');
    let showBtn = document.getElementById('show-btn');
  
    // ポップアップ
    popUp(bgBlack);
    popUp(closeBtn);
    popUp(showBtn);
  
    // ポップアップ処理
    function popUp(elem){
      if(!elem) return;
    
      elem.addEventListener('click', function(){
        popup.classList.toggle('is-show');
      });
    }
  }
  
  // ポップアップのセッティング
  popupSetting();