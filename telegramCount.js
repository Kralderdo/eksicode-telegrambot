/* eslint-disable no-await-in-loop */
import path from 'path';
import dotenv from 'dotenv';
import Telegraf from 'telegraf';
import fetch from 'node-fetch';
import { apiAuth } from './src/utils';

dotenv.config({
  path: path.join(__dirname, '.env'),
});

const bot = new Telegraf(process.env.BOT_TOKEN);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

(async () => {
  const jwt = await apiAuth();

  const updateMembers = async (id, members) => {
    try {
      const requestData = {
        members,
      };

      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      };

      fetch(`${process.env.API_URL}/telegrams/${id}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(requestData),
      });
    } catch (err) {
      console.error(err);
    }
  };

  try {
    const groupsRequest = await fetch(`${process.env.API_URL}/telegrams?_sort=ListOrder:ASC`);
    const allGroups = await groupsRequest.json();

    console.log(`toplam kanal sayısı: ${allGroups.length}`);

    for (let i = 0; i < allGroups.length; i += 1) {
      const count = await bot.telegram.getChatMembersCount(allGroups[i].channelID);
      allGroups[i].members = count;
      await sleep(2000);
      updateMembers(allGroups[i].id, allGroups[i].members);
      console.log(`${allGroups[i].name} Güncellendi...`);
    }
  } catch (err) {
    console.error(err);
  }
})();
