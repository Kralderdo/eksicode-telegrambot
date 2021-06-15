import fetch from 'node-fetch';

async function apiAuth() {
  try {
    const auth = await fetch(`${process.env.API_URL}/auth/local`, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: process.env.API_USER,
        password: process.env.API_PASS,
      }),
    });

    return await auth.json().jwt;
  } catch (err) {
    console.log('API Yetkilendirmesi esnasında bir hata oluştu.');
    console.error(err);
    return 0;
  }
}

export default apiAuth;
