# README



# アプリ名 : Muni（むに）

* コミュニケーションのためのアプリです
https://lit-scrubland-91977.herokuapp.com
 
# 概要

![画面収録 2020-07-14 11 33 16 mov](https://user-images.githubusercontent.com/64821510/87378434-bf30d100-c5c8-11ea-862e-272776105201.gif)

* テキストと画像（最大4枚）の投稿
* フォロー/フォロワー機能
* 投稿のお気に入り登録機能
* 投稿/ユーザーの検索機能

# 本番環境

https://lit-scrubland-91977.herokuapp.com

* テストアカウント

mail: muni@muni.com

pass: nekoneko

# 制作背景・意図

Ruby on Railsの理解を深める目的で、既存のSNS等を参考に作成しました。

気軽に投稿できるよう、サイドバーに投稿フォームを常に表示しています。

投稿のお気に入り登録やフォローはajax通信でできます。

投稿・ユーザーそれぞれで検索することができます。

スマホでも利用できるよう、レスポンシブ対応しています。


# DEMO

投稿一覧

<img width="500" alt="muni投稿一覧" src="https://user-images.githubusercontent.com/64821510/87382202-5732b880-c5d1-11ea-9adc-4e7b025b3915.png" >

ログイン

<img width="500" alt="muniログイン画面" src="https://user-images.githubusercontent.com/64821510/87381483-ceffe380-c5cf-11ea-8354-eecf56912ef7.png">

登録

<img width="500" alt="muni新規登録画面" src="https://user-images.githubusercontent.com/64821510/87381490-d1623d80-c5cf-11ea-982e-818b97edd68d.png">

ユーザー編集
<img width="1439" alt="muniアカウント編集" src="https://user-images.githubusercontent.com/64821510/87381481-cdceb680-c5cf-11ea-99b9-dd6d89ea37f1.png">

画像投稿
3枚の時
<img width="300" alt="muni3枚投稿" src="https://user-images.githubusercontent.com/64821510/87381475-c9a29900-c5cf-11ea-96c9-29fee20ae75c.png">
4枚の時
<img width="301" alt="muni4枚投稿" src="https://user-images.githubusercontent.com/64821510/87381477-cc9d8980-c5cf-11ea-95cd-bd5dced6aa3b.png">

レスポンシブ

投稿一覧
<img width="403" alt="muni投稿一覧(スマホ)" src="https://user-images.githubusercontent.com/64821510/87381972-dffd2480-c5d0-11ea-8cfa-db1f15549602.png">

登録
<img width="400" alt="muni新規登録画面(スマホ)" src="https://user-images.githubusercontent.com/64821510/87381492-d1fad400-c5cf-11ea-8979-bbb58fba5ca9.png">

ログイン
<img width="402" alt="muniログイン画面(スマホ)" src="https://user-images.githubusercontent.com/64821510/87381485-cf987a00-c5cf-11ea-89a4-03ffe34ca21c.png">

マイページ
<img width="401" alt="muniマイページ(スマホ)" src="https://user-images.githubusercontent.com/64821510/87381963-db387080-c5d0-11ea-8b44-53a6df1c9fc2.png">

新規投稿
<img width="399" alt="muni投稿ページ(スマホ)" src="https://user-images.githubusercontent.com/64821510/87382661-7251f800-c5d2-11ea-9914-045899cb2d60.png">


メニューバー
<img width="397" alt="muniログイン前メニュー(スマホ)" src="https://user-images.githubusercontent.com/64821510/87381489-d0c9a700-c5cf-11ea-8aa8-50ded57bb3a9.png">
<img width="398" alt="muniログイン後メニュー(スマホ)" src="https://user-images.githubusercontent.com/64821510/87382653-6e25da80-c5d2-11ea-895a-366e3a954448.png">




# 使用技術/開発環境

* ruby 2.5.1
* jQuery
* Haml
* Scss
* VSC
* mySQL
* 
* 
* 
* 

# 課題/今後実装したい機能

* ユーザー検索のajax通信
* 
* 
* 


# DB設計

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


# 製作者
 
mayuko0906

