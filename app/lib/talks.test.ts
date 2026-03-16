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
    it("returns all talks with required fields", () => {
      const talks = getAllTalks();
      expect(talks.length).toBeGreaterThan(0);
      for (const talk of talks) {
        expect(talk.slug).toBeTruthy();
        expect(talk.year).toBeTruthy();
        expect(talk.title).toBeTruthy();
        expect(talk.author).toBeTruthy();
        expect(talk.date).toBeTruthy();
      }
    });
  });

  describe("getTalksByYear", () => {
    it("filters talks by year", () => {
      const talks = getAllTalks();
      const years = [...new Set(talks.map((t) => t.year))];
      const year = years[0];
      const byYear = getTalksByYear(year);
      expect(byYear.every((t) => t.year === year)).toBe(true);
      expect(byYear.length).toBeGreaterThan(0);
    });
    it("returns sorted results", () => {
      const talks = getAllTalks();
      const years = [...new Set(talks.map((t) => t.year))];
      const byYear = getTalksByYear(years[0]);
      for (let i = 1; i < byYear.length; i++) {
        const prevDate = new Date(byYear[i - 1].date).getTime();
        const currDate = new Date(byYear[i].date).getTime();
        expect(prevDate).toBeGreaterThanOrEqual(currDate);
      }
    });

    it("returns empty array for non-existent year", () => {
      const talks = getTalksByYear("1999");
      expect(talks).toEqual([]);
    });
  });

  describe("getTalk", () => {
    it("finds a talk by year and slug", () => {
      const all = getAllTalks();
      const sample = all[0];

      const talk = getTalk(sample.year, sample.slug);
      expect(talk).toBeDefined();
      expect(talk?.slug).toBe(sample.slug);
      expect(talk?.year).toBe(sample.year);
    });

    it("returns undefined for non-existent talk", () => {
      const talk = getTalk("2022", "non-existent-talk");
      expect(talk).toBeUndefined();
    });

    it("returns a talk with all required fields populated", () => {
      const all = getAllTalks();
      const sample = all[0];
      const talk = getTalk(sample.year, sample.slug);

      expect(talk?.title).toBeTruthy();
      expect(talk?.author).toBeTruthy();
      expect(talk?.date).toBeTruthy();
      expect(talk?.intro).toBeTruthy();
    });
  });

  describe("formatDate", () => {
    it("formats date with month name, day, and year", () => {
      const formatted = formatDate("2022-08-03");
      expect(formatted).toMatch(/^[A-Z][a-z]+ \d{1,2}, \d{4}$/);
      expect(formatted).toContain("2022");
      expect(formatted).toContain("August");
    });

    it("formats different dates correctly", () => {
      expect(formatDate("2023-01-15")).toContain("January");
      expect(formatDate("2021-12-01")).toContain("December");
    });
  });
});
