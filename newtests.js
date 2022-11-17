module.exports = {

    "UI" : async browser => {
        browser.url("https://magento.jsmartfix.com/")
       // browser.pause(3*1000)

     
        browser.click("#ui-id-6 > span:nth-child(2)");
      //  browser.pause(1*1000)

        browser.click("#narrow-by-list2 > dd > ol > li:nth-child(1) > a");
        browser.pause(1*1000)
        
        
        browser.click("#maincontent > div.columns > div.column.main > div.products.wrapper.grid.products-grid > ol > li:nth-child(1) > div > a > span > span > img");
        browser.pause(3*1000)

        browser.click("#maincontent > div.columns > div > div.product-info-main > div.product-reviews-summary > div.reviews-actions > a.action.add");
        browser.pause(3*1000)
       
        // browser.click('.rating-1')
        // browser.pause(3*1000)

       

      
         ratingElement = await browser.findElement('.rating-4')
         console.log(ratingElement.getId());
         browser.moveTo(ratingElement.getId(),80, 0)
         browser.pause(1000)
         await browser.perform(function() {
            const actions = this.actions({async: true});

            return actions.click(ratingElement.getId());
         })
        
       

        browser.sendKeys('#nickname_field','faiq')
        browser.pause(3*1000)

        browser.sendKeys('#summary_field','its really good')
      //  browser.pause(3*1000)

        browser.sendKeys('#review_field','I would love this bag EXCEPT with the case on my Iphone wont fit in the cell phone pocket! Why make a pocket for cell phones if its not going to fit an Iphone.')
      //  browser.pause(3*1000)

        browser.click('#review-form > div > div > button > span')
     //   browser.pause(3*1000)
    }
}