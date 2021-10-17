import * as pointings from "./pointings"

// @ponicode
describe("processStart", () => {
    let inst: any

    beforeEach(() => {
        inst = new pointings.Pointings({}, {}, {})
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.processStart({ x: 90, y: 70 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.processStart({ x: 70, y: 350 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.processStart({ x: 100, y: 520 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.processStart({ x: 50, y: 320 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.processStart({ x: 70, y: 380 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.processStart({ x: -Infinity, y: -Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("processMove", () => {
    let inst: any

    beforeEach(() => {
        inst = new pointings.Pointings({}, {}, {})
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.processMove({ x: 100, y: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.processMove({ x: 50, y: 4 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.processMove({ x: 400, y: 4 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.processMove({ x: 320, y: 400 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.processMove({ x: 90, y: 350 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.processMove({ x: Infinity, y: Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("processEnd", () => {
    let inst: any

    beforeEach(() => {
        inst = new pointings.Pointings({}, {}, {})
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.processEnd()
        }
    
        expect(callFunction).not.toThrow()
    })
})
