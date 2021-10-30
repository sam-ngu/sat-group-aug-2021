// unit

const Employee = require("../lib/Employee");

function createEmployee(name = "sam", id = "123", email = "sam@scam.com") {
    return new Employee(name, id, email);
}

// title
//
describe("Test Employee Class", () => {
    it("should be able to instantiate", () => {
        // 1. define the goal
        // 2. recreate the env
        // 3. define a source of truth
        // 4. execute and compare

        const result = createEmployee();
        expect(result instanceof Employee).toBe(true);
    });

    it('should contain the "name" property', () => {
        const result = createEmployee();

        expect(result).toHaveProperty("name");
    });

    it('should contain the "email" property', () => {
        const result = createEmployee();

        expect(result).toHaveProperty("email");
    });

    it('should contain the "id" property', () => {
        const result = createEmployee();

        expect(result).toHaveProperty("id");
    });

    it('should return name when "getName()" is called', () => {
        const name = "abc";
        const result = createEmployee(name);

        expect(result.getName()).toBe(name);
    });

    it('should return email when "getEmail()" is called', () => {
        const email = "email.com";
        const result = createEmployee("123", "123", email);

        expect(result.getEmail()).toBe(email);
    });

    it('should return id when "getId()" is called', () => {
        const id = "abc";
        const result = createEmployee("123", id);

        expect(result.getId()).toBe(id);
    });

    it('should return role when "getRole()" is called', () => {
        const role = "Employee";
        const result = createEmployee();

        expect(result.getRole()).toBe(role);
    });


    it('can only accept string "name"', () => {

        const makeEmployee = () => {
            return new Employee(123);
        }

        expect(makeEmployee).toThrow(Error)
    })

});
