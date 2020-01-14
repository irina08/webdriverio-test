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
        browser.pause(1000);
    });

    it('should have a correct title', () => {
        const actualH1text = $('h1').getText();
        const expectedH1Text = 'User Register';
        //assert.strictEqual(actualH1text, expectedH1Text);
        expect(actualH1text).equal(expectedH1Text);
        browser.pause(1000);
    });

    it('should have a correct description', () => {
        const actual = $('p').getText();
        const expected = 'Profiles with fictitious or dummy data will be deleted.';
        expect(actual).equal(expected);
        browser.pause(1000);
    });

    it('should have a correct Submit button text', () => {
        const actual = $('form button').getText();
        const expected = 'Submit';
        expect(actual).equal(expected);
        browser.pause(1000);
    });

    it('should fill First Name field', () => {
        const element =  $('form input[name="firstName"]')
        element.setValue(firstName);
        browser.pause(1000);
    });

    it('should fill Last Name field', () => {
        const element =  $('form input[name="lastName"]')
        element.setValue(lastName);
        browser.pause(1000);
    });

    it('should fill phone field', () => {
        const element =  $('form input[name="phone"]')
        element.setValue('14158706170');
        browser.pause(1000);
    });

    it('should fill email field', () => {
        const element =  $('form input[name="email"]')
        element.setValue(email);
        browser.pause(1000);
    });

    it('should fill password field', () => {
        const element =  $('form input[name="password"]');
        element.setValue(password);
        browser.pause(1000);
    });

    it('should fill about field', () => {
        const element =  $('form textarea[name="about"]')
        element.setValue('I am a student');
        browser.pause(1000);
    });

    it('should fill about goals field', () => {
        const element =  $('form textarea[name="goals"]')
        element.setValue('I am a student. I am a student. I am a student.');
        browser.pause(1000);
    });

    it('should choose English level from dropdown menu', () => {
        const element =  $('form select[name="englishLevel"]')
        element.selectByAttribute('value', 'Upper intermediate');
        browser.pause(1000);
    });

    it('should click button Submit after filling all fields', () => {
        const button = $('form button[type="submit"]').click();
        browser.pause(1000);
    });

    it('should redirect to login page after user registration', () => {
        const expected = 'https://stage.pasv.us/user/login';
        const actual = browser.getUrl();
        expect(expected).equal(actual);
        browser.pause(1000);
    });

    it('login page should have a correct title', () => {
        const expected = 'Progress Monitor';
        const actual = browser.getTitle();
        expect(expected).equal('Progress Monitor');
        browser.pause(1000);
    });

    it('login page should have a correct heading', () => {
        const actual = $('h1').getText();
        const expected = 'User Login';
        expect(actual).equal(expected);
        browser.pause(1000);
    });

    it('should fill email field with user email', () => {
        const element =  $('form input[name="email"]')
        element.setValue(email);
        browser.pause(1000);
    });

    it('should fill password field with user password', () => {
        const element =  $('form input[name="password"]');
        element.setValue(password);
        browser.pause(1000);
    });

    it('should click button Submit on User Login page after filling all fields', () => {
        const button = $('form button[type="submit"]').click();
        browser.pause(1000);
    });

    it("After log in new user's account, User page should " +
        "have a correct title", () => {
        const expected = 'Progress Monitor';
        const actual = browser.getTitle();
        expect(expected).equal(actual);
        browser.pause(1000);
    });

    it("After log in new user account, user's page should have " +
        "user's fist name and last name", () => {
        //const actual = $('*=Morgan').getText();
        //const actual = $('=John Morgan').getText();
        const actual = $('li a').getText();
        console.log(actual);
        const expected = 'John Morgan';
        expect(actual).equal(expected);
        browser.pause(1000);
    });

    it("After log in new user account, user's page should have " +
        "heading 'You are a new user'", () => {
        const actual = $('h1').getText();
        const expected = 'You are a new user';
        expect(actual).equal(expected);
        browser.pause(1000);
    });
});