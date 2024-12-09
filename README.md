# kkh extention for Visual Studio Code

旧字旧仮名と新字新仮名とを相互に変換するツール kkh を Visual Studio Code に移植した機能拡張です。

## Features

エディタ上で選択された文字列に対して任意の変換を行います。変換の種類は次の 6 種類です。

- 新仮名遣いから旧仮名遣いへ
- 旧仮名遣いから新仮名遣いへ
- 新漢字から旧漢字へ
- 旧漢字から新漢字へ
- 新字新仮名遣いから旧字旧仮名遣いへ
- 旧字旧仮名遣いから新字新仮遣いへ

文字列を選択してからコンテキストメニューを表示し、上記のコマンドから希望する変換を選んでください。

## Installation
ページの右側に Releases ページへのリンクがあるのでクリックして移動します。

"vsc-kkh-x.x.x.zip" ファイルをダウンロードします。解凍すると "vsc-kkh-x.x.x.vsix" ファイルになりますので、これを VSCode にインストールします。

VSCode 左側の "Extensions" を開き、「…」のプルダウンメニューから "Install from VSIX..." を選択します。ファイル選択ダイアログが表示されるので、先ほど展開した ".vsix" ファイルを指定すればインストールされます。

## Requirements

必要なものはありません。

## Extension Settings

設定できる項目はありません。

## Known Issues

コンテキストメニューに居座り続けることになるので、場合によっては目障りになるかもしれません。

すべてを選択してからメニューを実行すれば全文変換となりますが、変換精度はそれほどではないので「少し変換しては目視確認」をすることを推奨します。

## Release Notes

### 0.0.3
辞書を更新 (commit: f6cc03423dc21883e43d2261ce994d95cabbaddf)

### 0.0.2
辞書を更新 (commit: 18c8ec2278a30eec0f81a152c9a09f1f3251ba7d)

### 0.0.1
Initial release

-------------------------------------------------------------------------------

## Following extension guidelines

内包している辞書データは、[kkh](https://github.com/okikae/kkh) による活動の成果を利用しています。

「辞書が本体」です。

## For more information

- [Github のプロジェクトサイト](https://github.com/okikae)

**Enjoy!**
