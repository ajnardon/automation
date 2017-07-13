module.exports = function () {
    this.Given( /^I am on the log in page$/, { timeout: 10 * 1000 }, function( done ) {
        browser
            .url( "https://rmstaging.rebeccaminkoff.com/customer/account" )
            .call( done );
    });

 this.When( /^I fill out email and password fields with valid credentials$/, function( done ) {
        browser
            .refresh()
            .setValue( '#email','albert.nardone+12345@blueacorn.com' )
            .setValue( '#pass','pass4albert' )
            .call( done );
    });

    this.When( /^I click the log in button$/, function( done ) {
        browser
            .click( '#send2' )
            .call( done );
    });

    this.Then( /^I should be taken to my account dashboard$/, { timeout: 10 * 1000 }, function( done ) {
        browser
            .waitForVisible( 'body > div.wrapper > div > div.main-container.col2-left-layout > div > div.col-left.sidebar.col-left-first > div.block.block-account > div.block-content > ul > li.current', 10000 )
            .call( done );
    });

    this.Given( /^I am on my account dashboard$/, { timeout: 10 * 1000 }, function( done ) {
        browser
            .url( browser.options.baseUrl + 'customer/account/' )
            .call( done );
    });

    this.When( /^I cick on the log out link$/, function( done ) {
        browser
            .click( '#header-account > div > ul > li.last' )
            .call( done );
    });

    this.Then( /^I should be redirected to the login page$/, { timeout: 10 * 1000 }, function( done ) {
        browser
            .url( browser.options.baseUrl + 'customer/account/login', 10000 )
            .call( done );
    });
};