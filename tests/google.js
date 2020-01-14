module.exports={
    '@tags' : ['google','cok'],
    'Search in Google Advance: Elon Musk'(browser) {
        const selectorWords = '[name="as_q"]'
        const valueWords = 'Elon Musk'
        const dropdownLanguage = '[id="lr_button"]'
        const listDropdownLanguage = '.goog-menuitem[value="lang_it"]'
        const dropdownLastUpdate = '[id="as_qdr_button"]'
        const listDropdownLastUpdate = '#as_qdr_menu [value="w"]'
        const buttonSubmit = '[type="submit"]'
        const UISearchValue = `[title="Search"][value="${valueWords}"]`
        const UILanguage = '[aria-label="Search Italian pages"]'
        const UILastUpdate = '[aria-label="Past week"]'

        
        browser 
            .url('https://www.google.com/advanced_search')
            .setValue(selectorWords, valueWords)
            .click(dropdownLanguage)
            .click(listDropdownLanguage)
            .click(dropdownLastUpdate)
            .click(listDropdownLastUpdate)
            .click(buttonSubmit)
            .assert.urlContains('as_q=Elon+Musk','Params Value : Elon Musk')
            .assert.urlContains('lr=lang_it','Params Language : Italia')
            .assert.urlContains('as_qdr=w','Params Last Update :  Week')
            .assert.visible(UISearchValue,'UI : Elon Musk is set in Search Form')
            .assert.containsText(UILanguage,"Search Italian pages",'UI : Language is Italian')
            .assert.containsText(UILastUpdate,'Past week','UI : Language is Italian')
            .saveScreenshot('tests_output/google.png')

    }
}