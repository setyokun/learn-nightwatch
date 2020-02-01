require('dotenv').config();

module.exports = {
  src_folders: ['tests'], // folder yang digunakan untuk acuan test
  page_objects_path: ['page-objects'], // folder yang digunakan untuk page-object di load

  webdriver: {
    start_process: true,
    server_path: 'node_modules/.bin/chromedriver', // path chrome driver
    port: 9515,
  },

  test_settings: {
    default: {
      screenshots: {
        enabled: true,
        path: 'tests_output',
      },
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['--headless'], // --headless : agar ketika script test di run tidak muncul browsernya
        },
      },
    },
  },
};
