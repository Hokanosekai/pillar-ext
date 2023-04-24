"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keysProvider = exports.keyboardProvider = void 0;
const vscode = require("vscode");
exports.keyboardProvider = vscode.languages.registerCompletionItemProvider('pillar', {
    provideCompletionItems(document, position) {
        const linePrefix = document.lineAt(position).text.substr(0, position.character);
        if (!linePrefix.endsWith('Keyboard.')) {
            return undefined;
        }
        return [
            new vscode.CompletionItem('press()', vscode.CompletionItemKind.Method),
        ];
    }
}, '.');
exports.keysProvider = vscode.languages.registerCompletionItemProvider('pillar', {
    provideCompletionItems(document, position) {
        const linePrefix = document.lineAt(position).text.substr(0, position.character);
        if (!linePrefix.endsWith('Keys.')) {
            return undefined;
        }
        return [
            new vscode.CompletionItem('Shift', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('Control', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('Alt', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('Ctrl', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('Windows', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('Gui', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('CtrlAlt', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('CtrlShift', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('AltGui', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('GuiShift', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('GuiCtrl', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('AltChar', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('AltString', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('AltCode', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('ArrowDown', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('ArrowLeft', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('ArrowRight', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('ArrowUp', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('Down', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('Left', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('Right', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('Up', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('Enter', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('Delete', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('BackSpace', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('End', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('Home', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('Escape', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('Esc', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('Insert', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('PageUp', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('PageDown', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('CapsLock', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('NumLock', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('ScrollLock', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('PrintScreen', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('Pause', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('Break', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('Space', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('Tab', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('Menu', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('App', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('F1', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('F2', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('F3', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('F4', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('F5', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('F6', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('F7', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('F8', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('F9', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('F10', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('F11', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('F12', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('A', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('B', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('C', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('D', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('E', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('F', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('G', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('H', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('I', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('J', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('K', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('L', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('M', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('N', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('O', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('P', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('Q', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('R', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('S', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('T', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('U', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('V', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('W', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('X', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('Y', vscode.CompletionItemKind.EnumMember),
            new vscode.CompletionItem('Z', vscode.CompletionItemKind.EnumMember),
        ];
    }
}, '.');
