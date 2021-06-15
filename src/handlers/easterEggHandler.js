export default (ctx) => {
  const jsSartMiMatch = ctx.message.text.match(/(js [sş]art m[ıi])/gmi);
  const iHaveAQuestionMatch = ctx.message.text.match(/bi(rşey|şey| şey|r şey|şiy| şiy|şi| şi|' şey|'şey) sor(ucam|acağım|acam|cam|ucağım|abilirmiyim|abilir miyim)/gmi);
  try {
    if (jsSartMiMatch) {
      const randomNum = Math.floor(Math.random() * 1000);
      ctx.reply(randomNum > 995 ? 'Değil.' : 'Şart.');
    } else if (iHaveAQuestionMatch) {
      ctx.reply('Haydi, sor sor!');
    }
  } catch (err) {
    console.error(err);
  }
};
