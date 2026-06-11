import { describe , it , expect  } from "vitest";
import {createCards} from "../createCard"


describe('createCards' ,() =>{
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
  const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']

  it('return an array' , () =>{
    const cards =  createCards({suits , values})
    expect(Array.isArray(cards)).toBe(true)
  })

  it('create a deck of 52 cards',() =>{
     const cards =  createCards({suits , values})
     expect(cards).toHaveLength(52)
  })

  it('throws an error if suits or value are not standard lenght' , () =>{
    expect(() => createCards({suits: ['Heart'] , values})).toThrow(/4/)
    expect(() => createCards({suits , values:[1,2,3]})).toThrow(/13/)
  })

  it('throw an error if suits or value are not an array' ,() =>{
    expect(() => createCards({suits:' not an array' , values})).toThrow()
  })


  it('create card object with {value , suit } properties' ,() =>{
    const cards = createCards({suits , values})
    const sample = cards[0]
    expect(sample).toBeTypeOf('object')
    expect(sample).toHaveProperty('suit')
    expect(sample).toHaveProperty('value')
  })

  it('create combination of suits and values',() =>{
    const cards = createCards({suits , values})
    const tenOfHearts = cards.find(e => e.value === '10' && e.suit === 'Hearts')
    expect(tenOfHearts).toBeDefined()

    const aceOfSpades = cards.find(e => e.value === 'Ace' && e.suit === 'Spades')
    expect(aceOfSpades).toBeDefined()
  })

  it('throws an error for duplicate suits or values', () =>{
    expect(() => createCards({suits:['Hearts', 'Diamonds', 'Clubs','Clubs'], values})).toThrow(/duplicates/)
  
    expect(() => createCards({suits , values:['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'Ace']})).toThrow(/duplicates/)
  })


})