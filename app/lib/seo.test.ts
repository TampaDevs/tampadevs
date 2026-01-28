import { describe, it, expect } from "vitest";
import { generateMetaTags } from "./seo";

describe("generateMetaTags", () => {
  it("appends Tampa Devs to title when not present", () => {
    const tags = generateMetaTags({
      title: "About Us",
      description: "Learn about our community",
    });

    const titleTag = tags.find((t) => "title" in t);
    expect(titleTag).toEqual({ title: "About Us | Tampa Devs" });
  });

  it("preserves title when Tampa Devs is already present", () => {
    const tags = generateMetaTags({
      title: "Tampa Devs Community",
      description: "Learn about our community",
    });

    const titleTag = tags.find((t) => "title" in t);
    expect(titleTag).toEqual({ title: "Tampa Devs Community" });
  });

  it("includes all required Open Graph tags", () => {
    const tags = generateMetaTags({
      title: "Test Page",
      description: "Test description",
      url: "https://tampadevs.com/test",
    });

    const ogTags = tags.filter(
      (t) => "property" in t && t.property?.startsWith("og:")
    );
    const ogProperties = ogTags.map((t) => (t as { property: string }).property);

    expect(ogProperties).toContain("og:title");
    expect(ogProperties).toContain("og:description");
    expect(ogProperties).toContain("og:url");
    expect(ogProperties).toContain("og:image");
    expect(ogProperties).toContain("og:type");
    expect(ogProperties).toContain("og:site_name");
  });

  it("includes Twitter card tags", () => {
    const tags = generateMetaTags({
      title: "Test Page",
      description: "Test description",
    });

    const twitterTags = tags.filter(
      (t) => "name" in t && t.name?.startsWith("twitter:")
    );
    const twitterNames = twitterTags.map((t) => (t as { name: string }).name);

    expect(twitterNames).toContain("twitter:card");
    expect(twitterNames).toContain("twitter:title");
    expect(twitterNames).toContain("twitter:description");
    expect(twitterNames).toContain("twitter:image");
  });

  it("adds article meta tags when type is article", () => {
    const tags = generateMetaTags({
      title: "Blog Post",
      description: "A blog post",
      type: "article",
      publishedTime: "2024-01-15",
      author: "Vincent Tang",
    });

    const articleTags = tags.filter(
      (t) => "property" in t && t.property?.startsWith("article:")
    );
    const articleProperties = articleTags.map(
      (t) => (t as { property: string }).property
    );

    expect(articleProperties).toContain("article:published_time");
    expect(articleProperties).toContain("article:author");
    expect(articleProperties).toContain("article:publisher");
  });

  it("includes canonical link tag", () => {
    const tags = generateMetaTags({
      title: "Test",
      description: "Test",
      url: "https://tampadevs.com/about",
    });

    const canonical = tags.find(
      (t) => "tagName" in t && t.tagName === "link" && "rel" in t && t.rel === "canonical"
    );
    expect(canonical).toBeDefined();
    expect((canonical as { href: string }).href).toBe("https://tampadevs.com/about");
  });
});
