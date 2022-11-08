const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should return an object containing a name, id, email, and officeNumber property when a new class instance is created", () => {
            const obj = new Manager();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("officeNumber" in obj).toEqual(true);
        });
    });

    describe("getRole", () => {
        it("returns that instance of the object", () => {
            const name = "ExampleName";
            const id = "ExampleID";
            const email = "ExampleEmail";
            const officeNumber = "ExampleOfficeNumber";
            const string = "Manager"
            const obj = new Manager(name, id, email, officeNumber).getRole();

            expect(obj).toEqual(string);
        });
    });
});