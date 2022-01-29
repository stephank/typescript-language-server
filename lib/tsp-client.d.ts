/// <reference types="node" />
import protocol from 'typescript/lib/protocol';
import { CommandTypes } from './tsp-command-types';
import { Logger } from './logger';
import { CancellationToken } from 'vscode-jsonrpc';
export interface TspClientOptions {
    logger: Logger;
    tsserverPath: string;
    logFile?: string;
    logVerbosity?: string;
    disableAutomaticTypingAcquisition?: boolean;
    maxTsServerMemory?: number;
    npmLocation?: string;
    globalPlugins?: string[];
    pluginProbeLocations?: string[];
    onEvent?: (event: protocol.Event) => void;
    onExit?: (exitCode: number | null, signal: NodeJS.Signals | null) => void;
}
interface TypeScriptRequestTypes {
    'geterr': [protocol.GeterrRequestArgs, any];
    'compilerOptionsForInferredProjects': [protocol.SetCompilerOptionsForInferredProjectsArgs, protocol.SetCompilerOptionsForInferredProjectsResponse];
    'documentHighlights': [protocol.DocumentHighlightsRequestArgs, protocol.DocumentHighlightsResponse];
    'applyCodeActionCommand': [protocol.ApplyCodeActionCommandRequestArgs, protocol.ApplyCodeActionCommandResponse];
    'completionEntryDetails': [protocol.CompletionDetailsRequestArgs, protocol.CompletionDetailsResponse];
    'completionInfo': [protocol.CompletionsRequestArgs, protocol.CompletionInfoResponse];
    'configure': [protocol.ConfigureRequestArguments, protocol.ConfigureResponse];
    'definition': [protocol.FileLocationRequestArgs, protocol.DefinitionResponse];
    'definitionAndBoundSpan': [protocol.FileLocationRequestArgs, protocol.DefinitionInfoAndBoundSpanReponse];
    'docCommentTemplate': [protocol.FileLocationRequestArgs, protocol.DocCommandTemplateResponse];
    'format': [protocol.FormatRequestArgs, protocol.FormatResponse];
    'formatonkey': [protocol.FormatOnKeyRequestArgs, protocol.FormatResponse];
    'getApplicableRefactors': [protocol.GetApplicableRefactorsRequestArgs, protocol.GetApplicableRefactorsResponse];
    'getCodeFixes': [protocol.CodeFixRequestArgs, protocol.CodeFixResponse];
    'getCombinedCodeFix': [protocol.GetCombinedCodeFixRequestArgs, protocol.GetCombinedCodeFixResponse];
    'getEditsForFileRename': [protocol.GetEditsForFileRenameRequestArgs, protocol.GetEditsForFileRenameResponse];
    'getEditsForRefactor': [protocol.GetEditsForRefactorRequestArgs, protocol.GetEditsForRefactorResponse];
    'getOutliningSpans': [protocol.FileRequestArgs, protocol.OutliningSpansResponse];
    'getSupportedCodeFixes': [null, protocol.GetSupportedCodeFixesResponse];
    'implementation': [protocol.FileLocationRequestArgs, protocol.ImplementationResponse];
    'jsxClosingTag': [protocol.JsxClosingTagRequestArgs, protocol.JsxClosingTagResponse];
    'navto': [protocol.NavtoRequestArgs, protocol.NavtoResponse];
    'navtree': [protocol.FileRequestArgs, protocol.NavTreeResponse];
    'occurrences': [protocol.FileLocationRequestArgs, protocol.OccurrencesResponse];
    'organizeImports': [protocol.OrganizeImportsRequestArgs, protocol.OrganizeImportsResponse];
    'projectInfo': [protocol.ProjectInfoRequestArgs, protocol.ProjectInfoResponse];
    'quickinfo': [protocol.FileLocationRequestArgs, protocol.QuickInfoResponse];
    'references': [protocol.FileLocationRequestArgs, protocol.ReferencesResponse];
    'rename': [protocol.RenameRequestArgs, protocol.RenameResponse];
    'signatureHelp': [protocol.SignatureHelpRequestArgs, protocol.SignatureHelpResponse];
    'typeDefinition': [protocol.FileLocationRequestArgs, protocol.TypeDefinitionResponse];
    'provideInlayHints': [protocol.InlayHintsRequestArgs, protocol.InlayHintsResponse];
    'encodedSemanticClassifications-full': [protocol.EncodedSemanticClassificationsRequestArgs, protocol.EncodedSemanticClassificationsResponse];
}
export declare class TspClient {
    private options;
    private readlineInterface;
    private tsserverProc;
    private seq;
    private readonly deferreds;
    private logger;
    private tsserverLogger;
    private cancellationPipeName;
    constructor(options: TspClientOptions);
    start(): boolean;
    shutdown(): void;
    notify(command: CommandTypes.Open, args: protocol.OpenRequestArgs): void;
    notify(command: CommandTypes.Close, args: protocol.FileRequestArgs): void;
    notify(command: CommandTypes.Saveto, args: protocol.SavetoRequestArgs): void;
    notify(command: CommandTypes.Change, args: protocol.ChangeRequestArgs): void;
    request<K extends keyof TypeScriptRequestTypes>(command: K, args: TypeScriptRequestTypes[K][0], token?: CancellationToken): Promise<TypeScriptRequestTypes[K][1]>;
    protected sendMessage(command: string, notification: boolean, args?: any): void;
    protected processMessage(untrimmedMessageString: string): void;
    private resolveResponse;
    private isEvent;
    private isResponse;
    private isRequestCompletedEvent;
}
export {};
//# sourceMappingURL=tsp-client.d.ts.map