import tsp from 'typescript/lib/protocol';
import * as lsp from 'vscode-languageserver/node';
import { Logger } from './logger';
import { EventTypes } from './tsp-command-types';
import { LspDocuments } from './document';
declare class FileDiagnostics {
    protected readonly uri: string;
    protected readonly publishDiagnostics: (params: lsp.PublishDiagnosticsParams) => void;
    protected readonly documents: LspDocuments;
    protected readonly publishDiagnosticsCapabilities: lsp.TextDocumentClientCapabilities['publishDiagnostics'];
    private readonly diagnosticsPerKind;
    constructor(uri: string, publishDiagnostics: (params: lsp.PublishDiagnosticsParams) => void, documents: LspDocuments, publishDiagnosticsCapabilities: lsp.TextDocumentClientCapabilities['publishDiagnostics']);
    update(kind: EventTypes, diagnostics: tsp.Diagnostic[]): void;
    protected readonly firePublishDiagnostics: () => Promise<void>;
    getDiagnostics(): lsp.Diagnostic[];
}
export declare class DiagnosticEventQueue {
    protected readonly publishDiagnostics: (params: lsp.PublishDiagnosticsParams) => void;
    protected readonly documents: LspDocuments;
    protected readonly publishDiagnosticsCapabilities: lsp.TextDocumentClientCapabilities['publishDiagnostics'];
    protected readonly logger: Logger;
    protected readonly diagnostics: Map<string, FileDiagnostics>;
    private ignoredDiagnosticCodes;
    constructor(publishDiagnostics: (params: lsp.PublishDiagnosticsParams) => void, documents: LspDocuments, publishDiagnosticsCapabilities: lsp.TextDocumentClientCapabilities['publishDiagnostics'], logger: Logger);
    updateDiagnostics(kind: EventTypes, event: tsp.DiagnosticEvent): void;
    updateIgnoredDiagnosticCodes(ignoredCodes: readonly number[]): void;
    getDiagnosticsForFile(file: string): lsp.Diagnostic[];
    private isDiagnosticIgnored;
}
export {};
//# sourceMappingURL=diagnostic-queue.d.ts.map