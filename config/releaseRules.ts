import { ReleaseRules } from './typings/semantic-release-gitmoji';

const releaseRules = {
    major: {
        include: [":boom:"],
      },
      minor: {
        include: [":sparkles:"],
      },
      patch: {
        include: [
          ":bug:",
          ":ambulance:",
          ":lock:",
          ":recycle:",
          ":lipstick:",
          ":alien:",
          ":package:",
        ],
      }
} as ReleaseRules

export default releaseRules