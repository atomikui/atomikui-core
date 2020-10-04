/* eslint-disable prefer-destructuring */
/* eslint-disable no-bitwise */
const lightOrDark = (color) => {
  let r;
  let g;
  let b;

  let theColor = color;

  if (theColor.match(/^rgb/)) {
    theColor = color.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/,
    );

    r = theColor[1];
    g = theColor[2];
    b = theColor[3];
  } else {
    theColor = +`0x${theColor
      .slice(1)
      .replace(theColor.length < 5 && /./g, '$&$&')}`;

    r = theColor >> 16;
    g = (theColor >> 8) & 255;
    b = theColor & 255;
  }

  const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  if (hsp > 127.5) {
    return 'light';
  }

  return 'dark';
};

export default lightOrDark;
