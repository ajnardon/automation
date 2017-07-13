module.exports = function () {
    this.Given( /^I am on the create account page$/, { timeout: 10 * 1000 }, function( done ) {
        browser
            .url( 'https://rmstaging.rebeccaminkoff.com/customer/account/login/' )
            .call( done );
    });

    this.When( /^I fill out the registration fields with valid credentials$/, function( done ) {
        browser
            .setValue( '#firstname','Test' )
            .setValue( '#lastname','Test' )
            .setValue( '#email_address', 'test@test.com' )
            .setValue( '#password', 'pass4test' )
            .setValue( '#confirmation', 'pass4test' )
            .call( done );
    });

    this.When( /^I click the submit button$/, function( done ) {
        browser
            .click( '#form-validate > div.buttons-set > button' )
            .call( done );
    });
};
