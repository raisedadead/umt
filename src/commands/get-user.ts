import {Command, flags} from '@oclif/command'

export default class GetUser extends Command {
  static description = 'Get details for a freeCodeCamp user.'

  static flags = {
    help: flags.help({char: 'h'}),
    username: flags.string({char: 'n', description: 'username to print'})
  }

  async run() {
    const {args, flags} = this.parse(GetUser)
    const username = flags.username || 'camperbot'

    this.log('args: ', args)
    this.log('flags: ', flags)
    this.log('username: ', username)

  }
}
