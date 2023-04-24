
import * as vscode from 'vscode';
import { windowsProvider } from './completions/windows';
import { processProvider } from './completions/process';
import { keyboardProvider, keysProvider } from './completions/keyboard';
import DiagnosticManager from './managers/diagnostic';

const diagnosticManager = new DiagnosticManager(vscode.languages.createDiagnosticCollection('pillar'));

export function activate(context: vscode.ExtensionContext) {
  if (vscode.workspace.getConfiguration('pillar').get('enable')) {
    context.subscriptions.push(processProvider, keyboardProvider, keysProvider, windowsProvider);
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
