module.exports = {
  '@tags': ['firstTest'],
  'My first testcase': function(browser) {
    browser
      .url('https://news.ycombinator.com/') // membuka link url tersebut
      .waitForElementVisible('.hnname') // menunggu element selectornya muncul
      .assert.containsText('.hnname', 'Hacker News'); // validasi text yang ada pada web tersebut
  },
};
