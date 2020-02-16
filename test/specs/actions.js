//const { URL_LOGIN } = require('./url_data');
const { admin } = require('./admin_data');
const { pageLoginSelectors } = require('./login_logout_data');
//const HOST = 'https://stage.pasv.us';
const URL_LOGIN = 'https://stage.pasv.us/user/login';

function loginAsAdmin() {
    browser.url(URL_LOGIN);
    //browser.pause(1000);
    $(pageLoginSelectors.emailInput).setValue(admin.email);
    //browser.pause(1000);
    $(pageLoginSelectors.passwordInput).setValue(admin.password);
    //browser.pause(1000);
    const element = $(pageLoginSelectors.submitButton);
    element.click();
    //browser.pause(1000);
}

module.exports = { loginAsAdmin };

