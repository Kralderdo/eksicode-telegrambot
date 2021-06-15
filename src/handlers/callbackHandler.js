import { unbanCommand } from '../commands';

const queriesList = {
  unban: unbanCommand,
};

export default async (ctx) => {
  const matchedData = ctx.callbackQuery.data.match(/^(?<type>.+): (?<data>.+)$/).groups;
  await queriesList[matchedData.type](ctx, matchedData.data);
  await ctx.answerCbQuery();
};
