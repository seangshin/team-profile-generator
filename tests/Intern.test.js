const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an object containing a name, id, email, and officeNumber property when a new class instance is created", () => {
            const obj = new Intern();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("school" in obj).toEqual(true);
        });
    });

    describe("getRole", () => {
        it("returns that instance of the object", () => {
            const name = "ExampleName";
            const id = "ExampleID";
            const email = "ExampleEmail";
            const school = "ExampleSchool";
            const string = "Intern"
            const obj = new Intern(name, id, email, school).getRole();

            expect(obj).toEqual(string);
        });
    });
});