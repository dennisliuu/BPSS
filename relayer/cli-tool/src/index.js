const {Command, flags} = require('@oclif/command')
// const generator = require('./lib/generatorKey')
const send = require('./lib/sender')
const receive = require('./lib/receiver')
const fs = require('fs')

class RelayerCommand extends Command {
  async run() {
    const {args, flags} = this.parse(RelayerCommand)
    const name = flags.name || 'world'
    // this.log(`hello ${name} from ./src/index.js`)
    // this.log(args)
    this.log(`Hello! ./bin/run -h for more infomation`)
    if (flags.send) {
      send(args.param)
    } else if (flags.rec) {
      receive.main(flags.param)
    } else if (flags.getName) {
      console.log(fs.readFileSync("./src/buf/send.txt", "utf8").split("\n\n")[0]);
    } else if (flags.decode) {
      receive.decode()
    }
  }
}

// RelayerCommand.description = `Describe the command here
// ...
// Extra documentation goes here
// `

RelayerCommand.args = [{name: "param"}, ]

RelayerCommand.flags = {
  version: flags.version({char: 'v'}),
  help: flags.help({char: 'h'}),
  // name: flags.string({char: 'n', description: 'name to print', multiple: true,}),
  // gen: flags.boolean({char: 'g', description: 'Get new key'}),
  send: flags.boolean({char: 's', description: 'Send file with local Public key'}),
  rec: flags.boolean({char: 'r', description: 'Receive file'}),
  getName: flags.boolean({char: 'n', description: 'Read Author list'}),
  decode: flags.boolean({char: 'd', description: 'Decrypt file'})
}

module.exports = RelayerCommand
