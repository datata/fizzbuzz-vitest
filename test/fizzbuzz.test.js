import { describe, expect, it } from "vitest";
import { fizzbuzz } from "../src/fizzbuzz";

describe('fizzbuzz', () => {
    it('should be a function', () => {
        expect(typeof fizzbuzz).toBe('function')
    })
});