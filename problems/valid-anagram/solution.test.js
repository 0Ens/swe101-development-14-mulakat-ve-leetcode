import { isAnagram } from "./solution.js";
import { describe, it, expect } from "vitest";

describe ("isAnagram", () => {
    it("anagram olan kelimeler testi", () => {
        expect(isAnagram("anagram","nagaram")).toBe(true)
    });
    it("anagram olmayan kelimeler testi", () => {
        expect(isAnagram("rat","car")).toBe(false)
    });
    it("tek harf testi", () => {
        expect(isAnagram("x","x")).toBe(true)
    })
})