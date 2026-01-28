import { describe, it, expect } from "vitest";
import { getAllTalks, getTalksByYear, getTalk, formatDate } from "./talks";

describe("talks utilities", () => {
  describe("getAllTalks", () => {
    it("returns talks sorted by date descending", () => {
      const talks = getAllTalks();

      for (let i = 1; i < talks.length; i++) {
        const prevDate = new Date(talks[i - 1].date).getTime();
        const currDate = new Date(talks[i].date).getTime();
        expect(prevDate).toBeGreaterThanOrEqual(currDate);
      }
    });

    it("returns all talks", () => {
      const talks = getAllTalks();
      expect(talks.length).toBeGreaterThan(0);
    });
  });

  describe("getTalksByYear", () => {
    it("filters talks by year", () => {
      const talks2022 = getTalksByYear("2022");
      expect(talks2022.every((t) => t.year === "2022")).toBe(true);
      expect(talks2022.length).toBeGreaterThan(0);
    });

    it("returns sorted results", () => {
      const talks = getTalksByYear("2022");

      for (let i = 1; i < talks.length; i++) {
        const prevDate = new Date(talks[i - 1].date).getTime();
        const currDate = new Date(talks[i].date).getTime();
        expect(prevDate).toBeGreaterThanOrEqual(currDate);
      }
    });

    it("returns empty array for non-existent year", () => {
      const talks = getTalksByYear("1999");
      expect(talks).toEqual([]);
    });
  });

  describe("getTalk", () => {
    it("finds talk by year and slug", () => {
      const talk = getTalk("2022", "cybersecurity");
      expect(talk).toBeDefined();
      expect(talk?.title).toBe("Understanding Application Security");
      expect(talk?.author).toBe("Charlton Trezevant");
    });

    it("returns undefined for non-existent talk", () => {
      const talk = getTalk("2022", "non-existent-talk");
      expect(talk).toBeUndefined();
    });

    it("returns talks with YouTube IDs", () => {
      const talk = getTalk("2022", "intro-to-devops");
      expect(talk?.youtubeId).toBe("2AoRbNU1iNc");
    });
  });

  describe("formatDate", () => {
    it("formats date with month name, day, and year", () => {
      const formatted = formatDate("2022-08-03");
      // Check format pattern (month name, day, year)
      expect(formatted).toMatch(/^[A-Z][a-z]+ \d{1,2}, \d{4}$/);
      expect(formatted).toContain("2022");
      expect(formatted).toContain("August");
    });
  });
});
