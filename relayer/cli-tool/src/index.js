const {Command, flags} = require('@oclif/command')
const send = require('./lib/sender')
const receive = require('./lib/receiver')
const fs = require('fs')

class RelayerCommand extends Command {
  async run() {
    const {flags} = this.parse(RelayerCommand)
    this.log(`Hello! ./bin/run -h for more infomation`)
    if (flags.send) {
      send(flags.send[0], flags.send[1])
    } else if (flags.rec) {
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
[+] Use ssh-keygen and copy id_rsa and id_rsa.pub in .config/
`

RelayerCommand.args = [{name: "param"}, ]

RelayerCommand.flags = {
  version: flags.version({char: 'v'}),
  help: flags.help({char: 'h'}),
  send: flags.string({char: 's', description: 'Send file with local Public key [./relayer ORCID PDF]', multiple: true}),
  rec: flags.string({char: 'r', description: 'Receive file [./relayer IP]'}),
  getName: flags.boolean({char: 'n', description: 'Read Author list'}),
  decode: flags.boolean({char: 'd', description: 'Decrypt file'})
}

module.exports = RelayerCommand
