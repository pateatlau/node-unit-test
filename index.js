function hsl2rgb(hsl) {
  var hsl = hsl || [];
  var h = hsl[0] || 1;
  var s = hsl[1] || 1;
  var l = hsl[2] || 1;

  var r = h, g = s, b = l; // NOTE: temp...

  //... HSL -> RGB logic ...

  return [ r, g, b ];
}

module.exports = hsl2rgb;

