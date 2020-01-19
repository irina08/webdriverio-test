const { URL_REGISTER, URL_LOGIN } = require('./url_data');
const { user, pageRegister, pageRegisterSelectors, pageConfirmation, pageConfirmationSelectors } = require('./registerLoginConfirmationNewUser_page_data');
const { pageLogin, pageLoginSelectors } = require('./login_logout_data');

const assert = require('assert');
const { expect } = require('chai');


describe('REGISTER PAGE', () => {
    it('should have the right title', () => {
        browser.url(URL_REGISTER);
        const actual = browser.getTitle();
        const expected = pageRegister.title;
        expect(actual).equal(expected);
        browser.pause(1000);
    });

    it('should have a correct title', () => {
        const actual = $(pageRegisterSelectors.h1).getText();
        const expected = pageRegister.h1;
        expect(actual).equal(expected);
        browser.pause(1000);
    });

    it('should have a correct description', () => {
        const actual = $(pageRegisterSelectors.description).getText();
        const expected = pageRegister.description;
        expect(actual).equal(expected);
    });

    it('should have a correct Submit button text', () => {
        const actual = $(pageRegisterSelectors.submitButton).getText();
        const expected = pageRegister.buttonText;
        expect(actual).equal(expected);
        browser.pause(1000);
    });

    it('should fill First Name field', () => {
        const element = $(pageRegisterSelectors.firstNameInput);
        element.setValue(user.firstName);
        browser.pause(1000);
    });

    it('should fill Last Name field', () => {
        const element = $(pageRegisterSelectors.lastNameInput);
        element.setValue(user.lastName);
        browser.pause(1000);
    });

    it('should fill phone field', () => {
        const element = $(pageRegisterSelectors.phoneInput);
        element.setValue(user.phone);
        browser.pause(1000);
    });

    it('should fill email field', () => {
        const element = $(pageRegisterSelectors.emailInput);
        element.setValue(user.email);
        browser.pause(1000);
    });

    it('should fill password field', () => {
        const element = $(pageRegisterSelectors.passwordInput);
        element.setValue(user.password);
        browser.pause(1000);
    });

    it('should fill about field', () => {
        const element = $(pageRegisterSelectors.aboutInput);
        element.setValue(user.about);
        browser.pause(1000);
    });

    it('should fill about goals field', () => {
        const element = $(pageRegisterSelectors.goalsInput);
        element.setValue(user.goals);
        browser.pause(1000);
    });

    it('should choose English level from dropdown menu', () => {
        const element = $(pageRegisterSelectors.englishLevelInput);
        element.selectByVisibleText(user.englishLevel);
        browser.pause(1000);
    });

    it('should click button Submit after filling all fields', () => {
        const element = $(pageRegisterSelectors.submitButton);
        element.click();
        browser.pause(1000);
    });
});


describe('LOGIN PAGE', () => {
    it('should have the right title', () => {
        browser.url(URL_LOGIN);
        const actual = browser.getTitle();
        const expected = pageLogin.title;
        expect(actual).equal(expected);
    });

    it('should have a correct heading', () => {
        const actual = $(pageLoginSelectors.h1).getText();
        const expected = pageLogin.h1;
        expect(actual).equal(expected);
    });


    it('should fill email field with user email', () => {
        const element = $(pageLoginSelectors.emailInput);
        element.setValue(user.email);
        browser.pause(1000);
    });

    it('should fill password field with user password', () => {
        const element = $(pageLoginSelectors.passwordInput);
        element.setValue(user.password);
        browser.pause(1000);
    });

    it('should click button Submit', () => {
        const element = $(pageLoginSelectors.submitButton);
        element.click();
        browser.pause(1000);
    });
});

describe('CONFIRMATION REGISTER PAGE', () => {

    it("should have a correct title", () => {
        const expected = pageConfirmation.title;
        const actual = browser.getTitle();
        expect(expected).equal(actual);
        browser.pause(1000);
    });

    it("should have user's fist name and last name", () => {
        //const actual = $('*=Morgan').getText();
        //const actual = $('=John Morgan').getText();
        //const actual = $('li a').getText();
        //const actual = $('.dropdown-toggle.nav-link').getText();
        const actual = $(pageConfirmationSelectors.firstLastName).getText();
        const expected = pageConfirmation.firstLastName;
        expect(actual).equal(expected);
        browser.pause(1000);
    });

    it('should have right heading', () => {
        const actual = $(pageConfirmationSelectors.h1).getText();
        const expected = pageConfirmation.h1;
        expect(actual).equal(expected);
        browser.pause(1000);
    });
});