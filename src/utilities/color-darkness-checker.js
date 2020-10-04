/* eslint-disable no-bitwise */
const lightOrDark = (color) => {
  let red;
  let green;
  let blue;

  let theColor = color;

  if (theColor.match(/^rgb/)) {
    theColor = color.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/,
    );

    const [r, g, b] = theColor;

    red = r;
    green = g;
    blue = b;
  } else {
    theColor = +`0x${theColor
      .slice(1)
      .replace(theColor.length < 5 && /./g, '$&$&')}`;

    red = theColor >> 16;
    green = (theColor >> 8) & 255;
    blue = theColor & 255;
  }

  const hsp = Math.sqrt(
    0.299 * (red * red) + 0.587 * (green * green) + 0.114 * (blue * blue),
  );

  if (hsp > 127.5) {
    return 'light';
  }

  return 'dark';
};

export default lightOrDark;
