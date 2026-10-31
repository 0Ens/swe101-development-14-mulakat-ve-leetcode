import { describe, it, expect } from "vitest";
import { twoSum } from "./solution.js";

describe ("twoSum", () => {
    it("leetcodeun istedigi ornek 1", () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0,1])
    });
    it("leetcodeun istedigi ornek 2", () => {
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
    });
    it("leetcodeun istedigi ornek 3", () => {
        expect(twoSum([3, 3], 6)).toEqual([0, 1])
    });
    it("negatif sayi ev son eleman testi", () =>{
        expect(twoSum([-2,5,8], 6)).toEqual([0, 2])
    });
})