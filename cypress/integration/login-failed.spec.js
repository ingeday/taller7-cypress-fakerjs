context("Login Tests", ()=>{
    it("makes two wrong login attempts", ()=>{
        cy.visit("/static/home")
        cy.get(".login-button").click();

            let fake_email = cy.faker.internet.email();
            let fake_passw = cy.faker.internet.password();

            cy.get("#usernameInput").type(fake_email).should("have.value",fake_email);
            cy.get("#passwordInput").type(fake_passw);

            cy.get(".btn-info[type='submit']").click();
            cy.contains("dirección de correo electrónico/nombre de usuario o contraseña son incorrectos").should('be.visible')
            cy.wait(1000);
    })

    it("makes a non-password login attempt", ()=>{
        cy.visit("/static/home")
        cy.get(".login-button").click();

        
            let fake_email = cy.faker.internet.email();
            cy.get("#usernameInput").type(fake_email).should("have.value",fake_email);
           

            cy.get(".btn-info[type='submit']").click();
            cy.contains("Falta la contraseña").should('be.visible')

        
    })

    it("makes a non-username login attempt", ()=>{
        cy.visit("/static/home")
        cy.get(".login-button").click();

        let fake_passw = cy.faker.internet.password();
        cy.get("#passwordInput").type(fake_passw);
        
        cy.get(".btn-info[type='submit']").click();
        cy.contains("Falta el nombre de usuario").should('be.visible')
        
    })
})