# kkh extention for Visual Studio Code
旧字旧仮名と新字新仮名とを相互に変換するツール kkh を Visual Studio Code に移植した機能拡張です。

## Features
エディタ上で選択された文字列に対して任意の変換を行います。変換の種類は下記の通りです。

- 文章：旧字旧仮名へ変換
- 文章：新字新仮名へ変換
- かな：旧仮名遣いへ変換
- かな：新仮名遣いへ変換
- 漢字：旧漢字へ変換
- 漢字：新漢字へ変換
- 踊り字：旧仮名の踊り字が使われた文を現代表記へ変換
- 踊り字：現代表記を旧仮名の踊り字を使う文へ変換
- 外来語：昔風のカタカナを今風に変換
- 外来語：カタカナ表記を昔風に変換
- 合略仮名：合略仮名が使われた文を現代表記へ変換
- 合略仮名：現代表記を合略仮名を使う文へ変換
- ヤ行エ：ヤ行エが使われた文を現代表記へ変換
- ヤ行エ：現代表記をヤ行エを使う文へ変換

文字列を選択してからコンテキストメニューを表示し、上記のコマンドから希望する変換を選んでください。

## Installation
このページの右側に Releases ページへのリンクがあるのでクリックして移動します。

"vsc-kkh-x.x.x.zip" ファイルをダウンロードします。解凍すると "vsc-kkh-x.x.x.vsix" ファイルになりますので、これを VSCode にインストールします。

VSCode で左側の "Extensions" を開き、「…」のプルダウンメニューから "Install from VSIX..." を選択します。ファイル選択ダイアログが表示されるので、先ほど展開した ".vsix" ファイルを指定すればインストールされます。

## Requirements
他に必要なものはありません。

## Extension Settings
設定する項目はありません。

## Known Issues
コンテキストメニューに居座り続けることになるので、場合によっては目障りになるかもしれません。

すべてを選択してからメニューを実行すれば全文変換となりますが、変換精度はそれほどではないので「少し変換しては目視確認」をすることを推奨します。

「踊り字」「外来語」「合略仮名」「ヤ行エ」については十分なテストがされていません。現状では一方向への変換に対してのみ有効な変換となっています。

## Release Notes
See: [CHANGELOG](CHANGELOG.md)

-------------------------------------------------------------------------------

## Following extension guidelines
内包している辞書データは、[kkh](https://github.com/okikae/kkh) による活動の成果を利用しています。

「辞書が本体」です。

## For more information
- [Github のプロジェクトサイト](https://github.com/okikae)

**Enjoy!**
