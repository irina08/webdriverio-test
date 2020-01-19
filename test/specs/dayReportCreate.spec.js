const { expect } = require('chai');
const { URL_LOGIN, URL_DIARY, URL_CREATE_DAY_REPORT } = require('./url_data');
const { admin } = require('./admin_data');
const { pageLoginSelectors } = require('./registerLoginConfirmationNewUser_page_data');
const { diaryPageSelectors, diaryPage, createDayReport, createDayReportSelectors } = require('./diary_data');

describe('CREATE DAY REPORT', () => {
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

  it('should have the right admin name', () => {
    const actual = $('h1').getText();
    const expected = admin.firstName + ' ' + admin.lastName;
    expect(actual).equal(expected);
    browser.pause(1000);
  });

  it('should go to the diary page', () => {
    const diary_link = $('ul li a[qa="diary-link"]');
    diary_link.click();
    browser.pause(1000);
  });

  it('should diary page has a correct URL', () => {
    const actual = browser.getUrl();
    const expected = URL_DIARY;
    expect(actual).equal(expected);
    browser.pause(1000);
  });

  it('should diary page has the right heading', () => {
    const actual = $(diaryPageSelectors.h1).getText();
    const expected = diaryPage.h1;
    expect(actual).equal(expected);
    browser.pause(1000);
  });
/*
  it('should diary page has initial number of day reports >= 1', () => {
    const num = $('div.mt-2').getText();
    expect(num > 0).to.be.true;

    browser.pause(1000);
  });
*/
  it('should redirect to create day report page', () => {
    const createDayReport = $(diaryPageSelectors.createDayReportButton);
    createDayReport.click();
    browser.pause(1000);
  });

  it('should create day report page has a correct URL', () => {
    const actual = browser.getUrl();
    const expected = URL_CREATE_DAY_REPORT;
    expect(actual).equal(expected);
    browser.pause(1000);
  });

  it('should create day report page has a correct heading', () => {
    const actual = browser.getUrl();
    const expected = URL_CREATE_DAY_REPORT;
    expect(actual).equal(expected);
    browser.pause(1000);
  });

  it('should check some options', () => {
    $(createDayReportSelectors.understood).click();
    //browser.pause(1000);
    $(createDayReportSelectors.classmates).click();
    //browser.pause(1000);
    $(createDayReportSelectors.codePractice).click();
    //browser.pause(1000);
    $(createDayReportSelectors.technicalScreen).click();
   // browser.pause(1000);
  });

  it('should choose "What is your morale" option', () => {
    const element = $(createDayReportSelectors.moraleDropdown);
    element.selectByVisibleText(createDayReport.morale);
    browser.pause(1000);
  });

  it('should fill field "How many hours did you study/practice today?', () => {
    const element = $(createDayReportSelectors.hoursDropdown);
    element.setValue(createDayReport.hours);
    browser.pause(1000);
  });

  it('should fill field "How was your day?" ' +
      ' with no less than 30 characters', () => {
    const element = $(createDayReportSelectors.textareaDescription);
    element.setValue(createDayReport.description);
    browser.pause(1000);
  });

  it('should click button "Save" after filling all fields', () => {
    const element = $(createDayReportSelectors.buttonSave);
    element.click();
    browser.pause(1000);
  });

  it('should redirect to diary page with a correct URL', () => {
    const actual = browser.getUrl();
    const expected = URL_DIARY;
    expect(actual).equal(expected);
    browser.pause(1000);
  });



});


