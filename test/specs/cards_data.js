const gname = 'QA' + Math.floor(Math.random() * 100);

const cardsPage = {
    h1: 'FlashCards',
    allFlashGroupsNotification: 'Get all Flash cards groups',
    groupName: gname,
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
    listCardsItem: '//div[@class = "pb-4 mb-4 border-bottom"]',
    createdGroupsLinks: '//h4[@qa="name"]/a'
};

module.exports = { cardsPage, cardsPageSelectors };