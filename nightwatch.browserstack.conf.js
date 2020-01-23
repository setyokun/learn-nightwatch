const baseConfig = require('./nightwatch.conf.js');

const nightwatch_config = {
  ...baseConfig,
  webdriver : {
    "start_process" : false,
    "host" : "hub-cloud.browserstack.com",
    "port" : 80
  },
};

// code dibawah ini untuk load username dan key 
nightwatch_config.test_settings.default.desiredCapabilities['browserstack.user'] = process.env.BROWSERSTACK_USER;
nightwatch_config.test_settings.default.desiredCapabilities['browserstack.key'] = process.env.BROWSERSTACK_KEY;
nightwatch_config.test_settings.default.desiredCapabilities.chromeOptions.args = [];

//code dibawah ini untuk menjalankan test di browser firefox 
nightwatch_config.test_settings.firefox = {
  "desiredCapabilities": {
      "os": "Windows",
      "os_version": "10",
      "browserName": "Firefox",
      "browser_version": "72.0",
      "browserstack.local": false
    }
};

//code dibawah ini untuk menjalankan test di browser mifrosoft edge
nightwatch_config.test_settings.edge = {
  "desiredCapabilities": {
      "os": "Windows",
      "os_version": "10",
      "browserName": "Edge",
      "browser_version": "18.0",
      "browserstack.local": false
    }
};

// Code to copy seleniumhost/port into test settings
for (var i in nightwatch_config.test_settings) {
  var test_setting = nightwatch_config.test_settings[i];
  test_setting['selenium_host'] = nightwatch_config.webdriver.host;
  test_setting['selenium_port'] = nightwatch_config.webdriver.port;
}

module.exports = nightwatch_config;
