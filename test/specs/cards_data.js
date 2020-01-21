const cardsPage = {
    h1: 'FlashCards',
    allFlashGroupsNotification: 'Get all Flash cards groups',
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

module.exports = { cardsPage, cardsPageSelectors };