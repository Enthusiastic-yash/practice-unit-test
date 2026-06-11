import { describe , it , expect } from "vitest";
import {loadDeck} from "../loadDeck"


describe('laodDeck' ,() =>{
    it('return a promise that resolve' , async () =>{
        const result  = loadDeck()
        expect(result).toBeInstanceOf(Promise)
       await  expect(result).resolves.toBeDefined()
    })

    it('resolve a {suits[4], values[13] } deck', async () =>{
        const result = await loadDeck();
        

        expect(result).toEqual(
            expect.objectContaining(
                {
                    suits: expect.any(Array),
                    values: expect.any(Array)
                }
            )
        )

            //above single test can cover all the below  commented test
        // expect(typeof result).toBe('object')
        // expect(result).toHaveProperty('suits')
        // expect(result).toHaveProperty('values')

        // expect(Array.isArray(result.suits)).toBe(true);
        // expect(Array.isArray(result.values)).toBe(true);

        expect(result.suits).toHaveLength(4)
        expect(result.values).toHaveLength(13)
    })

    it('support another id, e.g. "pokemon', async () =>{
        const deck = await loadDeck()

        expect(deck.suits).toHaveLength(4)
        expect(deck.values).toHaveLength(13)
    })

    it('reject wiht an error for unknown ids' , async () =>{
        const deck = loadDeck('unknown-id')
       await  expect(deck).rejects.toThrow(/not found/i)
    })

})