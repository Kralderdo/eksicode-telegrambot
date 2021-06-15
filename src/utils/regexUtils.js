const clean = (piece) => (piece
  .replace(/((^|\n)(?:[^\/\\]|\/[^*\/]|\\.)*?)\s*\/\*(?:[^*]|\*[^\/])*(\*\/|)/g, '$1')
  .replace(/((^|\n)(?:[^\/\\]|\/[^\/]|\\.)*?)\s*\/\/[^\n]*/g, '$1')
  .replace(/\n\s*/g, '')
);

const regex = ({ raw }, ...interpolations) => (
  new RegExp(interpolations.reduce(
    (rgx, insert, index) => (rgx + insert + clean(raw[index + 1])),
    clean(raw[0]),
  ), 'gmi')
);

export default regex;
