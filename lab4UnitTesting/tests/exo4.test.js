const chunk = require("../exo4")

describe('exo 4 ', () => { 
    test('chunk should Divide an array into several sub-arrays of predefined size.', () => { 
        expect(chunk([1 , 2 , 3] , 2)).toStrictEqual([[1 , 2] , [3]])
    })
})