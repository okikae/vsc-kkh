import * as vscode from 'vscode';
import { toTradKanaArray } from "./totradkanajisyo";
import { toModernKanaArray } from "./tomodernkanajisyo";
import { toOldKanjiArray } from "./tooldkanjijisyo";
import { toNewKanjiArray } from "./tonewkanjijisyo";
import { odoriEnhanceArray } from "./odorienhancejisyo";
import { gairaiEnhanceArray } from "./gairaienhancejisyo";
import { gouryakuEnhanceArray } from "./gouryakuenhancejisyo";
import { yeEnhanceArray } from "./yeenhancejisyo";

export function activate(context: vscode.ExtensionContext) {
    console.log('my extension "vsc-kkh" is now active!');

    // 選択した文字列を変更する下記のサンプルを参考にした
    // https://github.com/microsoft/vscode-extension-samples/tree/main/document-editing-sample

    // 新仮名遣いを旧仮名遣いに変換
    const modernToTrad = vscode.commands.registerCommand('vsc-kkh.modernToTrad', function () {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            const selectedString = document.getText(selection);
            const text = replaceStrings(selectedString, toTradKanaArray, "normal");
            editor.edit(editBuilder => {
                editBuilder.replace(selection, text);
            });
        }
        //vscode.window.showInformationMessage('新仮名から旧仮名へ変換した');
    });

    // 旧仮名遣いを新仮名遣いに変換
    const tradToModern = vscode.commands.registerCommand('vsc-kkh.tradToModern', function () {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            const selectedString = document.getText(selection);
            const text = replaceStrings(selectedString, toModernKanaArray, "normal");
            editor.edit(editBuilder => {
                editBuilder.replace(selection, text);
            });
        }
        //vscode.window.showInformationMessage('旧仮名から新仮名へ変換した');
    });

    // 新漢字を旧漢字に変換
    const newToOld = vscode.commands.registerCommand('vsc-kkh.newToOld', function () {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            const selectedString = document.getText(selection);
            const text = replaceStrings(selectedString, toOldKanjiArray, "normal");
            editor.edit(editBuilder => {
                editBuilder.replace(selection, text);
            });
        }
        //vscode.window.showInformationMessage('新漢字から旧漢字へ変換した');
    });

    // 旧漢字を新漢字に変換
    const oldToNew = vscode.commands.registerCommand('vsc-kkh.oldToNew', function () {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            const selectedString = document.getText(selection);
            const text = replaceStrings(selectedString, toNewKanjiArray, "normal");
            editor.edit(editBuilder => {
                editBuilder.replace(selection, text);
            });
        }
        //vscode.window.showInformationMessage('旧漢字から新漢字へ変換した');
    });

    // 新字新仮名遣いを旧字旧仮名遣いに変換
    const modernNewToTradOld = vscode.commands.registerCommand('vsc-kkh.modernNewToTradOld', function () {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            const selectedString = document.getText(selection);
            let tmpBuf = replaceStrings(selectedString, toTradKanaArray, "normal");
            const text = replaceStrings(tmpBuf, toOldKanjiArray, "normal");
            editor.edit(editBuilder => {
                editBuilder.replace(selection, text);
            });
        }
        //vscode.window.showInformationMessage('新字新仮名から旧字旧仮名へ変換した');
    });

    // 旧字旧仮名遣いを新字新仮名遣いに変換
    const tradOldToModernNew = vscode.commands.registerCommand('vsc-kkh.tradOldToModernNew', function () {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            const selectedString = document.getText(selection);
            let tmpBuf = replaceStrings(selectedString, toNewKanjiArray, "normal");
            const text = replaceStrings(tmpBuf, toModernKanaArray, "normal");
            editor.edit(editBuilder => {
                editBuilder.replace(selection, text);
            });
        }
        //vscode.window.showInformationMessage('旧字旧仮名から新字新仮名へ変換した');
    });

    // 旧仮名の踊り字が使われた文を現代表記へ変換
    const odoriToNew = vscode.commands.registerCommand('vsc-kkh.odoriToNew', function () {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            const selectedString = document.getText(selection);
            const text = replaceStrings(selectedString, odoriEnhanceArray, "reverse");
            editor.edit(editBuilder => {
                editBuilder.replace(selection, text);
            });
        }
        //vscode.window.showInformationMessage('旧仮名の踊り字が使われた文を現代表記へ変換した');
    });

    // 現代表記を旧仮名の踊り字を使った文をへ変換
    const odoriToOld = vscode.commands.registerCommand('vsc-kkh.odoriToOld', function () {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            const selectedString = document.getText(selection);
            const text = replaceStrings(selectedString, odoriEnhanceArray, "normal");
            editor.edit(editBuilder => {
                editBuilder.replace(selection, text);
            });
        }
        //vscode.window.showInformationMessage('現代表記を旧仮名の踊り字を使った文をへ変換した');
    });

        // 昔風のカタカナを今風に変換
        const gairaiToNew = vscode.commands.registerCommand('vsc-kkh.gairaiToNew', function () {
            const editor = vscode.window.activeTextEditor;
            if (editor) {
                const document = editor.document;
                const selection = editor.selection;
                const selectedString = document.getText(selection);
                const text = replaceStrings(selectedString, gairaiEnhanceArray, "reverse");
                editor.edit(editBuilder => {
                    editBuilder.replace(selection, text);
                });
            }
            //vscode.window.showInformationMessage('昔風のカタカナを今風に変換した');
        });

        // カタカナ表記を昔風に変換
        const gairaiToOld = vscode.commands.registerCommand('vsc-kkh.gairaiToOld', function () {
            const editor = vscode.window.activeTextEditor;
            if (editor) {
                const document = editor.document;
                const selection = editor.selection;
                const selectedString = document.getText(selection);
                const text = replaceStrings(selectedString, gairaiEnhanceArray, "normal");
                editor.edit(editBuilder => {
                    editBuilder.replace(selection, text);
                });
            }
            //vscode.window.showInformationMessage('カタカナを昔風に変換した');
        });

        // 合略仮名が使われた文を現代表記へ変換
        const gouryakuToNew = vscode.commands.registerCommand('vsc-kkh.gouryakuToNew', function () {
            const editor = vscode.window.activeTextEditor;
            if (editor) {
                const document = editor.document;
                const selection = editor.selection;
                const selectedString = document.getText(selection);
                const text = replaceStrings(selectedString, gouryakuEnhanceArray, "reverse");
                editor.edit(editBuilder => {
                    editBuilder.replace(selection, text);
                });
            }
            //vscode.window.showInformationMessage('合略仮名が使われた文を現代表記へ変換した');
        });

        // 現代表記を合略仮名を使う文へ変換
        const gouryakuToOld = vscode.commands.registerCommand('vsc-kkh.gouryakuToOld', function () {
            const editor = vscode.window.activeTextEditor;
            if (editor) {
                const document = editor.document;
                const selection = editor.selection;
                const selectedString = document.getText(selection);
                const text = replaceStrings(selectedString, gouryakuEnhanceArray, "normal");
                editor.edit(editBuilder => {
                    editBuilder.replace(selection, text);
                });
            }
            //vscode.window.showInformationMessage('現代表記を合略仮名を使う文へ変換した');
        });

        // ヤ行エが使われた文を現代表記へ変換
        const yeToNew = vscode.commands.registerCommand('vsc-kkh.yeToNew', function () {
            const editor = vscode.window.activeTextEditor;
            if (editor) {
                const document = editor.document;
                const selection = editor.selection;
                const selectedString = document.getText(selection);
                const text = replaceStrings(selectedString, yeEnhanceArray, "reverse");
                editor.edit(editBuilder => {
                    editBuilder.replace(selection, text);
                });
            }
            //vscode.window.showInformationMessage('ヤ行エが使われた文を現代表記へ変換した');
        });

        // 現代表記をヤ行エを使う文へ変換
        const yeToOld = vscode.commands.registerCommand('vsc-kkh.yeToOld', function () {
            const editor = vscode.window.activeTextEditor;
            if (editor) {
                const document = editor.document;
                const selection = editor.selection;
                const selectedString = document.getText(selection);
                const text = replaceStrings(selectedString, yeEnhanceArray, "normal");
                editor.edit(editBuilder => {
                    editBuilder.replace(selection, text);
                });
            }
            //vscode.window.showInformationMessage('ヤ行エが使われた文を現代表記へ変換した');
        });

        // 辞書の大きさをポップアップメッセージに表示
     const showDictSize = vscode.commands.registerCommand('vsc-kkh.showDictSize', function () {
        const message =
        "かな辞書(旧→新)： " + toModernKanaArray.length +
        "\nかな辞書(新→旧)： " + toTradKanaArray.length +
        "\n漢字辞書(旧→新)： " + toNewKanjiArray.length +
        "\n漢字辞書(新→旧)： " + toOldKanjiArray.length +
        "\n拡張辞書(踊り字)： " + odoriEnhanceArray.length +
        "\n拡張辞書(外来語)： " + gairaiEnhanceArray.length +
        "\n拡張辞書(合略仮名)： " + gouryakuEnhanceArray.length +
        "\n拡張辞書(ヤ行エ)： " + yeEnhanceArray.length;
         vscode.window.showInformationMessage(message, {modal: true});
    });

    context.subscriptions.push(modernToTrad, tradToModern,
        newToOld, oldToNew,
        modernNewToTradOld, tradOldToModernNew,
        odoriToNew, odoriToOld,
        gairaiToNew, gairaiToOld,
        gouryakuToNew, gouryakuToOld,
        yeToNew, yeToOld,
        showDictSize);

    // 文字列を変換する関数
    function replaceStrings(selectedText: string, jisyo: [string, string, string[]][], flag: string): string {
        let buf: string = selectedText;
        for (let i = 0; i < jisyo.length; i++) {
            if (flag === "normal") {
                buf = gsub(buf, jisyo[i][0], jisyo[i][1]);
            } else if (flag === "reverse") {
                buf = gsub(buf, jisyo[i][1], jisyo[i][0]);
            } else {
            }
        }
        return buf;
    }

    // replaceAll が実装されるまでの一時的な関数
    function gsub(str:string, key:string, val:string): string {
        return str.split(key).join(val);
    }
}

export function deactivate() {
}
