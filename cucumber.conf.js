const { setDefaultTimeout, AfterAll, BeforeAll } = require('cucumber');
const { createSession, closeSession, startWebDriver, stopWebDriver } = require('nightwatch-api');

//cucumber menset timeout 60 detik
setDefaultTimeout(60000);

//sebelum menjalankan testnya , cucumber terlebih dahulu menjalankan web driver dan kemudian membuat session 
BeforeAll(async () => {
  await startWebDriver();
  await createSession();
});

//setelah testnya selesai, cucumber akan menutup session yang tadi dibuat dan memberhentikan/stop web driver
AfterAll(async () => {
  await closeSession();
  await stopWebDriver();
});