const desc = `Everything is fine. Today I solved ${Math.floor(Math.random() * 20)} katas, created ${Math.floor(Math.random() * 10)} automated tests.`;

const diaryPage = {
    h1: 'Daily reports',
};

const diaryPageSelectors = {
    h1: 'h1',
    createDayReportButton: 'div a[qa="create-day-report-button"]'
};

const createDayReport = {
    h1: 'Create day report',
    morale: Math.floor(Math.random() * 9) + 1,
    hours: Math.floor(Math.random() * 11),
    description: desc,
    notificationDiaryCreated: 'Diary created'
};

const createDayReportSelectors = {
    h1: 'h1',
    understood: 'input[id="input-[1]"]',
    classmates: 'input[id="input-[2]"]',
    codePractice: 'input[id="input-[5]"]',
    technicalScreen: 'input[id="input-[9]"]',
    moraleDropdown: 'select[name="morale"]',
    hoursDropdown: 'input[name="hours"]',
    textareaDescription: 'textarea[name="description"]',
    buttonSave: 'button[type="submit"]',
    //numberOfDayReports: 'div[qa="description"]',
    createdDiary: 'div[qa="description"]',
    diaryCreated: '//h4[@class="notification-title"]'
};

const diaryData  = {
    approvedText: 'Approved',
    approvedNotification: 'Diary approved. Updated Achievement. Success',
    likedText: 'I like this 👍1',
    likedNotification: 'Diary Like. Success',
    deletedNotification: 'Diary deleted'

}
const diarySelectors = {
    approveButton: '//div[3]//span[3]//div[1]//button[1]',
    approved: '//span[@class="mr-4 badge badge-success"]',
    diaryApprovedNotification: '//h4[@class="notification-title"]',
    likeButton: '//div[3]//span[4]//button[1]',
    liked: '//div[3]//span[4]//button[1]',
    diaryLikedNotification: '//h4[@class="notification-title"]',
    editButton: 'a[class="btn btn-link"]',
    deleteButton: '//div[5]//div[3]//button[1]',
    diaryDeletedNotification: '//h4[@class="notification-title"]'
}

module.exports = { diaryPage, diaryPageSelectors, createDayReport, createDayReportSelectors, diarySelectors, diaryData };