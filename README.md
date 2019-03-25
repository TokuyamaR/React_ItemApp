#[フロント課題Reactを使ったSPAの作成](https://docs.google.com/document/d/1maWJmuORM0IDGAhfSUhXEBtFzvHLGiB7cjB2rhfHiVM/edit)

## 目次  

 - コードベース、コンポーネント図作成まで
 - ダミーデータを使い一通りの機能を実装するまで
 - APIを利用したSPAを作成するまで
 - Material-UIによるデザインの適用
 ---

## コードベースの作成まで

 - node.jsのインストール
 - npm(node.js管理パッケージツール)のインストール
 - Reactアプリのコードベースの作成
 - コンポーネント設計図作成
 - データフロー図作成

### node.jsのインストール

インストールされているかの確認
```
# versionが表示されていればインストール済み
$ node -v
```

nodebrewのインストール
```
# versionが表示されていればインストール済み
$ brew install nodebrew

# 環境パスを設定
echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.bash_profile

# 「ターミナルを再起動」後、必要なバージョンをインストール（今回は最新版）
$ nodebrew install-binary latest

# ダウンロードしたvirsionがダウロードされているか確認し、必ず有効化する
$ nodebrew ls
$ nodebrew use [使用するvirsion]

# 再度nodeのvirsionを確認し、インストールしたvirsionが表示されていればOK
$ node -v
```
### npm(node.js管理パッケージツール)のインストール

virsionを確認し、確認できないまたは古いvirsionの場合はinstallする
```
$ npm --version
$ npm install npm -g
```
### Reactアプリのコードベースの作成、サーバー起動
```
# プロジェクト用のフォルダを作成後、プロジェクトファイルを下記のコマンドで作成する
$ npm install -g create-react-app
$ create-react-app [projedct name]

# サーバーの立ち上げ
$ npm start
```

### Component設計およびデータフローの作成
[draw.io](https://www.draw.io/)にて作成  
今回作成したcomponent図は[こちら](https://drive.google.com/file/d/1_X4RkgMoB8XAdZzm7yG9VY2vPSR026kk/view?usp=sharing)

### ディレクトリ構成

React_itemApp
└- src
  |- css
  |  └- item.css
  |  
  └- js
     |- App.js // app全体を描画
     └- components
        |- AuthSearvice.js // 未実装(不要になる可能性あり)
        |- Item.js // 商品1つのコンポーネント
        |- ItemCreator.js // 商品作成用コンポーネント
        |- ItemList.js // 商品リストのコンポーネント
        |- ItemSearch.js // 商品検索用コンポーネント
        └- Token.js // トークン入力用コンポーネント

###  参照ページ
[React.js チュートリアル[超入門] #0 概要](https://note.mu/natsukingdom/n/n4b856ac4e4fd?magazine_key=me5fa275da270)

--- 
