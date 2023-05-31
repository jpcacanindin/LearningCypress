describe('File Upload',() => {
    it ('Single upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        // cy.get('input[id="file-upload"]').selectFile('C:/Users/Paul/Documents/Personal Files/Cacanindin - Resume.pdf')
        cy.get('#drag-drop-upload').selectFile('C:/Users/Paul/Documents/Personal Files/Cacanindin - Resume.pdf', {action:"drag-drop"})
    })
})