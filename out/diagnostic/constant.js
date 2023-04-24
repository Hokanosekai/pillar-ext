"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constantDeclarationDiagnostic = exports.variableDeclarationDiagnostic = void 0;
const vscode = require("vscode");
const constantDeclaration = [];
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
 * @param collection
 */
const variableDeclarationDiagnostic = (document, collection) => {
    const diagnostics = [];
    const regex = /(const|let)\s+([a-zA-Z0-9_]+)/g;
    let match;
    while (match = regex.exec(document.getText())) {
        console.log(match[2], constantDeclaration, constantDeclaration.includes(match[2]));
        if (constantDeclaration.includes(match[2])) {
            const diagnostic = new vscode.Diagnostic(new vscode.Range(document.positionAt(match.index), document.positionAt(match.index + match[0].length)), `Variable '${match[2]}' has already been declared`, vscode.DiagnosticSeverity.Error);
            diagnostics.push(diagnostic);
        }
        else {
            constantDeclaration.push(match[2]);
        }
    }
    collection.set(document.uri, diagnostics);
};
exports.variableDeclarationDiagnostic = variableDeclarationDiagnostic;
/**
 * Check if there is a constant declaration empty
 *
 * @example
 * const a = 1
 * const b = 2
 * const c // Error
 *
 * @param document
 * @param collection
 */
const constantDeclarationDiagnostic = (document, collection) => {
    const diagnostics = [];
    const regex = /const\s+([a-zA-Z0-9_]+)\s*=\s*$/g;
    let match;
    while (match = regex.exec(document.getText())) {
        const diagnostic = new vscode.Diagnostic(new vscode.Range(document.positionAt(match.index), document.positionAt(match.index + match[0].length)), `Constant '${match[1]}' must be initialized`, vscode.DiagnosticSeverity.Error);
        diagnostics.push(diagnostic);
    }
};
exports.constantDeclarationDiagnostic = constantDeclarationDiagnostic;
