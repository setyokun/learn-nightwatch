const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

const steps = client.page.elementSelector.googleSelector();
const validator = client.page.elementValidator.googleValidator();


Given(/^I open google advanced search page$/, () => {
    return steps.navigate();
});

When(/^I input "([^"]*)" in google advanced form$/, (title) => {
    return steps
    .setFormValue(title)
    .filterLanguage()
    .filterLastUpdate()
    .submit();
});

Then(/^Result about Elon Musk appear$/, async () => {
    return validator.validateSteps();
});
