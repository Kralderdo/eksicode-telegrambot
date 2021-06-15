import path from 'path';
import { config } from 'dotenv';
import Telegraf from 'telegraf';
import { cmd, utils, handlers } from './src';

config({
  path: path.join(__dirname, '.env'),
});

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(async (ctx, next) => {
  await utils.log(ctx);
  await next();
});

bot.command('ban', (ctx) => utils.forAdmins(ctx, cmd.banCommand));
bot.command('unban', (ctx) => utils.forAdmins(ctx, cmd.unbanCommand));
bot.command('pin', (ctx) => utils.forAdmins(ctx, cmd.pinCommand));
bot.command('kontrol', (ctx) => utils.forAdmins(ctx, cmd.kontrolCommand));
bot.command('yardim', (ctx) => cmd.helpCommand(ctx));
bot.command('help', (ctx) => cmd.helpCommand(ctx));

bot.on(['new_chat_members', 'left_chat_member'], (ctx) => handlers.joinedLeftUserHandler(ctx));

bot.on('text', (ctx) => handlers.textHandler(ctx));

bot.on('callback_query', handlers.callbackHandler);

bot.launch();
