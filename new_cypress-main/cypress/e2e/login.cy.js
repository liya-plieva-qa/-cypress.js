describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
        cy.visit('/');  // Зашли на сайт
    });

    afterEach('Конец теста', function () {
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
       });

    it('Верный пароль и верный логин', function () {
        
         cy.get('#mail').type('german@dolnikov.ru'); // Валидный логин
         cy.get('#pass').type('iLoveqastudio1'); // Валидный пароль
         cy.get('#loginButton').click(); // Нажать на кнопку войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // После авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю

     })
     it('Проверка логики восстановления пароля', function () {
       
        cy.get('#forgotEmailButton').click(); // Нажать забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввожу почту для восстановления пароля
        cy.get('#restoreEmailButton').click(); // Нажать на кнопку отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    })
    it('Неверный пароль и верный логин', function () {
        
        cy.get('#mail').type('german@dolnikov.ru'); // Валидный логин
        cy.get('#pass').type('iLoveqastudio'); //  Пароль с ошибкой
        cy.get('#loginButton').click(); // Нажать на кнопку войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // После авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    })
    it('Верный пароль и неверный логин', function () {
        
        cy.get('#mail').type('germa@dolnikov.ru'); // Невалидный логин
        cy.get('#pass').type('iLoveqastudio1'); //  Валидный пароль
        cy.get('#loginButton').click(); // Нажать на кнопку войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет');  // После авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    })

     it('Проверка что в логине есть @', function () {
        
        cy.get('#mail').type('germandolnikov.ru'); // Невалидный логин
        cy.get('#pass').type('iLoveqastudio1'); //  Валидный пароль
        cy.get('#loginButton').click(); // Нажать на кнопку войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');  // После авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
     })
     it('Gриведение к строчным буквам в логине', function () {
        
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Логин, содержащий заглавные буквы
        cy.get('#pass').type('iLoveqastudio1'); //  Валидный пароль
        cy.get('#loginButton').click(); // Нажать на кнопку войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет');  // После авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
     })
     })
 
 
  
 
