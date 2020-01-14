const assert = require('assert');
const { expect } = require('chai');

const email = Math.random() + 'rtuewwk@gmail.com';
const password = 'password';
const firstName = 'John';
const lastName = 'Morgan';

describe('Register page', () => {
    before(() => {
        browser.url('https://stage.pasv.us/user/register');
    });

    it('should have the right title', () => {
        const title = browser.getTitle();
       // assert.strictEqual(title, 'Progress Monitor');
        expect(title).equal('Progress Monitor');
        browser.pause(2000);
    });

    it('should have a correct title', () => {
        const actualH1text = $('h1').getText();
        const expectedH1Text = 'User Register';
        //assert.strictEqual(actualH1text, expectedH1Text);
        expect(actualH1text).equal(expectedH1Text);
        browser.pause(2000);
    });

    it('should have a correct description', () => {
        const actual = $('p').getText();
        const expected = 'Profiles with fictitious or dummy data will be deleted.';
        expect(actual).equal(expected);
        browser.pause(2000);
    });

    it('should have a correct Submit button text', () => {
        const actual = $('form button').getText();
        const expected = 'Submit';
        expect(actual).equal(expected);
        browser.pause(2000);
    });

    it('should fill First Name field', () => {
        const element =  $('form input[name="firstName"]')
        element.setValue(firstName);
        browser.pause(2000);
    });

    it('should fill Last Name field', () => {
        const element =  $('form input[name="lastName"]')
        element.setValue(lastName);
        browser.pause(2000);
    });

    it('should fill phone field', () => {
        const element =  $('form input[name="phone"]')
        element.setValue('14158706170');
        browser.pause(2000);
    });

    it('should fill email field', () => {
        const element =  $('form input[name="email"]')
        element.setValue(email);
        browser.pause(2000);
    });

    it('should fill password field', () => {
        const element =  $('form input[name="password"]');
        element.setValue(password);
        browser.pause(2000);
    });

    it('should fill about field', () => {
        const element =  $('form textarea[name="about"]')
        element.setValue('ahshhdd dhhdjdkfk fjfj');
        browser.pause(2000);
    });

    it('should fill about goals field', () => {
        const element =  $('form textarea[name="goals"]')
        element.setValue('ahshhdd dhhdjdkfk fjfj');
        browser.pause(2000);
    });

    it('should choose English level from dropdown menu', () => {
        const element =  $('form select[name="englishLevel"]')
        element.selectByAttribute('value', 'Upper intermediate');
        browser.pause(2000);
    });

    it('should click button Submit after filling all fields', () => {
        const button = $('form button[type="submit"]').click();
        browser.pause(2000);
    });
});