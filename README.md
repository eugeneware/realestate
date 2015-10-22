# realestate

Get price history from realestate.com.au

[![build status](https://secure.travis-ci.org/eugeneware/realestate.png)](http://travis-ci.org/eugeneware/realestate)

## Installation

This module is installed via npm:

``` bash
$ npm install realestate
```

## Example Usage

Call the `#trend` function with the full URL of the realestate.com.au
neighbourhood stats URL.

``` js
var url = 'https://www.realestate.com.au/neighbourhoods/glen%20waverley-3150-vic';
realestate.trend(url, function (err, data) {
  if (err) throw err;
  console.log(data);
/*
{ '12_months_median':
   { unit:
      { '2006-12-31': { price: 390000, count: 117 },
        '2007-12-31': { price: 420000, count: 159 },
        '2008-12-31': { price: 456500, count: 128 },
        '2009-12-31': { price: 460000, count: 191 },
        '2010-12-31': { price: 484500, count: 154 },
        '2011-12-31': { price: 499500, count: 176 },
        '2012-12-31': { price: 507500, count: 144 },
        '2013-12-31': { price: 597500, count: 178 },
        '2014-12-31': { price: 633000, count: 222 },
        '2014-10-31': { price: 622500, count: 230 },
        '2014-11-30': { price: 626400, count: 227 },
        '2015-01-31': { price: 640000, count: 218 },
        '2015-02-28': { price: 640000, count: 209 },
        '2015-03-31': { price: 660000, count: 216 },
        '2015-04-30': { price: 665750, count: 212 },
        '2015-05-31': { price: 671000, count: 208 },
        '2015-06-30': { price: 670000, count: 207 },
        '2015-07-31': { price: 669500, count: 200 },
        '2015-08-31': { price: 685000, count: 189 },
        '2015-09-30': { price: 720000, count: 165 },
        '2015-10-19': { price: 727000, count: 168, latest_point_in_time: true } },
     house:
      { '2006-12-31': { price: 450000, count: 330 },
        '2007-12-31': { price: 570000, count: 373 },
        '2008-12-31': { price: 600750, count: 254 },
        '2009-12-31': { price: 652000, count: 381 },
        '2010-12-31': { price: 737000, count: 353 },
        '2011-12-31': { price: 710000, count: 323 },
        '2012-12-31': { price: 719000, count: 372 },
        '2013-12-31': { price: 815000, count: 517 },
        '2014-12-31': { price: 980500, count: 658 },
        '2014-10-31': { price: 955000, count: 631 },
        '2014-11-30': { price: 980000, count: 634 },
        '2015-01-31': { price: 1000000, count: 649 },
        '2015-02-28': { price: 1000000, count: 648 },
        '2015-03-31': { price: 1024957, count: 656 },
        '2015-04-30': { price: 1050444, count: 670 },
        '2015-05-31': { price: 1080000, count: 668 },
        '2015-06-30': { price: 1100000, count: 673 },
        '2015-07-31': { price: 1115000, count: 657 },
        '2015-08-31': { price: 1125500, count: 632 },
        '2015-09-30': { price: 1150000, count: 593 },
        '2015-10-19': { price: 1150000, count: 597, latest_point_in_time: true } } } }
*/
});
```
