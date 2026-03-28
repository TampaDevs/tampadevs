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

    it("returns all posts with required fields", () => {
      const posts = getAllPosts();
      expect(posts.length).toBeGreaterThan(0);
      for (const post of posts) {
        expect(post.slug).toBeTruthy();
        expect(post.year).toBeTruthy();
        expect(post.title).toBeTruthy();
        expect(post.author).toBeTruthy();
        expect(post.date).toBeTruthy();
      }
    });
  });

  describe("getPostsByYear", () => {
    it("filters posts by year", () => {
      const posts = getAllPosts();
      const years = [...new Set(posts.map((p) => p.year))];
      const year = years[0];
      const byYear = getPostsByYear(year);
      expect(byYear.every((p) => p.year === year)).toBe(true);
      expect(byYear.length).toBeGreaterThan(0);
    });

    it("returns sorted results", () => {
      const posts = getAllPosts();
      const years = [...new Set(posts.map((p) => p.year))];
      const byYear = getPostsByYear(years[0]);
      for (let i = 1; i < byYear.length; i++) {
        const prevDate = new Date(byYear[i - 1].date).getTime();
        const currDate = new Date(byYear[i].date).getTime();
        expect(prevDate).toBeGreaterThanOrEqual(currDate);
      }
    });

    it("returns empty array for non-existent year", () => {
      const posts = getPostsByYear("1999");
      expect(posts).toEqual([]);
    });
  });

  describe("getPost", () => {
    it("finds a post by year and slug", () => {
      const all = getAllPosts();
      const sample = all[0];

      const post = getPost(sample.year, sample.slug);
      expect(post).toBeDefined();
      expect(post?.slug).toBe(sample.slug);
      expect(post?.year).toBe(sample.year);
    });

    it("returns undefined for non-existent post", () => {
      const post = getPost("2021", "non-existent-post");
      expect(post).toBeUndefined();
    });

    it("returns a post with all required fields populated", () => {
      const all = getAllPosts();
      const sample = all[0];
      const post = getPost(sample.year, sample.slug);

      expect(post?.title).toBeTruthy();
      expect(post?.author).toBeTruthy();
      expect(post?.date).toBeTruthy();
      expect(post?.intro).toBeTruthy();
    });
  });

  describe("formatDate", () => {
    it("formats date with month name, day, and year", () => {
      const formatted = formatDate("2024-01-15");
      expect(formatted).toMatch(/^[A-Z][a-z]+ \d{1,2}, \d{4}$/);
      expect(formatted).toContain("2024");
      expect(formatted).toContain("January");
    });

    it("formats different dates correctly", () => {
      expect(formatDate("2023-06-01")).toContain("June");
      expect(formatDate("2022-12-15")).toContain("December");
    });
  });
});
