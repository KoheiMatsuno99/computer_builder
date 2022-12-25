
# computer_builder

## 概要
Recursionのproject4課題。

コンピューターの各パーツ（CPU/GPU/RAM/HDD・SSD）を選択することでオリジナルのコンピューターを作成することができます。
作成後はそのコンピューターがゲーム用・作業用にどれだけ適しているかをスコアとして表示します。

## 工夫した点

(1) TypeScriptによる実装を行ったこと

一旦Javascriptで実装した後にTypeScriptで実装し直しました。
JavaScriptではあまり意識していなかった部分もTypeScriptでは意識せざるを得ない部分が多くありました。
例えば、TypeScriptでは選択したHTML要素がnullである場合を考慮する必要があったので、型チェックを行ってから
次の処理に渡すようにしました。

(2) MVCモデルを採用したこと

初めてMVCモデルを採用して開発しました。
特に、ControllerにはfetchAPIの処理とmainメソッドを記述するに留め、
ロジック自体はModelに集約させたことは工夫したポイントです。
また、状態を管理するためにオブジェクト指向によって適宜アクセス制御を行いました。


## 改善点
(1)　テストコードを断念したこと

インストールしていたTypeScriptのバージョンとJestがサポートしているバージョンが
異なっていたので、webpackの設定などが煩雑になりました。
テストが入念に必要ではないアプリであることや時間との兼ね合いから今回は断念しました。
次回は先にテストコードを書いてから開発する方式を採用することで改善をはかります。

(2) 非同期処理が必ずしも期待する動作で実装できていないこと

fetchAPIによる処理の中で、意図せず複数回判定されてしまう部分があります。
この点に関しては再度画面をレンダリングする処理を加えることで、見た目に影響しないようにしました。
しかし、なぜ複数回判定されてしまうのか理解できていないため、本質的な解決ができるリファクタリングが
必要です。

## URL

以下からアプリケーションを見ることができます。

https://amnis333.github.io/computer_builder/
