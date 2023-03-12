const axios = require("axios");
const { hasUncaughtExceptionCaptureCallback } = require("process");

const fetchData = async (id) => {
    const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    // it's not making the real request but what we put in down below. 
    console.log(results)
    return results.data
}

test("mock axios", async () => {
    // spyOn package first param a object this case axios 
    // 2nd param is the method 
    jest.spyOn(axios, "get").mockReturnValueOnce({
        data: {
            id: 1,
            todo: "Get a better job"
        }
    })
    const results = await fetchData(1);

    expect(results.todo).toBe("Get a better job")
})