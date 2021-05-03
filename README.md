# config

## 💻 Usage

Install the package as a dev dependency from [npm](https://www.npmjs.com/package/@kaaaxcreators/config):

```bash
npm install --save-dev @kaaaxcreators/config
```

### Semantic Release

I use [Semantic Release](https://github.com/semantic-release/semantic-release) for automated deployments of my packages. The configuration adds support for [Gitmoji](https://gitmoji.carloscuesta.me) commits, creating release notes with a `CHANGELOG.md`, and publishing to GitHub and npm.

Create a Semantic Release config file `release.config.js` in the project root. Branch is main

```js
module.exports = require("@betahuhn/config").releaseMain;
```

Here are all the emojis which trigger a new release:

**Major:**

- :boom: = Introduce breaking changes

**Minor:**

- :sparkles: = Introduce new features

**Patch:**

- :bug: = Bug fix
- :ambulance: = Critical hotfix
- :lock: = Fix security issues
- :recycle: = Refactor code
- :lipstick: = Add/update the UI and style files
- :alien: = Update code due to external API changes
- :package: = Add/Update compiled files or package

## 📄 License & Credits

All Credits goes to [BetaHuhn](https://github.com/BetaHuhn). I only changed branch to main and removed eslint
[MIT](https://github.com/BetaHuhn/config/blob/master/LICENSE) © [Maximilian Schiller](https://github.com/betahuhn) and [Koj](https://koj.co)
