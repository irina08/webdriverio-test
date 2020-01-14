# UI Testing with WebdriverIO

### Node Installation
For this project you need to have already installed Node.js, npm, Chai.

1. Go to the [Node installation page](https://nodejs.org/en/download/), 
and download the Node installer.
2. Once it's done, you can test to see both node and npm functioning by 
opening terminal and typing node -v and npm -v, which will check the 
version number.
[Helpful link Node](https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/)

### Initializing of local repository
You need to clone this repo to your local machine.
1. In the terminal change the current working directory to the location 
where you want the cloned directory to be made.
2. Use command: git clone https://github.com/irina08/webdriverio-test
3. Go to the directory 'webdriverio-test'.
4. For initializing a project run command: npm init -y.

### Chai Installation
1. Run command: npm install chai

[Helpful link Chai](https://www.chaijs.com/)

### WebdriverIO installation 
1. Run command: npm i --save-dev @wdio/cli
2. For generating configuration file run command:
./node_modules/.bin/wdio config -y  

[WebdriverIO installation](https://webdriver.io/docs/gettingstarted.html)

### How to run tests
1. Tests you can find in /test/specs/register.js file.  
2. For running test you need to change line 7 in package.json file to 
"test": "./node_modules/.bin/wdio wdio.conf.js".  
3. Run command: npm test or ./node_modules/.bin/wdio wdio.conf.js






