import { cmd } from '..';
import { forAdmins } from '../utils';
import { easterEggHandler } from '.';

const commands = {
  '!kaynak': cmd.SourceBot,
  '!grup': cmd.GroupBot,
  '!yardim': cmd.helpCommand,
  '!help': cmd.helpCommand,
  '!discord': cmd.discordCommand,
  '!duyuru': cmd.announcementCommand,
  '!youtube': cmd.youtubeCommand,
  '!twitter': cmd.twitterCommand,
  '!github': cmd.githubCommand,
  '!report': cmd.reportCommand,
  '!hastebinize': cmd.hastebinizeCommand,
};

const adminOnly = [
  '!hastebinize',
];

function textHandler(ctx) {
  const message = ctx.message.text;
  const command = message.split(' ')[0];
  if (command in commands) {
    if (adminOnly.includes(command)) {
      return forAdmins(ctx, commands[command]);
    }
    try {
      return new commands[command](ctx);
    } catch (e) {
      return commands[command](ctx);
    }
  } else {
    return easterEggHandler(ctx);
  }
}

export default textHandler;
