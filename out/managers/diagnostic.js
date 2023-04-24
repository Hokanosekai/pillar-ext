"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
class DiagnosticManager {
    static constantDeclaration = [];
    static variableDeclaration = [];
    static functionDeclaration = [];
    static importDeclaration = [];
    diagnostics = [];
    diagnosticCollection;
    constructor(diagnosticCollection) {
        this.diagnosticCollection = diagnosticCollection;
    }
    /**
     * Clear all diagnostics
     */
    clear() {
        this.diagnostics = [];
        this.diagnosticCollection.clear();
    }
    /**
     * Clear declaration diagnostics
     */
    clearDeclaration() {
        DiagnosticManager.constantDeclaration = [];
        DiagnosticManager.variableDeclaration = [];
        DiagnosticManager.functionDeclaration = [];
        DiagnosticManager.importDeclaration = [];
    }
    /**
     * Handle all diagnostics
     *
     * @param document
     * @param diagnostics
     * @param diagnosticCollection
     */
    handle(document) {
        this.clear();
        this.clearDeclaration();
        this.constantDeclarationDiagnostic(document);
        this.variableDeclarationDiagnostic(document);
        this.diagnosticCollection.set(document.uri, this.diagnostics);
    }
    /**
     * Check if there is a constant declaration empty
     *
     * @example
     * const a = 1
     * const b // Error
     *
     * @example
     * const a = 1
     * const b = // Error
     *
     * @param document
     */
    constantDeclarationDiagnostic(document) {
        const regex = /const\s+([a-zA-Z0-9_]+)(.*)/g;
        let match;
        while (match = regex.exec(document.getText())) {
            console.log(match[2]);
            if (!match[2].includes('=')) {
                const diagnostic = new vscode.Diagnostic(new vscode.Range(document.positionAt(match.index), document.positionAt(match.index + match[0].length)), `Constant '${match[1]}' has no value`, vscode.DiagnosticSeverity.Error);
                this.diagnostics.push(diagnostic);
            }
        }
    }
    /**
     * Check if there is a variable declaration redifinition
     *
     * @example
     * const a = 1
     * let a // Error
     *
     * @example
     * let a = 1
     * let a = 2 // Error
     *
     * @example
     * const a = 1
     * const a = 2 // Error
     *
     * @param document
     */
    variableDeclarationDiagnostic(document) {
        const regex = /(const|let)\s+([a-zA-Z0-9_]+)/g;
        let match;
        while (match = regex.exec(document.getText())) {
            console.log(match[2], DiagnosticManager.variableDeclaration, DiagnosticManager.constantDeclaration.includes(match[2]));
            if (DiagnosticManager.variableDeclaration.includes(match[2])) {
                const diagnostic = new vscode.Diagnostic(new vscode.Range(document.positionAt(match.index), document.positionAt(match.index + match[0].length)), `Variable '${match[2]}' has already been declared`, vscode.DiagnosticSeverity.Error);
                this.diagnostics.push(diagnostic);
            }
            else {
                DiagnosticManager.variableDeclaration.push(match[2]);
            }
        }
    }
    /**
     * Check if there is a import declaration redifinition
     *
     * @example
     * import Process
     * import Process // Error
     *
     * @example
     * import "example/test.pill"
     * import "example/test.pill" // Error
     *
     * @param document
     */
    importDeclarationDiagnostic(document) {
        const regex = /import\s+([a-zA-Z0-9_]+)(.*)/g;
        let match;
        while (match = regex.exec(document.getText())) {
            if (DiagnosticManager.importDeclaration.includes(match[2])) {
                const diagnostic = new vscode.Diagnostic(new vscode.Range(document.positionAt(match.index), document.positionAt(match.index + match[0].length)), `Import '${match[2]}' has already been declared`, vscode.DiagnosticSeverity.Error);
                this.diagnostics.push(diagnostic);
            }
            else {
                DiagnosticManager.importDeclaration.push(match[2]);
            }
        }
    }
}
exports.default = DiagnosticManager;
