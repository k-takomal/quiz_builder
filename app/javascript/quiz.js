function quizApp(){
  
  let quizIndex= 0 ;
  
  const $button = document.getElementsByClassName('answer');
  const $finish_text = document.getElementsByClassName('finish-text');
 
  
  
 //クイズの配列をシャッフル
    for( i = (gon.question.length - 1); i>0; i--){
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = gon.question[i];
    gon.question[i] = gon.question[j];
    gon.question[j] = tmp; 
    }
   
 //クイズの配列をシャッフル
  

  
//クイズの問題
  const setQuiz=() => {

    //何問目の表示
    const number = document.getElementById("number");number.innerHTML= `だい` + (quizIndex + 1) + `問`;
    //何問目の表示

    //フッターのスコアー
    // let score = document.getElementById("score");
    // score.innerHTML = `SCORE`+total+`/`+5;
    //フッターのスコアー
    
    //問題文の挿入
    document.getElementById('question').textContent = gon.question[quizIndex].question;
     //問題文の挿入

    //問題文をタイプライター風に表示

    // function typeLighter(){
    // function typing(str = ""){
       
    //     let buf = document.getElementById("question").innerHTML; //書き込み済みの文字を要素から取得

    //     let writed = buf.length; //書き込み済みの文字数を取得

    //     let write = "";

    //       if(writed < str.length){
    //         write = str.charAt(writed); //1文字だけ取得する
    //         // }else{
    //         //     buf = ""; //今回は何度も繰り返すために内容を消去します
    //         }
    //     document.getElementById("question").innerHTML = buf + write; //1文字だけ追加していく
    //   }

    //   const str = document.getElementById("question").innerHTML; //書き込む文字を要素から取得
    //   const delay = 100 //1文字が表示される時間
    //   document.getElementById("question").innerHTML = "";
      
    //   window.setInterval(function(){typing(str);}, delay);
    //   clearInterval;
    //   const reset = document.getElementById("question").innerHTML = "";

    //   setTimeout(reset,9999);
    //   clearTimeout;
    //  }
    //  typeLighter();
      //問題文をタイプライター風に表示


      
      //選択肢の表示
    
      function choice_1() {
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

      //選択肢の表示
  }
//クイズの問題


//マウスが上にきたら色が変わる
    const buttons = document.getElementsByTagName("button")
      let buttonOver = 0;
      let buttonLength = buttons.length;
      while(buttonOver < buttonLength){
        buttons[buttonOver].addEventListener('mouseover',function(){
          this.setAttribute("style","background-color:rgba(255,200,0,0.8);")
        });
        buttonOver++
      }
      
      let buttonOut = 0;
      while(buttonOut < buttonLength){
        buttons[buttonOut].addEventListener('mouseout',function(){
          this.removeAttribute("style","background-color:rgba(255,200,0,0.8);")
        });
        buttonOut++
    }
//マウスが上にきたら色が変わる
      
//タイマー
    function headTimer(){
      const totalTime = 10000;
      let oldTime = Date.now();
      const timeId = setInterval(()=>{
        let currentTime = Date.now();
        const diff = currentTime - oldTime;
        const diffSec = totalTime - diff;
        let text = "残り " + Math.floor( diffSec / 1000 )+ " 秒";
        
        if (diffSec <= 0){
          clearInterval(timeId);
          //時間切れ画像表示
          const correct = document.getElementById("time_up");
          correct.removeAttribute("style","display:none;")
          //時間切れ画像表示
          
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
          if(quizIndex < 5){
            function next() { 
              setQuiz();
              headTimer();
            }
            setTimeout(next,1000)
          }else{
              //終了画面の表示
            const end = ()=>{
              const finish = document.getElementById("finish-area");
              finish.removeAttribute("style","display:none;")
              
              document.getElementById("score").innerHTML = "５問中" + total + "問せいかい";

              let textIndex = 0;
              let finishTextLength = $finish_text.length;
              while(textIndex < finishTextLength){
                $finish_text[textIndex].textContent = gon.question[textIndex].title;
                
                textIndex++;
              }
          //詳細欄へ新しいページで遷移（本番環境でアドレスの書き換えが必要）
              $finish_text[0].addEventListener('click',function(){
                const qId = gon.question[0].id;
                $finish_text[0].href =("//localhost:3000/questions/" + qId +"/comments")
              })
              $finish_text[1].addEventListener('click',function(){
                const qId = gon.question[1].id;
                $finish_text[1].href =("//localhost:3000/questions/" + qId +"/comments")
              })
              $finish_text[2].addEventListener('click',function(){
                const qId = gon.question[2].id;
                $finish_text[2].href =("//localhost:3000/questions/" + qId +"/comments")
              })
              $finish_text[3].addEventListener('click',function(){
                const qId = gon.question[3].id;
                $finish_text[3].href =("//localhost:3000/questions/" + qId +"/comments")
              })
              $finish_text[4].addEventListener('click',function(){
                const qId = gon.question[4].id;
                $finish_text[4].href =("//localhost:3000/questions/" + qId +"/comments")
              })
          //詳細欄へ新しいページで遷移（本番環境でアドレスの書き換えが必要）
              
              
            };
            setTimeout(end,1200)
          //終了画面の表示

          }
        }

        // //時間切れで問題が終わった時
        // if (diffSec <= 0 && quizIndex == 5){

        // }

        //選択肢がクリックされたらタイマーをクリアーする
        function clickAns(){
        const ansBtnA = document.getElementById("answer_a")
        ansBtnA.addEventListener('click',function(){
          clearInterval(timeId);
        })

        const ansBtnB = document.getElementById("answer_b")
        ansBtnB.addEventListener('click',function(){
          clearInterval(timeId);
        })

        const ansBtnC = document.getElementById("answer_c")
        ansBtnC.addEventListener('click',function(){
          clearInterval(timeId);
        })
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
        }

        quizIndex++;
        
        if(quizIndex < 5){
          
          //1.2秒後に問題が変わる
          function timerQ(){
             setTimeout(vanishQuestion,1200);
          }

          function vanishQuestion(){
            setQuiz();
            headTimer();
          }
          timerQ();
          //1.2秒後に問題が変わる
          // setQuiz();
        } else {
          //終了画面の表示
            const end = ()=>{
              const finish = document.getElementById("finish-area");
              finish.removeAttribute("style","display:none;")
              
              document.getElementById("score").innerHTML = "５問中" + total + "問せいかい";

              let textIndex = 0;
              let finishTextLength = $finish_text.length;
              while(textIndex < finishTextLength){
                $finish_text[textIndex].textContent = gon.question[textIndex].title;
                
                textIndex++;
              }
          //詳細欄へ新しいページで遷移（本番環境でアドレスの書き換えが必要）
              $finish_text[0].addEventListener('click',function(){
                const qId = gon.question[0].id;
                $finish_text[0].href =("//localhost:3000/questions/" + qId +"/comments")
              })
              $finish_text[1].addEventListener('click',function(){
                const qId = gon.question[1].id;
                $finish_text[1].href =("//localhost:3000/questions/" + qId +"/comments")
              })
              $finish_text[2].addEventListener('click',function(){
                const qId = gon.question[2].id;
                $finish_text[2].href =("//localhost:3000/questions/" + qId +"/comments")
              })
              $finish_text[3].addEventListener('click',function(){
                const qId = gon.question[3].id;
                $finish_text[3].href =("//localhost:3000/questions/" + qId +"/comments")
              })
              $finish_text[4].addEventListener('click',function(){
                const qId = gon.question[4].id;
                $finish_text[4].href =("//localhost:3000/questions/" + qId +"/comments")
              })
          //詳細欄へ新しいページで遷移（本番環境でアドレスの書き換えが必要）
              
              
            };
            setTimeout(end,1200)
          //終了画面の表示
          
        }
      }
      //回答ボタンを押した時のアクション
      let handlerIndex = 0;
      while (handlerIndex < buttonLength){
        $button[handlerIndex].addEventListener('click',(e) => {
          clickHandler(e);
        });
        handlerIndex++;
      }
      //回答ボタンを押した時のアクション
  

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
  setTimeout(countDown,0);
  setTimeout(setQuiz,4000);
  setTimeout(headTimer,4000);
 //最初に実行される
    
   
    }
    
    window.addEventListener("load",quizApp);
    