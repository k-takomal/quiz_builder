(()=>{
  function quizApp(){

    //出題数（変更時はjoy.indexも変更する）
    const numberOfQuestion = 5;
    //出題数（変更時はjoy.indexも変更する）

    let quizIndex= 0 ;
    const $button = document.getElementsByClassName('answer');
    const $finish_text = document.getElementsByClassName("finish-text");

    const buttons = document.getElementsByTagName("button")
    let buttonLength = buttons.length;
  
  
 //クイズの配列をシャッフル
    for( i = (gon.question.length - 1); i>0; i--){
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = gon.question[i];
    gon.question[i] = gon.question[j];
    gon.question[j] = tmp; 
    }
 //クイズの配列をシャッフル
  

//問題文の表示と選択肢の表示
  const setQuiz=() => {

    //何問目の表示
    const number = document.getElementById("number");number.innerHTML= `だい` + (quizIndex + 1) + `問`;
    //何問目の表示

    
    //問題文の表示
    document.getElementById('question').textContent = gon.question[quizIndex].question;
    //問題文の表示

      
    //選択肢の表示をランダムにする
      
      const choice_1= ()=> {
      $button[0].textContent = gon.question[quizIndex].correct_ans;
      $button[1].textContent = gon.question[quizIndex].wrong_ans_1;
      $button[2].textContent = gon.question[quizIndex].wrong_ans_2;
    }
      const choice_2= ()=>{
      $button[0].textContent = gon.question[quizIndex].correct_ans;
      $button[2].textContent = gon.question[quizIndex].wrong_ans_1;
      $button[1].textContent = gon.question[quizIndex].wrong_ans_2;
      }
      const choice_3= ()=>{
      $button[1].textContent = gon.question[quizIndex].correct_ans;
      $button[0].textContent = gon.question[quizIndex].wrong_ans_1;
      $button[2].textContent = gon.question[quizIndex].wrong_ans_2;
      }
      const choice_4= ()=>{
      $button[1].textContent = gon.question[quizIndex].correct_ans;
      $button[2].textContent = gon.question[quizIndex].wrong_ans_1;
      $button[0].textContent = gon.question[quizIndex].wrong_ans_2;
      }
      const choice_5= ()=>{
      $button[2].textContent = gon.question[quizIndex].correct_ans;
      $button[0].textContent = gon.question[quizIndex].wrong_ans_1;
      $button[1].textContent = gon.question[quizIndex].wrong_ans_2;
      }
      const choice_6= ()=>{
      $button[2].textContent = gon.question[quizIndex].correct_ans;
      $button[1].textContent = gon.question[quizIndex].wrong_ans_1;
      $button[0].textContent = gon.question[quizIndex].wrong_ans_2;
      }

      const aaa= choice_1;
      const bbb= choice_2;
      const ccc= choice_3;
      const ddd= choice_4;
      const eee= choice_5;
      const fff= choice_6;

      const choices = [aaa,bbb,ccc,ddd,eee,fff];

      let any = Math.floor(Math.random()*5);  
      
      choices[any]();

    //選択肢の表示をランダムにする
  }

//問題文の表示と選択肢の表示

//終了画面の表示
  function end() {

  //画面サイズにより表示画像を変える
    const smallDevice = window.matchMedia("(min-width: 415px)");
      function handleDeviceChange(e) {
        if (e.matches){
          const finish = document.getElementById("finish");
          finish.removeAttribute("style","display:none;");
        }else{
          const finish = document.getElementById("finish_keitai");
          finish.removeAttribute("style","display:none;");
        };
      };

    handleDeviceChange(smallDevice);

    const finish = document.getElementById("finish-area");
          finish.removeAttribute("style","display:none;");
  //画面サイズにより表示画像を変える
  
  //正解数  
    document.getElementById("total_question").innerHTML = numberOfQuestion + "問中";

    document.getElementById("score").innerHTML = total + "問せいかい";
  //正解数  
  
  //詳細欄へ新しいページで遷移
    let textIndex = 0;
    let finishTextLength = $finish_text.length;
      while(textIndex < finishTextLength){
        //タイトル表示
        $finish_text[textIndex].textContent = gon.question[textIndex].title;
        //アドレス変更    
        let qId = gon.question[textIndex].id;
        $finish_text[textIndex].href=
            "//quiz-builder-30943.herokuapp.com/questions/" + qId + "/comments";
            
        textIndex++;
      };
  //詳細欄へ新しいページで遷移
  };
  
//終了画面の表示
    

//タイマー
    function headTimer(){
      const totalTime = 10000;
      let oldTime = Date.now();
      const timeId = setInterval(()=>{
        let currentTime = Date.now();
        const diff = currentTime - oldTime;
        const diffSec = totalTime - diff;
        let text = "残り " + (diffSec/1000 + 1).toFixed(2) ;

      //３秒前に表示が赤くなる
        if (diffSec < 2999){
          document.querySelector("#timer").setAttribute("style","color:red;")
        }
        if (diffSec > 2999){
          document.querySelector("#timer").removeAttribute("style","color:red;")
        }
      //３秒前に表示が赤くなる

      //時間切れ後の処理
        if (diffSec <= 0){
          clearInterval(timeId);
        //時間切れ画像表示
          const correct = document.getElementById("time_up");
          correct.removeAttribute("style","display:none;")
          //1秒後に画像が消える
          function sTimer(){
            sTimeId = setTimeout(vanishImage,1000);
          }
          function vanishImage(){
            document.getElementById("time_up").style.display="none";
            clearTimeout(sTimeId);
          }
          sTimer();
          //1秒後に画像が消える
          quizIndex++;
        //時間切れ画像表示

        //
          if(quizIndex < numberOfQuestion){
            function next() { 
              setQuiz();
              headTimer();
            }
            setTimeout(next,1000)
          }else{
            setTimeout(end,1200)
          }
        }

        //選択肢がクリックされたらタイマーをクリアーする
        function clickAns(){
          const ansBtnA = document.getElementById("answer_a")
          ansBtnA.addEventListener('click',function(){
            clearInterval(timeId);
          });
          const ansBtnB = document.getElementById("answer_b")
          ansBtnB.addEventListener('click',function(){
            clearInterval(timeId);
          });
          const ansBtnC = document.getElementById("answer_c")
          ansBtnC.addEventListener('click',function(){
            clearInterval(timeId);
          });
        };
        //選択肢がクリックされたらタイマーをクリアーする
        
        document.querySelector("#timer").innerHTML = text;
        clickAns();
      })
    };
//タイマー
        
        

//クリックしたら正誤判定
  let total = 0;

  const clickHandler = (e) =>{

  //正解の画像が表示される
    if(gon.question[quizIndex].correct_ans === e.target.textContent ){
      const correct = document.getElementById("good_ans");
      correct.removeAttribute("style","display:none;")
    //1秒後に画像が消える
      function timer(){
        aTimeId = setTimeout(vanishImage,1000);
      }
      function vanishImage(){
        document.getElementById("good_ans").style.display="none";
        clearTimeout(aTimeId);
      }
      timer();
    //1秒後に画像が消える
      total++;
  //正解の画像が表示される
  
  
  //不正解の画像が表示される
    }else{
      const correct = document.getElementById("no_good_ans");
      correct.removeAttribute("style","display:none;")
    //1秒後に画像が消える
      function timer(){
        fTimeId = setTimeout(vanishImage,1000);
      }
      function vanishImage(){
        document.getElementById("no_good_ans").style.display="none";
        clearTimeout(fTimeId);
      }
      timer();
    //1秒後に画像が消える
    };
  //不正解の画像が表示される

  quizIndex++;
    
  //1.2秒後に問題が変わる
    if(quizIndex < numberOfQuestion){
      
      function timerQ(){
          setTimeout(vanishQuestion,1200);
      };
      function vanishQuestion(){
        setQuiz();
        headTimer();
      };

      timerQ();

    } else {
      setTimeout(end,1200)
    };
  //1.2秒後に問題が変わる
  };

  //回答ボタンを押した時のアクション
      let handlerIndex = 0;
      while (handlerIndex < buttonLength){
        $button[handlerIndex].addEventListener('click',(e) => {
          clickHandler(e);
        });
        handlerIndex++;
      }
  //回答ボタンを押した時のアクション
  
//クリックしたら正誤判定




// クイズ前のカウントダウン
  const totalTime = 4000;
  const oldTime = Date.now();

  const countDown =()=>{
  const timeId = setInterval(()=>{
      const currentTime = Date.now();
      const diff = currentTime - oldTime;
      const diffSec = totalTime - diff;
      let text =  Math.floor( diffSec / 1000 );
        if (diffSec <= 0){
        clearInterval(timeId);
        const correct = document.getElementById("count-down");
          correct.setAttribute("style","display:none;")
        }
      document.querySelector("#count-down").innerHTML = text;
  
      })
    }
// クイズ前のカウントダウン

          
      
        
      
      
//最初に実行される
  countDown();
  setTimeout(setQuiz,4000);
  setTimeout(headTimer,4000);
//最初に実行される
    
   
};
    
    window.addEventListener("load",quizApp);

})();