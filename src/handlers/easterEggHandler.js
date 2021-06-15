import regex from '../utils/regexUtils';

const boomerRegex = regex`
(B|ß)
(o|о|ó|ò|ô|ȯ|ȱ|ö|ȫ|ǒ|ŏ|ō|õ|ȭ|ő|ọ|ǿ|ơ|u|ú|ù|û|ü|ǔ|ŭ|ū|ũ|ű|ů|ụ)+
(m)+
(ğ)*
(e|é|è|ė|ê|ë|ě|ĕ|ē|ẽ|e|ẹ|ı|i|í|ì|i|î|ï|ǐ|ĭ|ī|ĩ|ị)+
(r)
`;

const jsSartmiRegex = regex`(js [sş]art m[ıi])`;

const iHaveAQuestionRegex = regex`
bi(rşey|şey| şey|r şey|şiy| şiy|şi| şi|' şey|'şey) 
sor(ucam|acağım|acam|cam|ucağım|abilirmiyim|abilir miyim|ammı|am mı|ayım mı|ayımmı)`;

function jsSartMiHandler(ctx) {
  const jsSartMiMatch = ctx.message.text.match(jsSartmiRegex);
  const iHaveAQuestionMatch = ctx.message.text.match(iHaveAQuestionRegex);
  const boomerMatch = ctx.message.text.match(boomerRegex);
  // switch-case?
  try {
    if (jsSartMiMatch) {
      const randomNum = Math.floor(Math.random() * 1000);
      ctx.reply(randomNum > 995 ? 'Değil.' : 'Şart.');
    } else if (iHaveAQuestionMatch) {
      ctx.reply('Haydi, sor sor!');
    } else if (boomerMatch) {
      ctx.reply('Boomer babandır...');
    }
  } catch (err) {
    console.error(err);
  }
}

export default jsSartMiHandler;
