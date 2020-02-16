const { expect } = require('chai');
const { URL_LOGIN, URL_DIARY } = require('./url_data');
const { admin } = require('./admin_data');
const { createDayReport, createDayReportSelectors, diarySelectors, diaryData } = require('./diary_data');
const {pageLoginSelectors, logoutSelectors } = require('./login_logout_data');
const { loginAsAdmin } = require('./actions');


describe('WORKING DAY REPORT', () => {
  before('Login as admin', () => {
    loginAsAdmin();
  });

/*
  it('should go to the diary page', () => {
    const diary_link = $('ul li a[qa="diary-link"]');
    diary_link.click();
    browser.pause(1000);
  });

  it('should approve last diary', () => {
    const approve = $(diarySelectors.approveButton);
    approve.click();
    browser.pause(1000);
  });

  it('should confirm approve of last diary', () => {
    const actual = $(diarySelectors.approved).getText();
    const expected = diaryData.approvedText;
    expect(actual).equal(expected);
    browser.pause(1000);
  });

  it('should get success confirmation notification after approving last diary', () => {
    const actual = $(diarySelectors.diaryApprovedNotification).getText();
    const expected = diaryData.approvedNotification;
    expect(actual).equal(expected);
    browser.pause(1000);
  });

  it('should like last diary', () => {
    const like = $(diarySelectors.likeButton);
    like.click();
    browser.pause(1000);
  });

  it('should confirm like last diary', () => {
    const actual = $(diarySelectors.liked).getText();
    const expected = diaryData.likedText;
    expect(actual).equal(expected);
    browser.pause(1000);
  });

  it('should get success confirmation notification after `like` last diary', () => {
    const actual = $(diarySelectors.diaryLikedNotification).getText();
    const expected = diaryData.likedNotification;
    expect(actual).equal(expected);
    browser.pause(1000);
  });

  //functionality edit doesn't work
  it('should edit last diary', () => {
    const edit = $(diarySelectors.editButton);
    edit.click();
    browser.pause(1000);
  });

  it('should after editing return back to the diary page', () => {
    const diary_link = $('ul li a[qa="diary-link"]');
    diary_link.click();
    browser.pause(1000);
  });

  it('should delete last diary', () => {
    const del= $(diarySelectors.deleteButton);
    del.click();
    browser.pause(1000);
  });

  it('should get success confirmation notification after deleting last diary', () => {
    const actual = $(diarySelectors.diaryDeletedNotification).getText();
    const expected = diaryData.deletedNotification;
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
  */
});


