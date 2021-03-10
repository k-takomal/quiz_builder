# README



# アプリケーション名
## クイズビルダー


# アプリケーション概要
## ユーザーログイン機能がある
  * 新規登録画面で「ニックネーム」「Eメールアドレス」「パスワード」を登録するとログインできる
  * ログインすると以下の機能を全て利用できる

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

## 未ログインでできること
  * 作成した問題で遊ぶことができる
  * 制作した問題を閲覧できる


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


# 利用方法
  * 上記のアドレスにアクセスする


# 目指した課題解決
  * このアプリケーションは２つのテーマを持っています。  
## 学習のアウトプット
  * このアプリケーションは問題を解くのが目的ではなく、
  問題を作ることが目的です。  今回テックキャンプに参加することで、学習にはインプットとアウトプットの両方が等しく大切だということを知りました。  インプットはまだしも、アウトプットはどうすれば良いかを考えた時、それは「問題を作ること」であると私は考えました。  「問題を作る」には、学習したものをきちんと「理解している」ことが必要不可欠だからです。  例えば「太陽はどう動くか？」という問題を作る場合「天体は東から西へ動く」ということを理解していなければ作れません。  さらに少し考えを巡らせると「南半球では？」「そもそも動いているのは地球では？」等の疑問も浮かんでくると思います。  それらを全て理解、解決した上で問題を完成させることができれば、これはこの上ない学習方法になると思います。  そういった背景から、このアプリケーションは学習をしているすべての方へ向けたもので、中でも学習が苦手な集中力のまだ少ない小学生を対象にして制作しました。

## コミュニケーションツール
  * 友達同士や親子で問題を出し合うことによって、問題への意見や感想をワイワイと話し合うことが出来たらいいな、と思って作りました。  そういった事は記憶に残りやすいので学習のインプットとしても使えると思います 


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


# 実装した機能についてのGIFと説明
  * タイトル画面<img width="200" alt="title" src="https://gyazo.com/9fdef96b069f6d7387e317e5712aee42">
実装した機能について、それぞれどのような特徴があるのか列挙しましょう。GIFを添えることで、イメージがしやすくなります。
# 実装予定の機能
  * [バックログ](https://docs.google.com/spreadsheets/d/169gt21bBGt4Pn-DDW6Kn3i0AYJOUjNpWVjFF0sKjhlk/edit#gid=282075926)に記述した中で未実装のものは全て実装する予定です。  良し悪しは実装して使用してみてから判断したいと思っています。


# データベース設計
ER図等を添付しましょう。
# ローカルでの動作方法
git cloneしてから、ローカルで動作をさせるまでに必要なコマンドを記述しましょう。この時、アプリケーション開発に使用した環境を併記することを忘れないでください（パッケージやRubyのバージョンなど）。


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