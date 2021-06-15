import fetch from 'node-fetch';

// Will turn `text` into a hastebin document.
// Should return a Hastebin URL.

export default async (text) => {
  try {
    const requestToHastebin = await fetch('https://hastebin.com/documents', {
      method: 'POST',
      body: text,
    });

    const response = await requestToHastebin.json();

    return `https://hastebin.com/${response?.key}`;
  } catch (err) {
    console.error(err);
    return err;
  }
};
