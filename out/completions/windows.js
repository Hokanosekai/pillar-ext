"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.windowsProvider = void 0;
const vscode = require("vscode");
exports.windowsProvider = vscode.languages.registerCompletionItemProvider('pillar', {
    provideCompletionItems(document, position) {
        const linePrefix = document.lineAt(position).text.substr(0, position.character);
        if (!linePrefix.endsWith('Windows.')) {
            return undefined;
        }
        return [
            new vscode.CompletionItem('powershell()', vscode.CompletionItemKind.Method),
            new vscode.CompletionItem('cmd()', vscode.CompletionItemKind.Method),
            new vscode.CompletionItem('explorer()', vscode.CompletionItemKind.Method),
            new vscode.CompletionItem('open()', vscode.CompletionItemKind.Method),
            new vscode.CompletionItem('shutdown()', vscode.CompletionItemKind.Method),
            new vscode.CompletionItem('restart()', vscode.CompletionItemKind.Method),
            new vscode.CompletionItem('lock()', vscode.CompletionItemKind.Method),
            new vscode.CompletionItem('sleep()', vscode.CompletionItemKind.Method),
            new vscode.CompletionItem('hibernate()', vscode.CompletionItemKind.Method),
            new vscode.CompletionItem('logoff()', vscode.CompletionItemKind.Method),
            new vscode.CompletionItem('volumeSet()', vscode.CompletionItemKind.Method),
            new vscode.CompletionItem('openApp()', vscode.CompletionItemKind.Method),
        ];
    }
}, '.');
