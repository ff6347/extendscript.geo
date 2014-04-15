/**
 * This is Projections for InDesign
 * The built-in projections.
 * @see Geo.Projections
 * @namespace
 */
Geo.projections.ind = function () {};
Geo.projections.ind.equirectangular = {
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
  toIDPage: function (doc, latlng, page) {

    // return {
    //   "x": x,
    //   "y": y
    // };
  }
};

// /** @see http://en.wikipedia.org/wiki/Gall-Peters_projection */
Geo.projections.ind.gallpeters = {
  toIDPage: function (doc, latlng, page) {

  }

};

// /** @see http://en.wikipedia.org/wiki/Sinusoidal_projection */
Geo.projections.ind.sinusoidal = {
  toIDPage: function (doc, latlng, page) {


  }

};

// /** @see http://en.wikipedia.org/wiki/Aitoff_projection */
Geo.projections.ind.aitoff = {

  toIDPage: function (doc, latlng, page) {

  },
};


// /** @see http://en.wikipedia.org/wiki/Hammer_projection */
Geo.projections.ind.hammer = {

  toIDPage: function (doc, latlng, page) {}

};

// END OF AfterEffects.js