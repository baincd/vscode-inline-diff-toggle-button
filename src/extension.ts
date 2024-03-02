import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(
		vscode.commands.registerCommand('inline-diff-toggle-button.toggle-to-side-by-side', () => {
			return vscode.commands.executeCommand('toggle.diff.renderSideBySide');
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('inline-diff-toggle-button.toggle-to-inline', () => {
			return vscode.commands.executeCommand('toggle.diff.renderSideBySide');
		})
	);
}
