// Testing all the of the project

import * as functions from "./main.js" 

console.log(functions);

const { capitalize, 
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray } = functions;

// 1

test("Capitalize", () => {
    expect(capitalize("hello world")).toMatch("Hello world");
    expect(capitalize("SAYONARA")).toMatch("SAYONARA");
    expect(capitalize("_lol_")).toMatch("_lol_");
    expect(capitalize("lOl")).toMatch("LOl");
    expect(capitalize(666)).toMatch("");
});

// 2

test("Reverse string", () => {
    expect(reverseString("hello world")).toMatch("dlrow olleh");
    expect(reverseString("SAYONARA")).toMatch("ARANOYAS");
    expect(reverseString("_lol_")).toMatch("_lol_");
    expect(reverseString("lOl_")).toMatch("_lOl");
    expect(reverseString(666)).toMatch("");
});

// 3

test("Calculator", () => {
    expect(calculator.add(14, 2)).toEqual(16);
    expect(calculator.substract(14, 2)).toEqual(12);
    expect(calculator.multiply(14, 2)).toEqual(28);
    expect(calculator.divide(14, 2)).toBeCloseTo(7);
});

// 4

test("Cipher basic case", () => {
    expect(caesarCipher("caesar cipher", 5)).toMatch("hfjxfw hnumjw");
});

test("Cipher sentence case", () => {
    expect(caesarCipher("Seems like Manon is the prettiest girl in the world!", 10))
        .toMatch("Coowc vsuo Wkxyx sc dro zboddsocd qsbv sx dro gybvn!");
});

test("Cipher special chars case", () => {
    expect(caesarCipher("Oh fu#~*|g s!$t !", 4)).toMatch("Sl jy#~*|k w!$x !");
});

test("Cipher border cases", () => {
    expect(caesarCipher(66, 6)).toMatch("");
    expect(caesarCipher(66, "lol")).toMatch("");
});

// 6

test("Analyze array", () => {
    const arr = [25, 37, 46, 32, 8, 27, 2, 15, 97, 84];
    expect(analyzeArray(arr).average).toBeCloseTo(37.3);
    expect(analyzeArray(arr).min).toEqual(2);
    expect(analyzeArray(arr).max).toEqual(97);
    expect(analyzeArray(arr).length).toEqual(10);
});

test("Analyze bad array", () => {
    expect(analyzeArray([1, 2, 3, "4", {}])).toEqual(null)
    expect(analyzeArray("bleh")).toEqual(null)
});
