const diaryPage = {
    h1: 'Daily reports',

};

const diaryPageSelectors = {
    h1: 'h1',
    createDayReportButton: 'div a[qa="create-day-report-button"]'
};

const createDayReport = {
    morale: Math.floor(Math.random() * 9) + 1,
    hours: Math.floor(Math.random() * 11),
    description: `Everything is fine. Today I solved  ${Math.floor(Math.random() * 20)} 
                    katas, created ${Math.floor(Math.random() * 10)} automated tests.`
};

const createDayReportSelectors = {
    understood: 'input[id="input-[1]"]',
    classmates: 'input[id="input-[2]"]',
    codePractice: 'input[id="input-[5]"]',
    technicalScreen: 'input[id="input-[9]"]',
    moraleDropdown: 'select[name="morale"]',
    hoursDropdown: 'input[name="hours"]',
    textareaDescription: 'textarea[name="description"]',
    buttonSave: 'button[type="submit"]',
    //numberOfDayReports: 'div[qa="description"]',

};

module.exports = { diaryPage, diaryPageSelectors, createDayReport, createDayReportSelectors };