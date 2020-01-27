const { expect } = require('chai');
const { URL_LOGIN, URL_CARDS } = require('./url_data');
const { admin } = require('./admin_data');
const {cardsPage, cardsPageSelectors } = require('./cards_data');
const {pageLoginSelectors, logoutSelectors } = require('./login_logout_data');


describe('Create FlashCards/Create New FlashGroup', () => {
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


  it('should go to the Cards page', () => {
    const cards_link = $(cardsPageSelectors.cardsButton);
    cards_link.click();
    browser.pause(1000);
  });

  it('should Cards page has a correct URL', () => {
    const actual = browser.getUrl();
    const expected = URL_CARDS;
    expect(actual).equal(expected);
    browser.pause(1000);
  });

  it('should Cards page has the right heading', () => {
    const actual = $(cardsPageSelectors.h1).getText();
    const expected = cardsPage.h1;
    expect(actual).equal(expected);
    browser.pause(1000);
  });

  it('should Cards/FlashGroup page get success notification confirmation', () => {
    const actual = $(cardsPageSelectors.goToFlashCardPageNotification).getText();
    const expected = cardsPage.allFlashGroupsNotification;
    expect(actual).equal(expected);
    browser.pause(1000);
  });

  it('should we know how many FlashGroups already exist', () => {
    const countBefore = $$(cardsPageSelectors.listCardsItem).length;
    expect(countBefore > 0).to.be.true;
    browser.pause(1000);
  });

  it('should button "Create New FlashGroup" redirect to new modal window', () => {
    const button = $(cardsPageSelectors.createNewFlashGroupButton);
    button.click();
    browser.pause(1000);
  });

  it('should modal window is existing', () => {
    const element = $(cardsPageSelectors.modalWindowSelector);
    expect(element.isExisting()).to.be.true;
    browser.pause(1000);
  });

  it('should opened modal window has heading `Create Flash Group`', () => {
    const actual = $(cardsPageSelectors.modalWindowHeading).getText();
    const expected = cardsPage.h5;
    expect(actual).equal(expected);
    browser.pause(1000);
  });

  it('should fill `Group name` field', () => {
    const element = $(cardsPageSelectors.groupNameSelector);
    element.setValue(cardsPage.groupName);
    browser.pause(1000);
  });

  it('should fill `Group description` field', () => {
    const element = $(cardsPageSelectors.groupDescriptionSelector);
    element.setValue(cardsPage.groupDescription);
    browser.pause(5000);
  });

  it('should create FlashGroup after clicking button "Create"', () => {
    const button = $(cardsPageSelectors.createButton);
    button.click();
    browser.pause(5000);
  });

  it('should get success confirmation notification', () => {
    const actual = $(cardsPageSelectors.goToFlashCardPageNotification).getText();
    const expected = cardsPage.allFlashGroupsNotification;
    expect(actual).equal(expected);
    browser.pause(1000);
  });
/*
  it('should we know that after creating new FlashGroup, ' +
      'the Number of FlashGroups become one more', () => {
    const countAfter = $$(cardsPageSelectors.listCardsItem).length;
    expect(countAfter - countBefore).equal(1);
    browser.pause(1000);
  });
*/
  it('should verify that day created FlashGroup appeared on `FlashGroups` page', () => {
    const groupCreated = $$(cardsPageSelectors.createdGroupsLinks)[0].getText();
    const expected = cardsPage.groupName;
    expect(groupCreated).equal(expected);
    browser.pause(1000);
  });

  after('should user logout', () => {
    const element1 = $(logoutSelectors.dropdown);
    element1.click();
    const element2 = $(logoutSelectors.logout);
    element2.click();
    browser.pause(2000);
  });
});

