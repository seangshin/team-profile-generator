const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object containing a name, id, and email property when a new class instance is created", () => {
            const obj = new Employee();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
        });
    });

    describe("getName", () => {
        it("should return the name defined within that instance of the object", () => {
            const name = "ExampleName";
            const id = "ExampleID";
            const email = "ExampleEmail";
            const objName = new Employee(name, id, email).getName();

            expect(name).toEqual(objName);
        });
    });

    describe("getId", () => {
        it("should return the ID defined within that instance of the object", () => {
            const name = "ExampleName";
            const id = "ExampleID";
            const email = "ExampleEmail";
            const objId = new Employee(name, id, email).getId();

            expect(id).toEqual(objId);
        });
    });

    describe("getEmail", () => {
        it("should return the email defined within that instance of the object", () => {
            const name = "ExampleName";
            const id = "ExampleID";
            const email = "ExampleEmail";
            const objEmail = new Employee(name, id, email).getEmail();

            expect(email).toEqual(objEmail);
        });
    });

    describe("getRole", () => {
        it("returns a string describing the class", () => {
            const name = "ExampleName";
            const id = "ExampleID";
            const email = "ExampleEmail";
            const string = "Employee"
            const obj = new Employee(name, id, email).getRole();

            expect(obj).toEqual(string);
        });
    });
});