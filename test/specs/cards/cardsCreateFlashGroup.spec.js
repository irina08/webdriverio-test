const { expect } = require('chai');
const { URL_LOGIN } = require('../url_data');
const { admin } = require('../admin_data');
const {cardsPage, cardsPageSelectors } = require('./cards_data');
const {pageLoginSelectors, logoutSelectors } = require('../login_logout_data');

describe('FLASH GROUP CREATE', () => {
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

 /* after('AFTER', () => {
    browser.pause(1000);
  });
*/

  it('should click top menu Cards', () => {
    const cards_link = $(cardsPageSelectors.cardsButton);
    cards_link.click();
    browser.pause(1000);
  });
/*
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
*/

  it('should click button "Create New FlashGroup"', () => {
    const button = $(cardsPageSelectors.createNewFlashGroupButton);
    button.click();
    browser.pause(500);
  });

  it('should check if modal window is open', () => {
    const element = $(cardsPageSelectors.modalWindowSelector);
     //expect(element.isExisting()).to.be.true;
     expect(element.isDisplayed()).true;
     browser.pause(1000);
  });

  it('should check if modal window has heading `Create Flash Group`', () => {
    const actual = $(cardsPageSelectors.modalWindowHeading).getText();
    const expected = cardsPage.h5;
    expect(actual).equal(expected);
    browser.pause(1000);
  });

  it('should fill out input `Group name` field', () => {
    const element = $(cardsPageSelectors.groupNameSelector);
    element.setValue(cardsPage.groupName);
    browser.pause(1000);
  });

  it('should fill out input `Group description` field', () => {
    const element = $(cardsPageSelectors.groupDescriptionSelector);
    element.setValue(cardsPage.groupDescription);
    browser.pause(5000);
  });

  it('should submit form', () => {
    const button = $(cardsPageSelectors.createButton);
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

  it('should we know that after creating new FlashGroup, ' +
      'the Number of FlashGroups become one more', () => {
    const countAfter = $$(cardsPageSelectors.listCardsItem).length;
    expect(countAfter - countBefore).equal(1);
    browser.pause(1000);
  });
*/

  it('should first item in the list be equal created group title', () => {
    //const groupCreated = $$(cardsPageSelectors.createdGroupsLinks)[0].getText();
    const groupCreated = $(cardsPageSelectors.createdGroupsLinks).getText();
    const expected = cardsPage.groupName;
    expect(groupCreated).equal(expected);
    browser.pause(1000);
  });

  it('should first item in the list be equal created group description', () => {
    const descriptionCreated = $(cardsPageSelectors.createdDescriptionLink).getText();
    const expected = cardsPage.groupDescription;
    expect(descriptionCreated).equal(expected);
    browser.pause(1000);
  });

  it('should verify created title group is clickable', () => {
    const element = $(cardsPageSelectors.createdGroupsLinks);
    element.click()
    browser.pause(1000);
  });

  it('should clickable group has correct title', () => {
    const actual = $(cardsPageSelectors.createdGroupTitle).getText();
    const expected = cardsPage.groupName;
    expect(actual).equal(expected);
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


