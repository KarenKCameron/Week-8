describe("Blackjack Game", () => {

    describe("dealerShouldDraw Function", () => {
        
        const tenNineHand = [
            { val: 10, displayVal: "10", suit: "spades"},
            { val: 9, displayVal: "9", suit: "spades"},
        ]
        
        const aceSixHand = [
            { val: 11, displayVal: "Ace", suit: "spades"},
            { val: 6, displayVal: "6", suit: "spades"},
        ]

        const tenSixHand = [
            { val: 10, displayVal: "10", suit: "spades"},
            { val: 6, displayVal: "6", suit: "spades"},
        ]
        
        const twoFourTwoFiveHand = [
            { val: 2, displayVal: "2", suit: "spades"},
            { val: 4, displayVal: "4", suit: "spades"},
            { val: 2, displayVal: "2", suit: "spades"},
            { val: 5, displayVal: "5", suit: "spades"},           
        ]

        // - 10, 9 passed in to function should return false
        it("should return false...", () => {
            const result = dealerShouldDraw(tenNineHand);
            expect(result).toEqual(false)            
        });
        // - Ace, 6 passed in to function should return true
        it("should return true...", () => {
            const result = dealerShouldDraw(aceSixHand);
            expect(result).toEqual(true)
        });
        // - 10, 6, Ace passed in to function should return false
        it("should return false...", () => {
            const result = dealerShouldDraw(tenSixHand);
            expect(result).toEqual(false)
        });
        // - 2, 4, 2, 5 passed in should return true
        it("should return true...", () => {
            const result = dealerShouldDraw(twoFourTwoFiveHand);
            expect(result).toEqual(true)
        });
    
    })
})