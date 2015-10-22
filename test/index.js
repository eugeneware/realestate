var expect = require('expect.js'),
    realestate = require('..');

describe('realestate', function() {
  it('should be able to pull down a page', function(done) {
    var url = 'https://www.realestate.com.au/neighbourhoods/glen%20waverley-3150-vic';
    realestate.trend(url, function (err, data) {
      if (err) return done(err);
      console.log(require('util').inspect(data, { depth: null }));
      expect(data).to.not.be(undefined);
      expect(Object.keys(data['12_months_median'].unit).length).to.be.above(12);
      done();
    });
  });
});
