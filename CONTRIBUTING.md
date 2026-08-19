# Contributing to Buff LEO
Thank you for your interest in contributing! The goal of this extension is to add useful features to the LEO platform that help TDC tutors deliver a better learning experience for their students. Even though not all suggestions will be accepted, everyone's input is valued.

## Setup Guide
Make sure you have [Node.js](https://nodejs.org/en) and [pnpm](https://pnpm.io/) installed.

1. Fork this repository.
2. Clone your forked repo.
3. In the project root folder, run `pnpm install`.
4. Run `pnpm build`.
5. Load the `dist` folder as an unpacked extension in your browser.
6. To make repo contributions, create a new branch on your fork and commit changes there. Once ready, you can open a pull request (PR).
7. As you make local changes, you'll need to rebuild the project and reload the extension in the browser to test.

## Rules
Please read all the rules and adhere to them when contributing.

- This extension must NEVER send data to any servers outside of the **tutor.com** domain.
- Only the repository owner (Nielam-Dass) can modify the `manifest.json` and workflow YML files.
- All contributions must be in American English.
- Source code should be written in TypeScript and documented through comments.
- Before opening a PR, test your changes in the browser to make sure your code works as intended.
- All PRs must reference an issue it is addressing. The referenced issue should be assigned to the PR author.
- Keep changes small and focused to one specific purpose.
- AI-assisted development is permitted, but changes should be thoroughly reviewed by a human before submission. Files meant for coding agents (e.g. `AGENTS.md` or `CLAUDE.md`) should be ignored.
- Be respectful to other contributors.

## Branch Naming
When creating a new branch for a PR, the name should follow the format `<category>/<short-description-of-change>`.

**Category options:**
- `feature` - New feature
- `hotfix` - Critical patches to restore proper functionality
- `bugfix` - Minor patches
- `docs` - Fixing documentation (includes comments)
- `chore` - Maintenance task

**Good examples**:
- `feature/add-shortcut-for-marker-tool`
- `hotfix/fix-pen-shortcut`
- `chore/update-readme-with-new-instructions`

**Bad examples**:
- `feature/my-new-feature` (Description is vague)
- `hotfix/fix-typo-in-comments` (Wrong category)
- `delete-legacy-feature` (No category provided)

## Raising Issues
Issues can report a bug, request a new feature, or suggest a task to complete. Avoid creating duplicate issues by checking previous issues (both open and closed) to see if it has been mentioned before. If it has, you can increase its visibility through reactions or comments.

Issue descriptions should be sufficiently detailed. For bug reports, include a list of steps to reproduce the error. For features requests, describe what the feature does and how the user interaction works. For tasks, explain why the change should be made.

If you want a change in the `manifest.json` file, include the prefix **[MANIFEST CHANGE PROPOSAL]** in the issue name.

If you want a change in the workflow files, include the prefix **[WORKFLOW CHANGE PROPOSAL]** in the issue name.

If you'd like to work on a PR addressing the issue, please indicate it in the description. If you see an unassigned issue and would like to work on it, leave a comment indicating your interest. Assignment is not guaranteed, but you will get priority during consideration.
