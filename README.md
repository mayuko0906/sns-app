# README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|

### Association
- has_many :tweets

## postsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false, index: true|
|user_id|reference|null: false, foreign_key: true|

### Association
- belongs_to :user


# タイトル

コミュニケーションのためのアプリです
You can check out the app on Heroku!
https://lit-scrubland-91977.herokuapp.com
 
# DEMO
 
"hoge"の魅力が直感的に伝えわるデモ動画や図解を載せる
 

# Requirement
 
"hoge"を動かすのに必要なライブラリなどを列挙する
 
* ruby 2.5.1
* jQuery

 
# Usage
 
DEMOの実行方法など、"hoge"の基本的な使い方を説明する
 
```bash
https://github.com/mayuko0906/sns-app.git
```
 

# Author
 
* 作成者 mayuko0906

 
# License
"Muni" is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).
