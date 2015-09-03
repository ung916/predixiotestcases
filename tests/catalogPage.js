// The browser.sleeps exist in the script because the script runs faster than the pages can load >.<

var catalogPage= require('../app-pages/catalogPage.js');

var pName ="/catalog";

describe('Catalog Page validations ::', function() {

    it('validation for successful loading of catalog page and contains services sections',function(){

        browser.ignoreSynchronization = true;
        browser.get("https://predix.ge.com/catalog/");
        browser.sleep(1000);
        expect(catalogPage.catalogHeader.isDisplayed()).toBeTruthy();
        expect(catalogPage.catalogHeader.getText()).toContain('Catalog');
        expect(browser.getCurrentUrl()).toContain("/catalog");
        expect(browser.getTitle()).toEqual('Predix');
        expect(catalogPage.services_sections.isDisplayed()).toBeTruthy();
        expect(catalogPage.services.isDisplayed()).toBeTruthy();

        catalogPage.services.then(function(items) {
            expect(items.length).toBe(28);
            expect(items[0].getText()).toBe("Analytics Catalog");
            expect(items[27].getText()).toBe("Machine C++");
        });
    });
});

describe('Testing the catalog selection links ::', function() {

    beforeEach(function() {
        return browser.ignoreSynchronization = true;
    });

    beforeEach(function() {
        browser.get("https://predix.ge.com/catalog/");
    });

    it("click on 'reference app', 1st catalog selection", function() {
        catalogPage.catalogSelect1.click();
        browser.sleep(750);
        expect(browser.getCurrentUrl()).toContain("1224");
    });

    it("click on 'dashboard seed', 2nd catalog selection", function() {
        catalogPage.catalogSelect2.click();
        browser.sleep(750);
        expect(browser.getCurrentUrl()).toContain("1225");
    });

    it("click on 'design guidelines', last catalog selection", function() {
        catalogPage.catalogSelectLast.click();
        browser.sleep(750);
        expect(browser.getCurrentUrl()).toContain("design-guidelines");
    });
});

describe('Checking footer links ::', function() {

    beforeEach(function(){
        return browser.ignoreSynchronization = true;
    });

    beforeEach(function() {
        browser.get('http://predix.ge.com/catalog');
        browser.sleep(750);
    });

    it('click on the GE footer logo', function(){
        catalogPage.catalogFooterLogo.click();
        browser.sleep(750);
        expect(browser.getTitle()).toEqual('Asset Performance Management Software | GE Software');
        expect(browser.getCurrentUrl()).toContain('https://www.gesoftware.com/');
    });

    it("click on 'privacy'", function(){
        catalogPage.catalogFooterPrivacy.click();
        browser.sleep(750);
        expect(browser.getTitle()).toEqual('GE Privacy Policy | Privacy Statement | GE');
        expect(browser.getCurrentUrl()).toContain('privacy');
    });

    it("click on 'terms of use'", function(){
        catalogPage.catalogFooterTerms.click();
        browser.sleep(750);
        expect(browser.getTitle()).toEqual('GE.com Terms of Service | GE');
        expect(browser.getCurrentUrl()).toContain('terms');
    });
});

describe('Testing navbar ::', function() {

    var navbarselect = ['https://predix.ge.com/', 'https://predix.ge.com/catalog/', 'https://predix.ge.com/resources/', 'https://predix.ge.com/docs/', 'https://predix.ge.com/community', 'https://predix.ge.com/support/'];

    it('tests from array to check functionality of navbar', function() {

        beforeEach(function () {
            return browser.ignoreSynchronization = true;
        });

        for(var i=0; i < navbarselect.length; i++){
            browser.get(navbarselect[i]);
            catalogPage.navbarCatalog.click();
            browser.sleep(750);
            expect(browser.getCurrentUrl()).toContain('https://predix.ge.com/catalog/');
        }
    });
});
describe('Test register button ::', function(){

    beforeEach(function (){
        return browser.ignoreSynchronization = true;
    });

    it('test the register button', function(){
        browser.get('http://predix.ge.com/catalog');
        catalogPage.catalogRegiButton.click();
        browser.sleep(750);
        expect(browser.getCurrentUrl()).toContain('registration');
    });
});