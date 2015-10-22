var request = require('request'),
    cheerio = require('cheerio');

module.exports.trend = function (url, cb) {
  request(url, function (err, res, body) {
    if (err) return cb(err);
    var $ = cheerio.load(body);
    var payload = $('.median-price-subsections.trend').attr('data-trend');
    try {
      var data = JSON.parse(payload);
      return cb(null, data);
    } catch (e) {
      return cb(e);
    }
  });
};
