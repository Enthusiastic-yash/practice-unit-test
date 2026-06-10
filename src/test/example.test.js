import { describe , it, expect } from "vitest";
import { longestString , isPrime , shippingCost } from "../example"


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

    it('return false for non integer number' , () =>{
        expect(isPrime(2.5)).toBe(false)
    })

})


describe('example.shippingCost',() =>{
    // it('return a number',() =>{
    //     expect(shippingCost(2)).toBeTypeOf('number')
    // })

    it('charges correct prices for interior weights' , () =>{
        expect(shippingCost(0.5)).toBe(3.99)
        expect(shippingCost(3)).toBe(5.99)
        expect(shippingCost(10)).toBe(8.99)
        expect(shippingCost(50)).toBe(14.99)
    })

    it('charges the correct prices at boundries' , () =>{
        expect(shippingCost(1)).toBe(3.99)
        expect(shippingCost(5)).toBe(5.99)
        expect(shippingCost(20)).toBe(8.99)
        expect(shippingCost(21)).toBe(14.99)
    })

    it('applies FREESHIPPING coupon exactly' ,() =>{
        expect(shippingCost(1 , 'FREESHIPPING')).toBe(0)
        expect(shippingCost(21 , 'FREESHIPPING')).toBe(0)
    })

    it('ignore non matching coupon',() =>{
        expect(shippingCost(1 , 'freeshipping')).toBe(3.99)
        expect(shippingCost(5 , 'nothing')).toBe(5.99)
    })

    it('throw an error for invalid weight',() =>{
        // expect(() => shippingCost(0)).toThrow('the Weight must be greater than 0') //strict check 
        expect(() => shippingCost(0)).toThrow(/(?=.*weight)(?=.*0)/i)   //check weight and 0 should be present through regex
        expect(() => shippingCost(-5)).toThrow(/(?=.*weight)(?=.*0)/i)   
        expect(() => shippingCost('2')).toThrow(/(?=.*weight)(?=.*number)/i)   
    })


    it('throw an error when coupon is not a string' ,() =>{
        expect(() => shippingCost(1, 123)).toThrow(/coupon/i)
        expect(() => shippingCost(1, null)).toThrow(/coupon/i)
    })


})