module.exports = {
    '@tags' : ['google'],       //ini adalah syntax agar saat run test bisa spesific ke suatu testnya 
    'Search in Google Advance: Elon Musk'(browser) {
        const words = 'Elon Musk';
        //memanggil page-objectnpom
        const steps = browser.page.elementSelector.googleSelector();
        const validator = browser.page.elementValidator.googleValidator();
        //steps 
        steps 
            .navigate()
            .setFormValue(words)
            .filterLanguage()
            .filterLastUpdate()
            .submit();
        validator
            .validateSteps();
    }
};