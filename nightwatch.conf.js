module.exports = {
  "src_folders" : ["tests"], //folder yang digunakan untuk acuan test
  "page_objects_path" : ["page-objects"], //folder yang digunakan untuk page-object di load

  "webdriver" : {
    "start_process": true,
    "server_path": "node_modules/.bin/chromedriver", //path chrome driver 
    "port": 9515
  },

  "test_settings" : {
    "default" : {
      "screenshot" : {
        "enabled" : true,
        "on_failure" : true,
        "on_error" : true,
        "path" : "tests_output"
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "chromeOptions": {
          // "args": ["--headless"], //--headless : agar ketika script test di run tidak muncul browsernya 
          // "prefs": {
          //   "intl": {
          //     "accept_languages": "en-GB"
          //   }
          // }          
        }
        
      }
    }
  }
}