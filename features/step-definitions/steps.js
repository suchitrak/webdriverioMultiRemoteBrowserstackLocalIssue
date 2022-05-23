import { Given, When, Then } from '@wdio/cucumber-framework';

Given(/^I am on the (\w+) page$/, async (page) => {
    // await myChromeBrowser.url(`https://the-internet.herokuapp.com/${page}`);
    // await myFirefoxBrowser.url(`https://google.com`);

    await browser[`userA`].url(`https://the-internet.herokuapp.com/${page}`);
    await browser[`userB`].url(`https://google.com`);
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await browser[`userA`].$('#username').setValue(username);
    await browser[`userA`].$('#password').setValue(password);
    await browser[`userA`].$('button[type="submit"]').click();
    await browser[`userB`].refresh()
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect($('#flash')).toBeExisting();
    await expect($('#flash')).toHaveTextContaining(message);
});

