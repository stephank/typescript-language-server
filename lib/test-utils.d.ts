import * as lsp from 'vscode-languageserver/node';
import { LspServer } from './lsp-server';
export declare function getDefaultClientCapabilities(): lsp.ClientCapabilities;
export declare function uri(...components: string[]): string;
export declare function filePath(...components: string[]): string;
export declare function readContents(path: string): string;
export declare function positionAt(document: lsp.TextDocumentItem, idx: number): lsp.Position;
export declare function position(document: lsp.TextDocumentItem, match: string): lsp.Position;
export declare function positionAfter(document: lsp.TextDocumentItem, match: string): lsp.Position;
export declare function lastPosition(document: lsp.TextDocumentItem, match: string): lsp.Position;
export declare function createServer(options: {
    rootUri: string | null;
    tsserverLogVerbosity?: string;
    publishDiagnostics: (args: lsp.PublishDiagnosticsParams) => void;
    clientCapabilitiesOverride?: lsp.ClientCapabilities;
}): Promise<LspServer>;
//# sourceMappingURL=test-utils.d.ts.map