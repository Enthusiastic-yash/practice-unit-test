import { describe , it, expect } from "vitest";
import { longestString } from "../example"


describe('example.longestString',() =>{
    it('return longest string',() =>{
        const longest = longestString('apple' , 'banana')
        expect(longest).toBe('banana')
    })

    it('return first string when both are equal' ,() =>{
        expect(longestString('hello' , 'yahoo')).toBe('hello')
    })

    it('handles empty string' , () =>{
        expect(longestString('' , 'hello')).toBe('hello')
        expect(longestString('nodejs' , '')).toBe('nodejs')
        expect(longestString('' , '')).toBe('')
    })

    it('ignore trailing and white spaces' ,() =>{
        expect(longestString('   hey    ' , 'claude')).toBe('claude')
    })

})