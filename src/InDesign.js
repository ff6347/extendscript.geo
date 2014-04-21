/**
 * This is Projections for InDesign
 * The built-in projections.
 * @see Geo.Projections
 * @namespace
 */
Geo.projections.ind = function () {};
Geo.projections.ind.equirectangular = {
  "name": "equirectangular",
  toIDPage: function (doc, latlng, page) {
    var w = doc.documentPreferences.pageWidth;
    var h = doc.documentPreferences.pageHeight;
    var xoff = (w / 2);
    var yoff = (h / 2);
    var x = (latlng.lng) + xoff;
    var y = (latlng.lat * -1) + yoff;
    return {
      "x": x,
      "y": y
    };
  }
};
/** @see http://en.wikipedia.org/wiki/Mercator_projection */
Geo.projections.ind.mercator = {
  name: "mercator",
  toIDPage: function (doc, latlng, page) {
    var w = doc.documentPreferences.pageWidth;
    var h = doc.documentPreferences.pageHeight;
    // taken from here http://stackoverflow.com/questions/1019997/convert-lat-longs-to-x-y-co-ordinates/1020681#1020681
    // Mercator projection
    // longitude: just scale and shift
    var x = (180 + latlng.lng) * (w / 360);

    // latitude: using the Mercator projection
    var latrad = Geo.Utilities.radians(latlng.lat); // convert from degrees to radians

    var mercN = Math.log(Math.tan((Math.PI / 4) + (latrad / 2))); // do the Mercator projection (w/ equator of 2pi units)
    var y = (h / 2) - (w * mercN / (2 * Math.PI)); // fit it to our map

    return {
      "x": x,
      "y": y
    };
  }
};

// /** @see http://en.wikipedia.org/wiki/Gall-Peters_projection */
Geo.projections.ind.gallpeters = {
  name: "gallpeters",
  toIDPage: function (doc, latlng, page) {
    var w = doc.documentPreferences.pageWidth;
    var h = doc.documentPreferences.pageHeight;
    // based on this
    // https://developers.google.com/maps/documentation/javascript/examples/map-projection-simple
    var xoff = (w / 2);
    var yoff = (h / 2);
    // var _scale = scale * 1000;
    // var x = ((latlng.lng) * scale) + xoff;
    var x = xoff + (((w / 360) * latlng.lng));
    // var y = ((latlng.lat * -1) * scale) + yoff;
    var latRadians = Geo.Utilities.radians(latlng.lat);
    var y = yoff - ((h / 2) * Math.sin(latRadians));
    return {
      "x": x,
      "y": y
    };
  }

};

// /** @see http://en.wikipedia.org/wiki/Sinusoidal_projection */
Geo.projections.ind.sinusoidal = {
  name: "sinusoidal",
  toIDPage: function (doc, latlng, page) {
    var w = doc.documentPreferences.pageWidth;
    var h = doc.documentPreferences.pageHeight;

    var xy = {
      x: Geo.Utilities.radians(latlng.lng) * Math.cos(Geo.Utilities.radians(latlng.lat)) / Math.PI,
      y: latlng.lat / 90
    };

    xy.x = Geo.Utilities.map(xy.x, -1, 1, 0, w);
    xy.y = Geo.Utilities.map(xy.y * -1, -1, 1, 0, h);
    return xy;
  }

};

// /** @see http://en.wikipedia.org/wiki/Aitoff_projection */
Geo.projections.ind.aitoff = {
  name: "aitoff",
  toIDPage: function (doc, latlng, page) {
    var w = doc.documentPreferences.pageWidth;
    var h = doc.documentPreferences.pageHeight;
    var l = Geo.Utilities.radians(latlng.lng),
      f = Geo.Utilities.radians(latlng.lat),
      a = Math.acos(Math.cos(f) * Math.cos(l / 2));

    var xy = {
      x: 2 * (a ? (Math.cos(f) * Math.sin(l / 2) * a / Math.sin(a)) : 0) / Math.PI,
      y: 2 * (a ? (Math.sin(f) * a / Math.sin(a)) : 0) / Math.PI
    };
    xy.x = Geo.Utilities.map(xy.x, -1, 1, 0, w);
    xy.y = Geo.Utilities.map(xy.y * -1, -1, 1, 0, h);
    return xy;
  },
};


// /** @see http://en.wikipedia.org/wiki/Hammer_projection */
Geo.projections.ind.hammer = {
  name: "hammer",
  toIDPage: function (doc, latlng, page) {
    var w = doc.documentPreferences.pageWidth;
    var h = doc.documentPreferences.pageHeight;
    var l = Geo.Utilities.radians(latlng.lng),
      f = Geo.Utilities.radians(latlng.lat),
      c = Math.sqrt(1 + Math.cos(f) * Math.cos(l / 2));
    var xy = {
      x: 2 * Math.SQRT2 * Math.cos(f) * Math.sin(l / 2) / c / 3,
      y: Math.SQRT2 * Math.sin(f) / c / 1.5
    };
    xy.x = Geo.Utilities.map(xy.x, -1, 1, 0, w);
    xy.y = Geo.Utilities.map(xy.y * -1, -1, 1, 0, h);

    return xy;
  }

};

// END OF AfterEffects.js