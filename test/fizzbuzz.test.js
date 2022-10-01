import { describe, expect, it } from "vitest";
import { fizzbuzz } from "../src/fizzbuzz";

describe('fizzbuzz', () => {
    it('should be a function', () => {
        expect(typeof fizzbuzz).toBe('function')
    })

    it('if parameter provided is not a number should throw', () => {
        expect(() => fizzbuzz()).toThrow('Parameter provided is not a number.');
    })

    it('if parameter provided is not a number should throw', () => {
        expect(() => fizzbuzz(NaN)).toThrow('Parameter provided is not a number.');
    })

    it('return 1 if parameter provider is 1', () => {
        expect(() => fizzbuzz(1)).toBe(1);
    })
});