/**
 * Created by 204071207 on 6/3/15.
 */

var catalogPage = function(){

    this.catalogHeader = element(by.css(".alpha.banner__labels"));
    this.services_sections = element(by.xpath(".//*[@id='services-tiles']"));
//    this.services = element.all(by.xpath(".//*[@id='services-tiles']/descendant::a[@class='catalog-tile__link']"));
    this.services = element.all(by.xpath(".//*[@id='services-tiles']/descendant::h3[@class='catalog-tile__title mb--']"));
    this.navbarCatalog = element(by.xpath("/html/body/header/nav/div/div/div[2]/ul/li[1]/a"));
    this.catalogFooterLogo = element(by.xpath("/html/body/footer/div/div/div[1]/a"));
    this.catalogFooterPrivacy = element(by.xpath("/html/body/footer/div/div/div[2]/small/ul/li[1]"));
    this.catalogFooterTerms = element(by.xpath("/html/body/footer/div/div/div[2]/small/ul/li[2]/a"));
    this.catalogSelect1 = element(by.xpath('//*[@id="starter-pack-tiles"]/div/div[2]/div[1]/div/div')); //should be reference app (09/01/2015)
    this.catalogSelect2 = element(by.xpath('//*[@id="starter-pack-tiles"]/div/div[2]/div[2]/div/div')); //should be dashboard seed (09/01/2015)
    this.catalogSelectLast = element(by.xpath('/html/body/main/div/section[3]/div/div[2]/div/div')); //should be user exp (09/01/2015)
    this.catalogRegiButton = element(by.xpath("/html/body/main/div/section[4]/a"));
};

module.exports = new catalogPage();