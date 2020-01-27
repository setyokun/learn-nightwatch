const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');


Given(/^I open hacker news page$/, () => {
    return client.url('https://news.ycombinator.com/');
});

When(/^I validate Content$/, () => {
    return client.waitForElementVisible('.hnname');
});

Then(/^Success to validate$/,  () => {
 return client.assert.containsText('.hnname',"Hacker News");
});


