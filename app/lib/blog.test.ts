import { describe, it, expect } from "vitest";
import { getAllPosts, getPostsByYear, getPost, formatDate } from "./blog";

describe("blog utilities", () => {
  describe("getAllPosts", () => {
    it("returns posts sorted by date descending", () => {
      const posts = getAllPosts();

      for (let i = 1; i < posts.length; i++) {
        const prevDate = new Date(posts[i - 1].date).getTime();
        const currDate = new Date(posts[i].date).getTime();
        expect(prevDate).toBeGreaterThanOrEqual(currDate);
      }
    });

    it("returns all posts", () => {
      const posts = getAllPosts();
      expect(posts.length).toBeGreaterThan(0);
    });
  });

  describe("getPostsByYear", () => {
    it("filters posts by year", () => {
      const posts2021 = getPostsByYear("2021");
      expect(posts2021.every((p) => p.year === "2021")).toBe(true);
    });

    it("returns sorted results", () => {
      const posts = getPostsByYear("2022");

      for (let i = 1; i < posts.length; i++) {
        const prevDate = new Date(posts[i - 1].date).getTime();
        const currDate = new Date(posts[i].date).getTime();
        expect(prevDate).toBeGreaterThanOrEqual(currDate);
      }
    });

    it("returns empty array for non-existent year", () => {
      const posts = getPostsByYear("1999");
      expect(posts).toEqual([]);
    });
  });

  describe("getPost", () => {
    it("finds post by year and slug", () => {
      const post = getPost("2021", "our-first-event");
      expect(post).toBeDefined();
      expect(post?.title).toBe("Our first event!");
    });

    it("returns undefined for non-existent post", () => {
      const post = getPost("2021", "non-existent-post");
      expect(post).toBeUndefined();
    });
  });

  describe("formatDate", () => {
    it("formats date with month name, day, and year", () => {
      const formatted = formatDate("2024-01-15");
      // Check format pattern (month name, day, year)
      expect(formatted).toMatch(/^[A-Z][a-z]+ \d{1,2}, \d{4}$/);
      expect(formatted).toContain("2024");
      expect(formatted).toContain("January");
    });

    it("returns consistent format for different dates", () => {
      const formatted1 = formatDate("2023-06-01");
      const formatted2 = formatDate("2022-12-15");

      // Both should follow same format
      expect(formatted1).toMatch(/^[A-Z][a-z]+ \d{1,2}, \d{4}$/);
      expect(formatted2).toMatch(/^[A-Z][a-z]+ \d{1,2}, \d{4}$/);
    });
  });
});
