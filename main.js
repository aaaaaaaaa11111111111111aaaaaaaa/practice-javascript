function ClickCounterGame(){
    let count = 0;
    //countという変数を準備して、0を代入する
    const gameContainer = document.getElementById("game-container");
    //constは定数　変更不可　htmlの特定のidのタグを探し、定数に代入する

    let button1 = document.createElement("button");
    //ボタンのタグを作成する　<button>ボタン</button>を作り、変数と紐づける➀
    button1.textContent = "+1ボタン";
   //<button>中身の文字をtextContentという</button>

    let counter = document.createElement("p");
    counter.textContent = count;

    button1.addEventListener("click",function(){//クリックというイベントを読みとる➁
        count++;
        counter.textContent = count;
        //イベントが起きた場合の処理を記述 ➂
           })

        gameContainer.appendChild(button1);//ボタンを表示する　➃
        gameContainer.appendChild(counter);
}
ClickcounterGame();
