const {Command, flags} = require('@oclif/command')
const send = require('./lib/sender')
const receive = require('./lib/receiver')
const fs = require('fs')

class RelayerCommand extends Command {
  async run() {
    const {flags} = this.parse(RelayerCommand)
    this.log(`Hello! ./bin/run -h for more infomation`)
    if (flags.send) {
      send(flags.send)
      // console.log(flags.send);
    } else if (flags.rec) {
      // console.log(flags.rec);
      receive.main(flags.rec)
    } else if (flags.getName) {
      console.log(fs.readFileSync("./src/buf/send.txt", "utf8").split("\n\n")[0]);
    } else if (flags.decode) {
      receive.decode()
    }
  }
}

RelayerCommand.description = `Welcome to Relayer-cli 1.0.0
...
Get your personal public key and private key first, and place it to ./
and Rename as public.key and private.key.
`

RelayerCommand.args = [{name: "param"}, ]

RelayerCommand.flags = {
  version: flags.version({char: 'v'}),
  help: flags.help({char: 'h'}),
  name: flags.string({char: 'n', description: 'name to print', multiple: true,}),
  send: flags.string({char: 's', description: 'Send file with local Public key'}),
  rec: flags.string({char: 'r', description: 'Receive file'}),
  getName: flags.boolean({char: 'n', description: 'Read Author list'}),
  decode: flags.boolean({char: 'd', description: 'Decrypt file'})
}

module.exports = RelayerCommand
