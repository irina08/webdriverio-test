const gname = 'QA' + Math.floor(Math.random() * 100);

const cardsPage = {
    h1: 'FlashCards',
    allFlashGroupsNotification: 'Get all Flash cards groups',
    h5: 'Create Flash Group',
    groupName: gname,
    groupDescription: 'The best QA group in the world',
};

const cardsPageSelectors = {
    h1: 'h1',
    //cardsButton: 'div a[qa="cards-link"]',
    cardsButton: '//div[@id="site-menu"]//a[@qa="cards-link"]',

    goToFlashCardPageNotification: '//h4[@class="notification-title"]',

    createNewFlashGroupButton: '//button[@qa="flash-create-new-group"]',

    //modalWindowSelector: 'div[class="modal-body"]',
    modalWindowSelector: '//div[contains(@class, "sidepanel")]',

    //modalWindowHeading: '//h5[@class="modal-title"]',
    modalWindowHeading: '//div[contains(@class, "sidepanel")]//*[@class="modal-title"]',

    groupNameSelector: '//div[contains(@class, "sidepanel")]//input[@name="name"]',
    groupDescriptionSelector: '//div[contains(@class, "sidepanel")]//input[@name="description"]',

    //createButton: '//button[@class="btn btn-primary"][1]',
    createButton: '//div[contains(@class, "sidepanel")]//button[@type="submit"]',

    listCardsItem: '//div[@class = "pb-4 mb-4 border-bottom"]',

    //createdGroupsLinks: '//h4[@qa="name"]/a'
    createdGroupsLinks: '//div[@qa="flash-group-list "]//h4/a',

    createdDescriptionLink: '//div[@qa="flash-group-list "]//div[@qa="description"]',

    createdGroupTitle: '//h1'
};

module.exports = { cardsPage, cardsPageSelectors };