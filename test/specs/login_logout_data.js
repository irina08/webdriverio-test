const pageLogin = {
    title: 'Progress Monitor',
    h1: 'User Login',
};

const pageLoginSelectors = {
    h1: 'h1',
    emailInput: 'form input[name="email"]',
    passwordInput: 'form input[name="password"]',
    submitButton: 'form button[type="submit"]'
};

const logoutSelectors = {
    dropdown: 'a[class="dropdown-toggle nav-link"]',
    logout: '//button[contains(text(),"Logout")]'
};

module.exports = { pageLogin, pageLoginSelectors, logoutSelectors };