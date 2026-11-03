import { containsDuplicate } from "./solution.js"
import { describe, it , expect } from "vitest"

describe ( "containsDuplicate",  () => {
    it("ilk elemanla son eleman ayni", () => {
        expect(containsDuplicate([1,2,3,1])).toBe(true)
    });
    it("hic tekrar etmeyen", () =>{
        expect(containsDuplicate([1,2,3,4])).toBe(false)
    });
    it("cok sayida tekrar eden ", () =>{
        expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBe(true)
    });
    it("tek elemanli dizi testi", () =>{
        expect(containsDuplicate([1])).toBe(false)
    });
})