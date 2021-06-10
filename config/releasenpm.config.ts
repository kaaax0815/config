import { Options } from "semantic-release";
import { readFileSync } from "fs";
import dateFormat from "dateformat";
import { join } from "path";
import releaseRules from './releaseRules';
import { SemanticReleaseGitmojiOptions } from './typings/semantic-release-gitmoji';

const template = readFileSync(
  join(__dirname, "helpers", "default-template.hbs")
).toString();
const commitTemplate = readFileSync(
  join(__dirname, "helpers", "commit-template.hbs")
).toString();

const options: Options = {
  plugins: [
    [
      "semantic-release-gitmoji",
      {
        releaseRules: releaseRules,
        releaseNotes: {
          template,
          partials: { commitTemplate },
          helpers: {
            datetime: (format = "UTC:yyyy-mm-dd") =>
              dateFormat(new Date(), format),
          },
          issueResolution: {
            template: "{baseUrl}/{owner}/{repo}/issues/{ref}",
            baseUrl: "https://github.com",
            source: "github.com",
          },
        },
      } as SemanticReleaseGitmojiOptions,
    ],
    "@semantic-release/github",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    [
      "@semantic-release/npm",
      {
        npmPublish: !!process.env.NPM_TOKEN,
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json", "package-lock.json"],
        message: ":bookmark: Release v${nextRelease.version} [skip ci]",
      },
    ],
  ],
};

export const npm: Options = {
  ...options,
  branches: ["main"],
};