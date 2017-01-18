/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

describe('Calculator ', function() {

// necessary
it('should add two numbers correctly', function() {
     
    expect(calculator.add(2,2)).toBe(4);
});
it('should subtract two numbers correctly', function() {
    
    expect(calculator.subtract(2,2)).toBe(0);
});
// helpful but not needed
it('should add negative numbers', function() { 
    expect(calculator.add(-2,-2)).toBe(-4);
});
it('should multiply correctly', function() {
     expect(calculator.multiply(-2,-2)).toBe(4);
      expect(calculator.multiply(0,-2)).toBe(0);
       expect(calculator.multiply(0,0)).toBe(0);
        expect(calculator.multiply(2,2)).toBe(4);
});
});