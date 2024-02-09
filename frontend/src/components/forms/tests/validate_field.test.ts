import { validateField } from "../validate_field";

describe("Tests to Validate Name Field",()=>{
    test("return corresponding error when the length of the name given is less than 5",()=>{
        const input=validateField("name","abc");
        const error=["Charactes length must be greater than 5"];
        expect(input).toEqual(error)
    })
    test("return corresponding error when there are special characters",()=>{
        const input = validateField("name","abc._ef")
        const error=["No numbers or special charecters are allowed"];
        expect(input).toEqual(error)
    })

})


describe("Tests to Validate UserName Field",()=>{
    test("return corresponding error when the length of the name given is less than 5",()=>{
        const input=validateField("username","can");
        const error=["Charactes length must be greater than 5"];
        expect(input).toEqual(error)
    })
    test("When there are UpperCase Letters",()=>{
        const input = validateField("username","ABCdefg")
        const error=[ "Username should only contain lowercase alphabets and numbers and underscores"];
        expect(input).toEqual(error)
    })

})