
const fs = require('fs');
const {
  setDefaultTimeout, After, AfterAll, BeforeAll,
} = require('cucumber');
const {
  createSession,
  closeSession,
  startWebDriver,
  stopWebDriver,
  getNewScreenshots,
} = require('nightwatch-api');
const reporter = require('cucumber-html-reporter');

// cucumber menset timeout 60 detik
setDefaultTimeout(60000);

// sebelum menjalankan testnya , cucumber terlebih dahulu menjalankan web driver dan kemudian membuat session
BeforeAll(async () => {
  await startWebDriver();
  await createSession();
});

// setelah testnya selesai, cucumber akan menutup session yang tadi dibuat dan memberhentikan/stop web driver, kemudian langsung load report
AfterAll(async () => {
  await closeSession();
  await stopWebDriver();
  setTimeout(() => {
    reporter.generate({
      theme: 'bootstrap',
      jsonFile: 'report/cucumber_report.json',
      output: 'report/cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
        'App Version': '1.0.0',
        'Test Environment': 'Google Production',
      },
    });
  }, 1000);
});

// untuk create screenshot baru ketika test dijalankan
After(function () {
  getNewScreenshots().forEach((file) => this.attach(fs.readFileSync(file), 'image/png'));
});
