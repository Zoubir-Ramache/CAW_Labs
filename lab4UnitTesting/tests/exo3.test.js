describe('exo 3 ', () => { 
    test('this should log the array ', () => { 
        const consoleSpy = jest.spyOn(console , "log")

        require("../exo3")
        expect(consoleSpy).toHaveBeenNthCalledWith(1 , "Red,Green,White,Black")
        expect(consoleSpy).toHaveBeenNthCalledWith(2 , "Red,Green,White,Black")
        expect(consoleSpy).toHaveBeenNthCalledWith(3 , "RedGreenWhiteBlack")
        consoleSpy.mockRestore()
     })
 })
