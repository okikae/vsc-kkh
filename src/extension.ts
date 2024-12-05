import * as vscode from 'vscode';
import { kanaArray } from "./kanajisyo";
import { kanjiArray } from "./kanjijisyo";

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
            const text = modernToTradFunc(selectedString);
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
            const text = tradToModernFunc(selectedString);
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
            const text = newToOldFunc(selectedString);
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
            const text = oldToNewFunc(selectedString);
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
            const text = modernNewToTradOldFunc(selectedString);
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
            const text = tradOldToModernNewFunc(selectedString);
            editor.edit(editBuilder => {
                editBuilder.replace(selection, text);
            });
        }
        //vscode.window.showInformationMessage('旧字旧仮名から新字新仮名へ変換した');
    });

    // 辞書の大きさをポップアップメッセージに表示
     const showDictSize = vscode.commands.registerCommand('vsc-kkh.showDictSize', function () {
        const message = "かな辞書:" + kanaArray.length + " 漢字辞書:" + kanjiArray.length;
        vscode.window.showInformationMessage(message);
    });

    context.subscriptions.push(modernToTrad, tradToModern, newToOld, oldToNew, modernNewToTradOld, tradOldToModernNew, showDictSize);

    // 新仮名遣いから旧仮名遣いへ変換
    function modernToTradFunc(text:string): string {
        let buf:string = text;
        for (let i = 0; i < kanaArray.length; i++) {
            buf = gsub(buf, kanaArray[i][0], kanaArray[i][1]);
        }
        return buf;
    }

    // 旧仮名遣いから新仮名遣いへ変換
    function tradToModernFunc(text:string): string {
        let buf:string = text;
        for (let i = 0; i < kanaArray.length; i++) {
            buf = gsub(buf, kanaArray[i][1], kanaArray[i][0]);
        }
        return buf;
    }

    // 新漢字から旧漢字へ変換
    function newToOldFunc(text:string): string {
        let buf:string = text;
        for (let i = 0; i < kanjiArray.length; i++) {
            buf = gsub(buf, kanjiArray[i][0], kanjiArray[i][1]);
        }
        return buf;
    }

    // 旧漢字から新漢字へ変換
    function oldToNewFunc(text:string): string {
        let buf:string = text;
        for (let i = 0; i < kanjiArray.length; i++) {
            buf = gsub(buf, kanjiArray[i][1], kanjiArray[i][0]);
        }
        return buf;
    }

    // 新字新仮名から旧字旧仮名へ変換
    function modernNewToTradOldFunc(text:string): string {
        let buf:string = text;
        buf = modernToTradFunc(buf);
        buf = newToOldFunc(buf);
        return buf;
    }

    // 旧字旧仮名から新字新仮名へ変換
    function tradOldToModernNewFunc(text:string): string {
        let buf:string = text;
        buf = tradToModernFunc(buf);
        buf = oldToNewFunc(buf);
        return buf;
    }

    // replaceAll が実装されるまでの一時的な関数
    function gsub(str:string, key:string, val:string): string {
        return str.split(key).join(val);
    }
}

export function deactivate() {
}
