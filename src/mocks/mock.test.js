const forEach = (items, callback) => {
    for (let i = 0; i < items.length; i++) {
        callback(items[i])
    }
}

test("mock callback", () => {
    const mockCalledBack = jest.fn(x => 42 + x);
    forEach(['zero', 1, 'spread'], mockCalledBack);
    // each mockCalledBack has a mock properties and calls 
    expect(mockCalledBack.mock.calls.length).toBe(3);
    // [ call1, call2 ]

    expect(mockCalledBack.mock.calls[2][0]).toMatch('spread');
    // expect(mockCalledBack.mock.calls[0][0]).toBe(0)
    // calls[0] is the first call first parameter so items
    // calls[0][0] get the second parameter 
    expect(mockCalledBack.mock.results[0].value).toBe('42zero')
    expect(mockCalledBack.mock.results[1].value).toBe(43)
}
)

test("mock return function", () => {
    // create mock function 
    const mock = jest.fn();

    mock.mockReturnValueOnce(true).mockReturnValueOnce('goats').mockReturnValueOnce(false);

    const results = mock();
    const results1 = mock();
    const results2 = mock();



    expect(results).toBe(true)
    expect(results1).toBe('goats')
    expect(results2).toBe(false)
    console.log(results)
})


/* [1, 2, 3, 4, 5].forEach(() => {

}) */