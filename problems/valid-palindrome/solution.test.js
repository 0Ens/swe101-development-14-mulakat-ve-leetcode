import { isPalindrome } from "./solution.js"
import { describe, it, expect } from "vitest"

describe("isPalindrome", () =>{
    it("Palindrom olan kelime testi", () =>{
        expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true)
    }),
    it("Palindrom olmayan kelime testi", () =>{
        expect(isPalindrome("race a car")).toBe(false)
    }),
    it("bosluk testi", () =>{
        expect(isPalindrome(" ")).toBe(true)
    }),
    it("tek harf testi", () =>{
        expect(isPalindrome("A")).toBe(true)
    }),
    it("harfli palindrome testi", () =>{
        expect(isPalindrome("BA99599AB")).toBe(true)
    })
})