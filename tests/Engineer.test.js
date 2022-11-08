const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an object containing a name, id, email, and officeNumber property when a new class instance is created", () => {
            const obj = new Engineer();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("github" in obj).toEqual(true);
        });
    });

    describe("getRole", () => {
        it("returns that instance of the object", () => {
            const name = "ExampleName";
            const id = "ExampleID";
            const email = "ExampleEmail";
            const github = "ExampleGithub";
            const string = "Engineer"
            const obj = new Engineer(name, id, email, github).getRole();

            expect(obj).toEqual(string);
        });
    });
});