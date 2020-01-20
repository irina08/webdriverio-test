const cardsPage = {
    h1: 'FlashCards',
    allFlashGroupsNotification: 'Get all Flash cards group',
    groupName: 'QA' + Math.floor(Math.random() * 100),
    groupDescription: 'The best QA group in the world',
};

const cardsPageSelectors = {
    h1: 'h1',
    cardsButton: 'div a[qa="cards-link"]',
    goToFlashCardPageNotification: '//h4[@class="notification-title"]',
    createNewFlashGroupButton: '//button[@qa="flash-create-new-group"]',
    groupNameSelector: '//input[@name="name"]',
    groupDescriptionSelector: '//input[@name="description"]',
    createButton: '//button[@class="btn btn-primary"][1]',
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

module.exports = { cardsPage, cardsPageSelectors };