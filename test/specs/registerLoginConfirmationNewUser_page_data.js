
const email = Math.random() + 'rtuewwk@gmail.com';

const user = {
    firstName: 'John',
    lastName: 'Morgan',
    password: 'password',
    phone: '14158706170',
    email: email,
    about: 'hdfkdfjldlkfj djdfsdfjdfkj kdfjdkfdj',
    goals: 'eat sleep code',
    englishLevel: 'Upper intermediate'
};

const pageRegister = {
    title: 'Progress Monitor',
    h1: 'User Register',
    description: 'Profiles with fictitious or dummy data will be deleted.',
    buttonText: 'Submit'
};

const pageRegisterSelectors = {
    h1: 'h1',
    description: 'p',
    submitButton: 'form button[type="submit"]',
    firstNameInput: 'form input[name="firstName"]',
    lastNameInput: 'form input[name="lastName"]',
    phoneInput: 'form input[name="phone"]',
    emailInput: 'form input[name="email"]',
    passwordInput: 'form input[name="password"]',
    aboutInput: 'form textarea[name="about"]',
    goalsInput: 'form textarea[name="goals"]',
    englishLevelInput: 'form select[name="englishLevel"]',
};

const pageConfirmation = {
    title: 'Progress Monitor',
    firstLastName: 'John Morgan',
    h1: 'You are a new user'
};

const pageConfirmationSelectors = {
    h1: 'h1',
    firstLastName: '.dropdown-toggle.nav-link'
};

module.exports = { user, pageRegister, pageRegisterSelectors, pageConfirmation, pageConfirmationSelectors };