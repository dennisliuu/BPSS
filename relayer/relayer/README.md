relayer
=======

Sender - Receiver

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/relayer.svg)](https://npmjs.org/package/relayer)
[![Downloads/week](https://img.shields.io/npm/dw/relayer.svg)](https://npmjs.org/package/relayer)
[![License](https://img.shields.io/npm/l/relayer.svg)](https://github.com/dennisliuu/relayer/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g relayer
$ relayer COMMAND
running command...
$ relayer (-v|--version|version)
relayer/0.0.0 linux-x64 node-v11.12.0
$ relayer --help [COMMAND]
USAGE
  $ relayer COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`relayer hello [FILE]`](#relayer-hello-file)
* [`relayer help [COMMAND]`](#relayer-help-command)

## `relayer hello [FILE]`

describe the command here

```
USAGE
  $ relayer hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ relayer hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/dennisliuu/relayer/blob/v0.0.0/src/commands/hello.ts)_

## `relayer help [COMMAND]`

display help for relayer

```
USAGE
  $ relayer help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_
<!-- commandsstop -->
