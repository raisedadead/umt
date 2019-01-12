umt
===

freeCodeCamp.org&#39;s user management CLI tool

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/umt.svg)](https://npmjs.org/package/umt)
[![CircleCI](https://circleci.com/gh/raisedadead/umt/tree/master.svg?style=shield)](https://circleci.com/gh/raisedadead/umt/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/raisedadead/umt?branch=master&svg=true)](https://ci.appveyor.com/project/raisedadead/umt/branch/master)
[![Codecov](https://codecov.io/gh/raisedadead/umt/branch/master/graph/badge.svg)](https://codecov.io/gh/raisedadead/umt)
[![Downloads/week](https://img.shields.io/npm/dw/umt.svg)](https://npmjs.org/package/umt)
[![License](https://img.shields.io/npm/l/umt.svg)](https://github.com/raisedadead/umt/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g umt
$ umt COMMAND
running command...
$ umt (-v|--version|version)
umt/0.0.0 darwin-x64 node-v10.13.0
$ umt --help [COMMAND]
USAGE
  $ umt COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`umt get-user [FILE]`](#umt-get-user-file)
* [`umt help [COMMAND]`](#umt-help-command)

## `umt get-user [FILE]`

describe the command here

```
USAGE
  $ umt get-user [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/get-user.ts](https://github.com/raisedadead/umt/blob/v0.0.0/src/commands/get-user.ts)_

## `umt help [COMMAND]`

display help for umt

```
USAGE
  $ umt help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.4/src/commands/help.ts)_
<!-- commandsstop -->
