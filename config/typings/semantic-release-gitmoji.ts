export interface SemanticReleaseGitmojiOptions {
    releaseRules?: ReleaseRules
    releaseNotes?: ReleaseNotesOptions
}

export interface ReleaseRules {
    major?:      Array<Emoji> | EmojiArrayModifier
    premajor?:   Array<Emoji> | EmojiArrayModifier
    minor?:      Array<Emoji> | EmojiArrayModifier
    preminor?:   Array<Emoji> | EmojiArrayModifier
    patch?:      Array<Emoji> | EmojiArrayModifier
    prepatch?:   Array<Emoji> | EmojiArrayModifier
    prerelease?: Array<Emoji> | EmojiArrayModifier
}

interface EmojiArrayModifier {
    include?: Array<Emoji>
    exclude?: Array<Emoji>
}

type Emoji = string

interface ReleaseNotesOptions {
    template?: TemplateContent
    partials?: Record<string, TemplateContent>
    helpers?: Record<string, Function>
    issueResolution?: {
        template?: string
        baseUrl?: string
        source?: 'github.com' | null // currently only GitHub is supported, PR welcome :)
    }
}

type TemplateContent = string | Buffer | Promise<string> | Promise<Buffer>