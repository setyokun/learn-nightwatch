const words = 'Elon Musk';
module.exports = {
    elements: {
        //code dibawah ini adalah element validator        
        UISearchValue: `[title="Search"][value="${words}"]`,
        UILanguage :'[aria-label="Search Italian pages"]',
        UILastUpdate: '[aria-label="Past week"]',
    },
    commands : [{
        validateSteps() { 
            return this
            .assert.urlContains('as_q=Elon+Musk','Params Value : Elon Musk')
            .assert.urlContains('lr=lang_it','Params Language : Italia')
            .assert.urlContains('as_qdr=w','Params Last Update :  Week')
            .assert.visible('@UISearchValue','UI : Elon Musk is set in Search Form')
            .assert.containsText('@UILanguage',"Search Italian pages",'UI : Language is Italian')
            .assert.containsText('@UILastUpdate','Past week','UI : Last Update in Week')
            .saveScreenshot('tests_output/google.png');
        }     
    }]
}; 

