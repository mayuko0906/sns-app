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
