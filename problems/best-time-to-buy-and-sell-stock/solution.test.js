import { maxProfit } from "./solution.js";
import { describe, it, expect } from "vitest";

describe("maxProfit", () =>{
    it("arasinda 1 den fazla gun farki testi", () =>{
        expect(maxProfit([7,1,5,3,6,4])).toEqual(5)
    });
    it("kar edilemeyecek test", () => {
        expect(maxProfit([7,6,4,3,1])).toEqual(0)
    });
    it("tek eleman testi", () =>{
        expect(maxProfit([5])).toEqual(0)
    });
})