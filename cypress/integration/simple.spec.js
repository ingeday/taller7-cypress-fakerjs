context("Login Tests", ()=>{
    it("makes many wrong login attemp", ()=>{
        cy.visit("https://habitica.com/static/home")
        cy.get(".login-button").click();

        cy.get("#usernameInput").type("fake@fake.com").should("have.value","fake@fake.com");
        cy.get("#passwordInput").type("12345");

        cy.get(".btn-info[type='submit']").click();
        cy.contains("dirección de correo electrónico/nombre de usuario o contraseña son incorrectos").should('be.visible')
    })
})