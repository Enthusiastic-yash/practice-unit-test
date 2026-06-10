import { describe , it, expect } from "vitest";
import { longestString , isPrime } from "../example"


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


describe('example.isPrime',() =>{
    it('return truth for prime number' ,() =>{
        expect(isPrime(3)).toBe(true)
        expect(isPrime(2)).toBe(true)
        expect(isPrime(5)).toBeTruthy()
    })

    it('return false from  non prime nummber' , () =>{
        expect(isPrime(1)).toBe(false)
        expect(isPrime(0)).toBe(false)
        expect(isPrime(6)).toBeFalsy()
    })

    it('matches results in an array using toEqual' , () =>{
        const numbers = [2,3,4,5]
        const results = numbers.map(isPrime)
        expect(results).toEqual([true , true , false , true])
    })

    it('detects prime  with in a filtered list' ,() =>{
        const numbers = [1,2,3,4,5,6,7]
        const primes = numbers.filter(isPrime)
        expect(primes).toContain(7)
        expect(primes).not.toContain(4)
    })

    it('thorws an error when passed a non-number' , () =>{
        const badCall = () => isPrime('hello')
        expect(badCall).toThrow()
        expect(badCall).toThrow('Input must be a number')
    })


    it('has correct type for result' ,() =>{
        expect(isPrime(7)).toBeTypeOf('boolean')
        expect(typeof isPrime(4)).toBe('boolean')
    })

})