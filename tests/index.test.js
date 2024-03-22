
const { default: testFunc } = await import("../");

describe("check inputs", () => {
    test("nothing", async () => {
        expect(testFunc()).toEqual(false);
    });

    test("boolean", async () => {
        expect(testFunc(true)).toEqual(false);
    });

    test("a string", async () => {
        expect(testFunc("foo")).toEqual(false);
    });

    test("a number", async () => {
        expect(testFunc(123)).toEqual(true);
    });

    test("a decimal", async () => {
        expect(testFunc(123.45)).toEqual(true);
    });

    test("a number instance", async () => {
        expect(testFunc(new Number(123))).toEqual(true);
    });

    test("a number as string", async () => {
        expect(testFunc("123")).toEqual(false);
    });
});
