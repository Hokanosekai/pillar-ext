import * as vscode from 'vscode';

export const processProvider = vscode.languages.registerCompletionItemProvider(
  'pillar',
  {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
      const linePrefix = document.lineAt(position).text.substr(0, position.character);
      if (!linePrefix.endsWith('Process.')) {
        return undefined;
      }

      return [
        new vscode.CompletionItem('write()', vscode.CompletionItemKind.Method),
        new vscode.CompletionItem('wait()', vscode.CompletionItemKind.Method)
      ];
    }
  },
  '.'
);