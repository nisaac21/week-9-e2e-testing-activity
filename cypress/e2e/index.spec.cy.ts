
describe('Calculator Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  
  it('should have the title "Calculator App"', () => {
    cy.get('title').should('have.text', 'Calculator App');
  });

  it('should display 2 when "1 + 1 = " is clicked', () => {

    // Assemble
    cy.get('.key-1').click();
    cy.get('.key-add').click();
    cy.get('.key-1').click();
  
    // Act
    cy.get('.key-equals').click();
  
    // Assert
    cy.get('.calculator-display').should('have.text', '2');
  
  });

  it('should multiply by a negative correctly', () => {

    cy.get('.key-subtract').click();
    cy.get('.key-2').click();
    cy.get('.key-multiply').click();
    cy.get('.key-3').click();
    cy.get('.key-equals').click();

    cy.get('.calculator-display').should('have.text', '-6');


  })

  it('should convert to a negative if number is subtracted from 0', () => {

    cy.get('.key-0');
    cy.get('.key-subtract').click();
    cy.get('.key-5').click();
    cy.get('.key-equals').click();

    cy.get('.calculator-display').should('have.text', '-5');

  })

  it('should convert to a positive if two negative numbers multiplied', () => {

    cy.get('.key-2').click();
    cy.get('.key-sign');
    cy.get('.key-multiply').click();
    cy.get('.key-3').click();
    cy.get('.key-sign');
    cy.get('.key-equals').click();

    cy.get('.calculator-display').should('have.text', '6');


  })

  it('should convert to a positive if two negative numbers multiplied', () => {

    
    cy.get('.key-2').click();
    cy.get('.key-multiply').click();
    cy.get('.key-3').click();
    cy.get('.key-sign');
    cy.get('.key-equals').click();

    cy.get('.calculator-display').should('have.text', '6');


  })

  it('should throw Infinity if dividing by 0', () => {

    
    cy.get('.key-5').click();
    cy.get('.key-divide').click();
    cy.get('.key-0').click();
    cy.get('.key-equals').click();

    cy.get('.calculator-display').should('have.text', 'Infinity');

  });

  it('should convert to negative if dividing positive by negative', () => {
    
    cy.get('.key-4').click();
    cy.get('.key-divide').click();
    cy.get('.key-subtract').click();
    cy.get('.key-2').click();
    cy.get('.key-equals').click();

    cy.get('.calculator-display').should('have.text', '-2');

  });  

  it('should handle flipping signs', () => {

    
    cy.get('.key-subtract').click();
    cy.get('.key-2').click();
    cy.get('.key-equals').click();

    cy.get('.calculator-display').should('have.text', '-2');

  });  

  it('should handle decimal math multiplication', () => {
    
    cy.get('.key-4').click();
    cy.get('.key-multiply').click();
    cy.get('.key-0').click();
    cy.get('.key-dot').click();
    cy.get('.key-5').click();
    cy.get('.key-equals').click();

    cy.get('.calculator-display').should('have.text', '2');

  });  

  it('should handle decimal division', () => {
    
    cy.get('.key-4').click();
    cy.get('.key-divide').click();
    cy.get('.key-0').click();
    cy.get('.key-dot').click();
    cy.get('.key-5').click();
    cy.get('.key-equals').click();

    cy.get('.calculator-display').should('have.text', '8');

  });  



});
