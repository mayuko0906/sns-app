# README



# アプリ名 : Muni（むに）

* コミュニケーションのためのアプリです
https://lit-scrubland-91977.herokuapp.com
 
# 概要

* テキストと画像（最大4枚）が投稿できます
＊ 他のユーザーをフォローしたり、他のユーザーからフォローされることができます
* 投稿のお気に入り登録ができます

![画面収録 2020-07-14 11 33 16 mov](https://user-images.githubusercontent.com/64821510/87378434-bf30d100-c5c8-11ea-862e-272776105201.gif)

# 本番環境
https://lit-scrubland-91977.herokuapp.com

* テストアカウント

mail: muni@muni.com
<br>
pass: nekoneko

# 制作背景・意図

Ruby on Railsの理解を深める目的で、既存のSNS等を参考に作成しました。

気軽に投稿できるよう、サイドバーに投稿フォームを常に表示しています。

投稿のお気に入り登録やフォローはajax通信でできます。

投稿・ユーザーそれぞれで検索することができます。

スマホでも利用できるよう、レスポンシブ対応しています。


# DEMO


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

