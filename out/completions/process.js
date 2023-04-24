"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processProvider = void 0;
const vscode = require("vscode");
exports.processProvider = vscode.languages.registerCompletionItemProvider('pillar', {
    provideCompletionItems(document, position) {
        const linePrefix = document.lineAt(position).text.substr(0, position.character);
        if (!linePrefix.endsWith('Process.')) {
            return undefined;
        }
        return [
            new vscode.CompletionItem('write()', vscode.CompletionItemKind.Method),
            new vscode.CompletionItem('wait()', vscode.CompletionItemKind.Method)
        ];
    }
}, '.');
