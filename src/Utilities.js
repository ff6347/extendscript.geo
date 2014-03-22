/**
 * This is Utilities.js
 * The built-in projections.
 * @see AEMAP.Geo.Projection
 * @namespace
 */
Geo.Utilities = {
};

Geo.Utilities.radians = function (degrees) {
  return degrees * Math.PI / 180;
};

Geo.Utilities.map = function (value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
};