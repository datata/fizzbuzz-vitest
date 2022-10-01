import { describe, expect, it } from "vitest";
import { fizzbuzz } from "../src/fizzbuzz";

describe('fizzbuzz', () => {
    it('should be a function', () => {
        expect(typeof fizzbuzz).toBe('function')
    })

    it('if parameter provided is not a number should throw', () => {
        expect(() => fizzbuzz()).toThrow('Parameter provided is not a number.');
    })
});