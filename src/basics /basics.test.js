const sum = require('./basics');

describe("example tests", () => {
    it('adds 1 + 2 to equal 3', () => {
        const result = sum(1, 2)
        expect(result).toBe(3);
    });

    it('object assignment', () => {
        const obj = {};
        expect(obj).toEqual({})
    })

})

describe("truthy or falsey", () => {
    it("null", () => {
        const n = null;
        expect(n).toBeFalsy()
        // only use 1 expect 2 is smelly
        expect(n).not.toBeTruthy()
        expect(n).toBeNull()
        expect(n).not.toBeUndefined()
    })
});

describe('numbers', () => {
    it("two plus two", () => {
        const value = 2 + 2;
        expect(value).toBe(4)
        expect(value).toBeGreaterThan(3)
        expect(value).toBeGreaterThanOrEqual(3)
        expect(value).toBeLessThan(100);
        expect(value).toBeLessThanOrEqual(44);
    })

    it("adding floats", () => {
        const value = 0.1 + 0.2;
        expect(value).toBeCloseTo(0.3)
    })
})

describe("string", () => {
    it("there is no I in team", () => {
        expect("team").not.toMatch(/I/)
    })
})

describe("arrays", () => {
    const shoppingLists = [
        'diapers', 'kleenex', 'trash bags', 'paper towels', 'milk'
    ]
    expect(shoppingLists).toContain('milk')
})

function compileAndroidCode() {
    throw new Error("you are using the wrong JDK")
}

describe("exepctions", () => {
    test("compiling adroid goes as expected", () => {
        expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK")
    })

})