import { Given, When, Then } from 'cucumber';

Given(/^I launch borrow calc page$/, () => {
    browser.url('https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/');
});
