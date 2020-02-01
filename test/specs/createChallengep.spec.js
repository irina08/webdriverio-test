const { expect } = require('chai');
const { URL_LOGIN, URL_CHALLENGE } = require('./url_data');
const { admin } = require('./admin_data');
const {challengePage, challengePageSelectors } = require('./challenge_data');
const {pageLoginSelectors, logoutSelectors } = require('./login_logout_data');


describe('Create New Challenge', () => {
  before('Login as admin', () => {
    browser.url(URL_LOGIN);
    $(pageLoginSelectors.emailInput).setValue(admin.email);
    browser.pause(1000);
    $(pageLoginSelectors.passwordInput).setValue(admin.password);
    browser.pause(1000);
    const element = $(pageLoginSelectors.submitButton);
    element.click();
    browser.pause(1000);
  });


  it('should go to the Challenge page', () => {
    const challenge_link = $(challengePageSelectors.challengeButton);
    challenge_link.click();
    browser.pause(1000);
  });

  it('should Challenge page has a correct URL', () => {
    const actual = browser.getUrl();
    const expected = URL_CHALLENGE;
    expect(actual).equal(expected);
    browser.pause(1000);
  });

  it('should Challenge page has the right heading', () => {
    const actual = $(challengePageSelectors.h1).getText();
    const expected = challengePage.h1;
    expect(actual).equal(expected);
    browser.pause(1000);
  });



  it('should button "Create Challenge" redirect to new window ' +
      'for creating challenge', () => {
    const button = $(challengePageSelectors.createChallengeButton);
    button.click();
    browser.pause(1000);
  });

  it('should modal window is existing', () => {
    const element = $(challengePageSelectors.modalWindowSelector);
    expect(element.isExisting()).to.be.true;
    browser.pause(1000);
  });

  it('should fill `Challenge name` field', () => {
    const element = $(challengePageSelectors.challengeName);
    element.setValue(challengePage.challengeName);
    browser.pause(1000);
  });

  it('should chose `JavaScript` from dropdown menu ' +
      '`Programming language`', () => {
    const element = $(challengePageSelectors.programmingLanguage);
    element.selectByVisibleText(challengePage.programmingLanguage);
    browser.pause(5000);
  });

  it('should fill `Instruction` field', () => {
    const element = $(challengePageSelectors.instruction);
    element.setValue(challengePage.instruction);
    browser.pause(1000);
  });

  it('should fill `Completed solution` field', () => {
    const element = $(challengePageSelectors.completedSolution);
    element.setValue(challengePage.completedSolution);
    browser.pause(1000);
  });


  it('should create Challenge after clicking button "Save"', () => {
    const button = $(challengePageSelectors.saveButton);
    button.click();
    browser.pause(5000);
  });

  /*
  it('should get success confirmation notification', () => {
    const actual = $(cardsPageSelectors.goToFlashCardPageNotification).getText();
    const expected = cardsPage.allFlashGroupsNotification;
    expect(actual).equal(expected);
    browser.pause(1000);
  });
*/

  /*it('should verify that created Challenge appeared ' +
      'on `Challenge` page', () => {
    const challengeCreated = $$(challengePageSelectors.createdChallenge)[0].getText();
    const expected = cardsPage.challengeName;
    expect(challengeCreated).equal(expected);
    browser.pause(1000);
  });
*/

  after('should user logout', () => {
    const element1 = $(logoutSelectors.dropdown);
    element1.click();
    const element2 = $(logoutSelectors.logout);
    element2.click();
    browser.pause(2000);
  });
});


