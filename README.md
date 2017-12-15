# nm-commands-web
A collection of command aliases that can speed up development

## Instuctions

1. Run `npm i`
1. Run `npm link`

Use any of the global commands found here in package.json in any project.

```json
  "bin": {
    "nb": "./commands/new-branch.js",
    "push": "./commands/push-changes.js"
    ... etc
  }
```

Create a new Branch from Master

```
$ nb test
Already on 'master'
Your branch is up-to-date with 'origin/master'.
From https://github.com/a/b
 * branch            master     -> FETCH_HEAD
Already up-to-date.
Switched to a new branch 'test'
```

Add, Commit and push in one go

```
$ push "Create a, b and c"
```