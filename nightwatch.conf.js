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
      "desiredCapabilities": {
        "browserName": "chrome",
        "chromeOptions": {
          "args": ["--lang=en-GB"], //agar bahasa pada chromerdriver berubah menjadi bahasa inggris
          "prefs": {
            "intl": {
              "accept_languages": "en-GB"
            }
          }          
        }
        
      }
    }
  }
}