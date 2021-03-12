# README



## アプリケーション名
# クイズビルダー
<br>
<br>

# アプリケーション概要

## ３択クイズを作成できる
  * クイズはジャンルごとに分けられる
  * ジャンルは好きなものを作成することが可能
  * 問題文は自由に記述できる
  * 正解と不正解２つを自由に記述できる
  * 問題ごとにコメントとして参考資料や概要を記述することができる
  * 製作者は問題の編集、削除ができる

## 制作した問題を閲覧できる
  * 作成したクイズを「全ジャンル」→「ジャンル」→「問題」の順で確認できる

## 作成した問題で遊ぶことができる
  * ジャンルごとに分けて作成した問題が５つ以上たまると、そのジャンルのクイズを遊ぶことができる
  * 問題はランダムで５つ選ばれる
  * ３秒のカウントダウンのあと問題が始まる
  * 問題文と、その下に回答欄が表示される。
  * 回答欄は毎回ランダムで配列が変わる
  * １０秒の制限時間が設けられている
  * 正解、不正解、時間切れで３種類の画像が表示される
  * ５問終了後、終了画面と遊んだ問題の詳細へのリンクが表示される

## 各問題へコメントを残せる
  * 問題の詳細ページに意見や感想を自由に記述できる
  * 自分の記述したコメントを自由に編集 削除することができる
<br>
<br>

# URL
[クイズビルダー](https://quiz-builder-30943.herokuapp.com/)
	https://quiz-builder-30943.herokuapp.com/


# テスト用アカウント
## Basic認証
  * ID   = admin
  * pass = 2222  
## ログイン用Eメール、パスワード
  * Eメール    = aaa@gmail.com
  * パスワード = AAbb11
<br>
<br>

# 利用方法
  * 上記のアドレスにアクセスする
<br>
<br>

# 目指した課題解決
  * このアプリケーションは２つのテーマを持っています。  
## 学習のアウトプット
  * このアプリケーションは問題を解くのが目的ではなく、
  問題を作ることが目的です。

  今回テックキャンプに参加することで、
  学習にはインプットとアウトプットの両方が等しく大切だということを知りました。

  インプットはまだしも、
  アウトプットはどうすれば良いかを考えた時、
  それは「問題を作ること」であると私は考えました。

  「問題を作る」には学習したものを
  きちんと「理解している」ことが必要不可欠だからです。

  例えば「太陽はどう動くか？」という問題を作る場合
  「天体は東から西へ動く」ということを理解していなければ
  作ることは出来ません。

  さらに少し考えを巡らせると
  「南半球では？」「そもそも動いているのは地球では？」等の
  疑問も浮かんでくると思います。

  それらを全て理解、解決した上で
  問題を完成させることができれば、
  それはこの上ない学習方法になると思います。

  そういった背景から、
  このアプリケーションは
  学習をしているすべての方へ向けたもので、
  中でも学習が苦手な集中力のまだ少ない
  小学生を対象にして制作しました。

## コミュニケーションツール
  * 友達同士や親子で問題を出し合うことによって、
  問題への意見や感想を
  ワイワイと話し合うことが出来たらいいな、
  と思って作りました。 
  
  そういった事は記憶に残りやすいので
  学習のインプットとしても使えると思います。 
<br>
<br>

# 洗い出した要件
## ペルソナ
  * 性別と年齢
    * ６〜１２歳。
    * 男女共。

  * 職業
    * 小学生。進学校ではなく、いわゆる一般的な小学校に通う生徒。

  * 趣味
    * 勉強より遊ぶ方が好き。
    * 友達と過ごすのが好き。
    * テレビゲームやパソコンなど電子機器を利用して遊ぶ。

## 要件定義
  * [バックログ](https://docs.google.com/spreadsheets/d/169gt21bBGt4Pn-DDW6Kn3i0AYJOUjNpWVjFF0sKjhlk/edit#gid=282075926)
  * [各ページの要件定義](https://docs.google.com/spreadsheets/d/1Nez6qMknnnkVL9JDxEATtkEjTBqecsHK5duhY-K6WZc/edit#gid=282075926)
<br>
<br>

# 実装した機能についてのGIFと説明
  ## タイトル画面<br>
  <img width="700" alt="スクリーンショット 2021-03-11 5 18 05" src="https://user-images.githubusercontent.com/73233613/110842306-46664e00-82ea-11eb-939a-dcf37cdb7955.png">

  * タイトル画像と各ページへ遷移するボタンがあります
  * 右側には随時 日付と日直（ユーザー名）が表示されます（クイズ画面は除く）
  * 未ログイン時の日直は「ひよ子」になります

<img width="700" alt="スクリーンショット 2021-03-12 3 33 59" src="https://user-images.githubusercontent.com/73233613/110842474-7a417380-82ea-11eb-9cee-5116db6f0aa9.png">

  * ログインするとクイズを作るボタンが追加されユーザー名が変わります

  ## ジャンルセレクト画面<br>
  <img width="700" alt="スクリーンショット 2021-03-12 3 36 35" src="https://user-images.githubusercontent.com/73233613/110843691-ecff1e80-82eb-11eb-8446-b8074b2286f1.png">

  * クイズで遊ぶボタンをクリックするとジャンルセレクト画面へ遷移し、遊びたい時ジャンルを選びます
  * 各ジャンルごとに所持しているクイズの数を表示しています
  * 各ジャンル５問以上から選択可能で、<br>
  ５問以下のジャンルは暗転され選択不可になっています

  ## クイズ画面 <br>
  ![joy](https://user-images.githubusercontent.com/73233613/110701551-a1d60480-8234-11eb-98da-ce31f69d56f9.gif)
  * ジャンル選択画面でジャンルをクリックすると<br>
  カウントダウンが始まります
  * クイズが出題され、下部に選択肢が表示されます
  * 正解、不正解でそれぞれ画像が表示されます
  * タイマーが実装されていて<br>
  残り３秒を切ると表示が赤くなります
  * タイムアップと共にそれをしらせる画像が表示されます
  * クイズは全５問です<br>

  ![終了画面から問題へのリンク](https://user-images.githubusercontent.com/73233613/110843277-6f3b1300-82eb-11eb-8df6-7b257893237b.gif)

  * 終了すると成績と出題されたクイズの一覧が表示されます
  * 出題された問題のタイトルをクリックすると、<br>
  新しい画面でその問題の詳細を開きます
  * 戻るボタンでタイトル画面に遷移します

  ## クイズ制作画面<br>
  ![クイズ作成画面](https://user-images.githubusercontent.com/73233613/110844725-1bc9c480-82ed-11eb-866e-5ebc21f0942e.gif)
   
  * クイズをつくるボタンをクリックすると<br>
  クイズ作成画面へ遷移します
  * ジャンルのせんたく、ジャンルを作る（後解説）、タイトル<br>
  もんだい、せいかい、まちがい１、まちがい２と<br>
  コメント（必須ではない）を記述して「できあがりボタンを押すと<br>タイトル画面へ遷移されます。

  ## クイズ一覧画面<br>
  <img width="700" alt="スクリーンショット 2021-03-12 3 42 40" src="https://user-images.githubusercontent.com/73233613/110852767-1d4bba80-82f6-11eb-8e62-0b481db148b9.png">

  * クイズいちらんボタンをクリックすると<br>
  クイズ一覧画面へ遷移します
  * ジャンルごとにボタンで分けられ、<br>
  ジャンルの名前と問題数が表示されます
  <img width="700" alt="スクリーンショット 2021-03-12 3 43 21" src="https://user-images.githubusercontent.com/73233613/110853309-d0b4af00-82f6-11eb-85da-ed75543f7b17.png">

  * ジャンルごとのボタンをクリックすると<br>
  そのジャンルのクイズ一覧画面に遷移します
  * クイズごとにボタンで分けられ、<br>
  クイズのタイトルと製作者の名前が表示されます
  * クイズごとのボタンをクリックすると<br>
  そのクイズの詳細画面へ遷移します

<img width="700" alt="スクリーンショット 2021-03-12 5 57 13" src="https://user-images.githubusercontent.com/73233613/110854163-e24a8680-82f7-11eb-8648-ccc9ac6c6aaf.png">

  * 「ユーザー名」さんの作ったクイズボタンをクリックすると<br>
  「ユーザー名」さんの作ったクイズ一覧画面に遷移します
  * 各問題をクリックするとその問題の詳細画面へ遷移します

  ## クイズ詳細画面<br>
  ![ユーザークイズ一覧から編集削除](https://user-images.githubusercontent.com/73233613/110854552-787eac80-82f8-11eb-89fa-106d4278b95e.gif)<br>
   (画像は「ユーザー名」さんのクイズ一覧→クイズ詳細に移動しています)
   * クイズ詳細画面では、<br>
   作者、ジャンル名、クイズのタイトル、問題文、正解、<br>
   不正解x２、コメントを確認できます
   * ユーザーログインをしていると<br>
   ここからコメントをすることができます
   * そのクイズの作者ならば、さらに<br>
   クイズの編集と削除が行えます

   ## コメント編集画面<br>
   ![コメントの編集と削除](https://user-images.githubusercontent.com/73233613/110855365-91d42880-82f9-11eb-89fb-42733c6e4c9b.gif)

  * クイズの詳細画面からコメントをすることができます
  * コメントはその問題の作者なら欄の左側に、<br>
  それ以外のユーザーは右側に配置されます
  * そのコメントをしたユーザーは編集と削除が行えます
<br>
<br>

# 画面遷移図<br>
<img width="700" alt="スクリーンショット 2021-03-13 3 19 56" src="https://user-images.githubusercontent.com/73233613/110981889-2c407480-83ab-11eb-84ff-061bd56f7449.png">

<br>
<br>

# 実装予定の機能
  * [バックログ](https://docs.google.com/spreadsheets/d/169gt21bBGt4Pn-DDW6Kn3i0AYJOUjNpWVjFF0sKjhlk/edit#gid=282075926)に記述した中で未実装のものは全て実装する予定です。  良し悪しは実装して使用してみてから判断したいと思っています。
<br>
<br>

# データベース設計
<img width="700" alt="スクリーンショット 2021-03-12 6 18 34" src="https://user-images.githubusercontent.com/73233613/110856603-32771800-82fb-11eb-9180-fa3b8dc62198.png">

<br>
<br>

# ローカルでの動作方法
## 以下はターミナルでの操作となります
  *  git clone https://github.com/k-takomal/quiz_builder.git
  * cd quiz-builder-30943
  * bundle install
  * yarn install
  * rails db:create
  * rails db:migrate
  * rails s

## 開発環境
* OS
  * macOS BigSur ver.11.2.2
* Rubyのバージョン
  * ver.2.6.5
<br>
<br>
<br>
<br>

# データベース  
## usersテーブル
| column | type | options |
| - | - | - |
| nickname | string | null: false |
| email | string | null: false, unique: true |
| encrypted_password | string | null: false |

### association
- has_many :questions
- has_many :comments



## questionsテーブル
| column | type | options |
| - | - | - |
| title | string | null: false |
| question | text | null: false |
| correct_ans | string | null: false |
| wrong_1 | string | null: false |
| wrong_2 | string | null: false |
| user | references | null: false, foreign_key: true|
| genre | references | null: false, foreign_key: true |

### association
- belongs_to :user
- has_many :comment
- belongs_to :genre



## commentテーブル
| column | type | options |
| - | - | - |
| text | text | null: false |
| user | references | null: false, foreign_key: true |
| question | references | null: false,foreign_key: true |

### association
- belongs_to :user
- belongs_to :question



## genreテーブル
| column | type | options |
| - | - | - |
| name | string | null: false |

### association
- has_many :questions