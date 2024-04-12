// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { readFile } from "./help";
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "vscode-bugfree" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand("bugfree", () => {
    const content = readFile("default");
    insertContent(content);
  });

  const disposable2 = vscode.commands.registerCommand("bugfree-alpaca", () => {
    const content = readFile("alpaca");
    insertContent(content);
  });

  const disposable3 = vscode.commands.registerCommand("bugfree-god", () => {
    const content = readFile("god");
    insertContent(content);
  });

  context.subscriptions.push(disposable);
  context.subscriptions.push(disposable2);
  context.subscriptions.push(disposable3);
}

function insertContent(content: string) {
  const activeEditor = vscode.window.activeTextEditor;
  if (!activeEditor) {
    vscode.window.showErrorMessage(
      "Can't insert text because no document is open"
    );
    return;
  }
  // 插入内容到文件头部
  activeEditor.edit((editBuilder) => {
    // 将内容插入到文件的开头
    editBuilder.insert(new vscode.Position(0, 0), content);
  });
}
