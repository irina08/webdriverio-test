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
    modalWindowSelector: 'div[class="modal-body"]',
    //goToChallengePageNotification: '//h4[@class="notification-title"]',
    createChallengeButton: '//button[@class="btn btn-secondary"]',
    //listChallenges: '//div[@class = "pb-4 mb-4 border-bottom"]',
    //listChallenges: '//span[@class = "mr-4"]',
    challengeName: '//input[@name="name"]',
    programmingLanguage: '//select[@name="programmingLang"]',
    completedSolution: 'textarea[class="npm__react-simple-code-editor__textarea focus-visible"][xpath="1"]',
    //completedSolution: 'textarea[class="npm__react-simple-code-editor__textarea"][css="1"]',
    //completedSolution: '//textarea[@class="npm__react-simple-code-editor__textarea"][@xpath="1"]',
    //completedSolution: '//div[@class="codeEditor"][@xpath="1"]',
    //completedSolution: '/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[2]/div[1]/div[1]/div[2]',
    //completedSolution: '//body[contains(@class,"js-focus-visible modal-open")]//div//div[2]//div[1]//div[1]//div[2]//textarea[1]',
   // completedSolution: 'body.js-focus-visible.modal-open:nth-child(2) div.wrapClassName div.modal.modalClassName.fade.show div.modal-dialog.sidepanel.modal-full div.modal-content.contentClassName div.modal-body div.row:nth-child(2) div.col-md-6:nth-child(1) div.form-group div.codeEditor > pre:nth-child(1)',
    //completedSolution: '//body[contains(@class,"modal-open")]//div//div[2]//div[1]//div[1]//div[2]',
// //div[@class="modal-content contentClassName"]/textarea[@xpath="1"]
    //completedSolution: '//textarea[@xpath="1"]',
    instruction: '//textarea[@name="instruction"]',
    saveButton: '//button[@class="mr-3 btn btn-primary disabled"]',
    createdChallenge: '//div[@qa="day-report-item-0"]'
    //createButton: '//button[@class="btn btn-primary"][1]',

    //createdGroupsLinks: '//h4[@qa="name"]/a'
};

module.exports = { challengePage, challengePageSelectors };