import { describe, expect, it } from "vitest";
import { isLove } from "../src/oppositesAttract";

describe("isLove as function", () => {
  it("return true if one of the flowers has an odd number of petals and the other has an even number of petals", () => {
    //Given
    const petalsFlower1 = 1;
    const petalsFlower2 = 4;
    const expected = true;
    //When
    const result = isLove(petalsFlower1, petalsFlower2);
    //Then
    expect(result).toBeTypeOf("boolean");
    expect(result).toEqual(expected);
  });

  it("return false if both numbers of petals are even", () => {
    //Given
    const petalsFlower1 = 2;
    const petalsFlower2 = 2;
    const expected = false;
    //When
    const result = isLove(petalsFlower1, petalsFlower2);
    //Then
    expect(result).toBeTypeOf("boolean");
    expect(result).toEqual(expected);
  });

  it("return true if one of the flowers has an odd number of petals and the other has no petals (0 is considered and even number)", () => {
    //Given
    const petalsFlower1 = 0;
    const petalsFlower2 = 1;
    const expected = true;
    //When
    const result = isLove(petalsFlower1, petalsFlower2);
    //Then
    expect(result).toBeTypeOf("boolean");
    expect(result).toEqual(expected);
  });

  it("return false if there's no petals (both even)", () => {
    //Given
    const petalsFlower1 = 0;
    const petalsFlower2 = 0;
    const expected = false;
    //When
    const result = isLove(petalsFlower1, petalsFlower2);
    //Then
    expect(result).toBeTypeOf("boolean");
    expect(result).toEqual(expected);
  });

  it("not an integer input case", () => {
    //Given
    const petalsFlower1 = 1.5;
    const petalsFlower2 = 4;
    const expected = "The number of petals must be and integer";
    //When
    const result = isLove(petalsFlower1, petalsFlower2);
    //Then
    expect(result).toBeTypeOf("string");
    expect(result).toEqual(expected);
  });

  it("not an integer input case", () => {
    //Given
    const petalsFlower1 = "miau";
    const petalsFlower2 = 4;
    const expected = "The number of petals must be and integer";
    //When
    const result = isLove(petalsFlower1, petalsFlower2);
    //Then
    expect(result).toBeTypeOf("string");
    expect(result).toEqual(expected);
  });
});
