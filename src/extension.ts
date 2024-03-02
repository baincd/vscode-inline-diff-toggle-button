import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('inline-diff-toggle-button.toggle', () => {
		return vscode.commands.executeCommand('toggle.diff.renderSideBySide');
	});

	context.subscriptions.push(disposable);
}
