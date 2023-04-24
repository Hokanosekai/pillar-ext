"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const windows_1 = require("./completions/windows");
const process_1 = require("./completions/process");
const keyboard_1 = require("./completions/keyboard");
const diagnostic_1 = require("./managers/diagnostic");
const diagnosticManager = new diagnostic_1.default(vscode.languages.createDiagnosticCollection('pillar'));
function activate(context) {
    if (vscode.workspace.getConfiguration('pillar').get('enable')) {
        context.subscriptions.push(process_1.processProvider, keyboard_1.keyboardProvider, keyboard_1.keysProvider, windows_1.windowsProvider);
    }
    if (vscode.window.activeTextEditor) {
        diagnosticManager.handle(vscode.window.activeTextEditor.document);
    }
    context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(editor => {
        if (editor) {
            diagnosticManager.handle(editor.document);
        }
    }));
}
exports.activate = activate;
