module.exports = {
    url: 'https://www.google.com/advanced_search',
    elements: {
         //code dibawah ini adalah element selector
        selectorWords : '[name="as_q"]',
        dropdownLanguage  : '[id="lr_button"]',
        listDropdownLanguage :  '.goog-menuitem[value="lang_it"]',
        dropdownLastUpdate : '[id="as_qdr_button"]',
        listDropdownLastUpdate : '#as_qdr_menu [value="w"]',
        buttonSubmit : '[type="submit"]',
    },
    //pada commands dibawah ini berisi tentang commands-command yang nantinya dipakai di test/steps
    commands : [{
        setFormValue(value){
            return this
                .setValue('@selectorWords',value);
        },
        filterLanguage() {
            return this 
                .click('@dropdownLanguage')
                .click('@listDropdownLanguage');
        },
        filterLastUpdate() {
            return this 
                .click('@dropdownLastUpdate')
                .click('@listDropdownLastUpdate');
        },
        submit() {
            return this 
                .click('@buttonSubmit');
        },    
    }]
}; 

