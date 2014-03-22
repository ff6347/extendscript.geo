/**
 * This is Projections.js
 * The built-in projections.
 * @see AEMAP.Geo.Projection
 * @namespace
 */
Geo.projections = {
  /** The identity or "none" projection. */
  equirectangular: {
    toAESpace: function (latlng, scale, comp_w, comp_h) {

      var xoff = (comp_w / 2);
      var yoff = (comp_h / 2);
      // var _scale = scale * 1000;
      var x = ((latlng.lng) * scale) + xoff;
      var y = ((latlng.lat * -1) * scale) + yoff;

      return {
        "x": x,
        "y": y
      };

    },
    project: function (latlng) {
      return {
        x: latlng.lng,
        y: latlng.lat
      };
    },
    invert: function (xy) {
      return {
        lng: xy.x,
        lat: xy.y
      };
    }
  },
  /** @see http://en.wikipedia.org/wiki/Mercator_projection */
  mercator: {
    toAESpace: function (latlng, scale, comp_w, comp_h) {
      // taken from here http://stackoverflow.com/questions/1019997/convert-lat-longs-to-x-y-co-ordinates/1020681#1020681
      // Mercator projection

      // longitude: just scale and shift
      var x = (180 + latlng.lng) * (comp_w / 360);

      // latitude: using the Mercator projection
      var latrad = AEMAP.Utilities.radians(latlng.lat); // convert from degrees to radians

      var mercN = Math.log(Math.tan((Math.PI / 4) + (latrad / 2))); // do the Mercator projection (w/ equator of 2pi units)
      var y = (comp_h / 2) - (comp_w * mercN / (2 * Math.PI)); // fit it to our map


      // draw_point(x - half_dot, y - half_dot);
      return {
        "x": x,
        "y": y
      };

    },


    project: function (latlng) {


      return {
        x: latlng.lng,
        y: latlng.lat > 85 ? 1 : latlng.lat < -85 ? -1 : Math.log(Math.tan(Math.PI / 4 + AEMAP.Utilities.radians(latlng.lat) / 2)) / Math.PI
      };
    },
    // invert: function (xy) {
    //   return {
    //     lng: xy.x * 180,
    //     lat: AEMAP.Utilities.degrees(2 * Math.atan(Math.exp(xy.y * Math.PI)) - Math.PI / 2)
    //   };
    // }
  },

  // /** @see http://en.wikipedia.org/wiki/Gall-Peters_projection */
  "gall-peters": {

    toAESpace: function (latlng, scale, comp_w, comp_h) {
      // based on this
      // https://developers.google.com/maps/documentation/javascript/examples/map-projection-simple
      var xoff = (comp_w / 2);
      var yoff = (comp_h / 2);
      // var _scale = scale * 1000;
      // var x = ((latlng.lng) * scale) + xoff;
      var x = xoff + (((comp_w / 360) * latlng.lng));
      // var y = ((latlng.lat * -1) * scale) + yoff;
      var latRadians = AEMAP.Utilities.radians(latlng.lat);
      var y = yoff - ((comp_h / 2) * Math.sin(latRadians));
      return {
        "x": x,
        "y": y
      };

    },
    project: function (latlng) {
      return {
        x: latlng.lng / 180,
        y: Math.sin(AEMAP.Utilities.radians(latlng.lat))
      };
    },

    // invert: function (xy) {
    //   return {
    //     lng: xy.x * 180,
    //     lat: AEMAP.Utilities.degrees(Math.asin(xy.y))
    //   };
    // }
  },

  // /** @see http://en.wikipedia.org/wiki/Sinusoidal_projection */
  sinusoidal: {
    project: function (latlng) {
      return {
        x: AEMAP.Utilities.radians(latlng.lng) * Math.cos(AEMAP.Utilities.radians(latlng.lat)) / Math.PI,
        y: latlng.lat / 90
      };
    },
    // invert: function (xy) {
    //   return {
    //     lng: AEMAP.Utilities.degrees((xy.x * Math.PI) / Math.cos(xy.y * Math.PI / 2)),
    //     lat: xy.y * 90
    //   };
    // }
  },

  // /** @see http://en.wikipedia.org/wiki/Aitoff_projection */
  aitoff: {
    project: function (latlng) {
      var l = AEMAP.Utilities.radians(latlng.lng),
        f = AEMAP.Utilities.radians(latlng.lat),
        a = Math.acos(Math.cos(f) * Math.cos(l / 2));
      return {
        x: 2 * (a ? (Math.cos(f) * Math.sin(l / 2) * a / Math.sin(a)) : 0) / Math.PI,
        y: 2 * (a ? (Math.sin(f) * a / Math.sin(a)) : 0) / Math.PI
      };
    },
    // invert: function (xy) {
    //   var x = xy.x * Math.PI / 2,
    //     y = xy.y * Math.PI / 2;
    //   return {
    //     lng: AEMAP.Utilities.degrees(x / Math.cos(y)),
    //     lat: AEMAP.Utilities.degrees(y)
    //   };
    // }
  },

  // eckert1: {
  //   project: function (latlng) {

  //     var alpha = Math.sqrt(8 / (3 * Math.PI));
  //     return {

  //       x: alpha * latlng.lat * (1 - Math.abs(latlng.lng) / Math.PI),
  //       y: alpha * latlng.lng
  //     };

  //   }
  // },

  // /** @see http://en.wikipedia.org/wiki/Hammer_projection */
  "hammer": {
    toAESpace: function (latlng, scale, comp_w, comp_h) {
      var l = Geo.Utilities.radians(latlng.lng),
        f = Geo.Utilities.radians(latlng.lat),
        c = Math.sqrt(1 + Math.cos(f) * Math.cos(l / 2));
        var xy = {
          x: 2 * Math.SQRT2 * Math.cos(f) * Math.sin(l / 2) / c / 3,
          y: Math.SQRT2 * Math.sin(f) / c / 1.5
        };
        xy.x = Geo.Utilities.map_range(xy.x, -1, 1, 0, comp_w);
        xy.y = Geo.Utilities.map_range(xy.y*-1, -1, 1, 0, comp_h);

        return xy;
    },
    project: function (latlng) {
      var l = AEMAP.Utilities.radians(latlng.lng),
        f = AEMAP.Utilities.radians(latlng.lat),
        c = Math.sqrt(1 + Math.cos(f) * Math.cos(l / 2));
      return {
        x: 2 * Math.SQRT2 * Math.cos(f) * Math.sin(l / 2) / c / 3,
        y: Math.SQRT2 * Math.sin(f) / c / 1.5
      };
    },
    // invert: function (xy) {
    //   var x = xy.x * 3,
    //     y = xy.y * 1.5,
    //     z = Math.sqrt(1 - x * x / 16 - y * y / 4);
    //   return {
    //     lng: AEMAP.Utilities.degrees(2 * Math.atan2(z * x, 2 * (2 * z * z - 1))),
    //     lat: AEMAP.Utilities.degrees(Math.asin(z * y))
    //   };
    // }
  },

};

// END OF Projections.js