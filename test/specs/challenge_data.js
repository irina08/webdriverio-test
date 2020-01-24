const chName = 'Algorithm ' + Math.floor(Math.random() * 20);

const challengePage = {
    h1: 'Challenge',
    //challengeNotification: 'Search challenges ok',
    challengeName: chName,
    programmingLanguage: 'JavaScript',
    completedSolution: 'let a = 5;',
    instruction: 'Create variable a and give it value equals 5'
};

const challengePageSelectors = {
    h1: 'h1',
    challengeButton: 'ul li a[href="/challenge"]',
    //goToChallengePageNotification: '//h4[@class="notification-title"]',
    createChallengeButton: '//button[@class="btn btn-secondary"]',
    //listChallenges: '//div[@class = "pb-4 mb-4 border-bottom"]',
    //listChallenges: '//span[@class = "mr-4"]',
    challengeName: '//input[@name="name"]',
    programmingLanguage: '//select[@name="programmingLang"]',
    completedSolution: '//div[@class="codeEditor"][@xpath="1"]',
    instruction: '//textarea[@name="instruction"]',
    saveButton: '//button[@class="mr-3 btn btn-primary disabled"]',
    createdChallenge: '//div[@qa="day-report-item-0"]'
    //createButton: '//button[@class="btn btn-primary"][1]',

    //createdGroupsLinks: '//h4[@qa="name"]/a'
};

module.exports = { challengePage, challengePageSelectors };