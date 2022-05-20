import {Example} from "../main/example";

describe('string calculator', () => {
    it("should return 0 if given an empty string", () => {
        const example = new Example("");
        expect(example).toBe(0);
    })
})
