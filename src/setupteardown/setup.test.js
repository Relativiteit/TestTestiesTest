const { describe } = require("node:test");

let animals = ['elephant', 'zebra', 'bear', 'tiger'];

// sometimes you want run something before all your tests 
// beforeAll() for example to reseed your DB 
beforeAll(() => {
    console.log('Before All ')
    animals = ['elephant', 'zebra', 'bear', 'tiger'];

})


// sometimes you want to teardown after a test 
// afterEach()

afterEach(() => {
    console.log('afterEach')
    animals = ['elephant', 'zebra', 'bear', 'tiger'];
});

// afterAll() runs after all the tests 

afterAll(() => {
    console.log('afterAll')
    animals = ['elephant', 'zebra', 'bear', 'tiger'];
});


describe("animals array", () => {


    // to not reset the array for every test 
    // use beforeEach and put the array in there :)
    beforeEach(() => {
        console.log('before each')
        animals = ['elephant', 'zebra', 'bear', 'tiger'];
    })
    test('should add animal to end of array', () => {
        animals.push('aligator');
        expect(animals[animals.length - 1]).toBe("aligator");
    })
    test('should add animal the beginning of the array', () => {
        animals.unshift("monkey");
        expect(animals[0]).toBe("monkey");
    })
    test("should have initial length of 4 ", () => {
        expect(animals.length).toBe(4);
    })

})
// test.only to run only 1 test 
describe('testing something else not the array', () => {
    test('true should be truthy', () => {
        expect(true).toBeTruthy()
    })
})

// if you want beforeEach or afterAll to run only for the test in that group 
// put it inside the describe 
