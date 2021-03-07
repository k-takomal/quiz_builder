# README

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