import { AppDirectory, SkillsData } from "@/appData";

describe("AppDirectory", () => {
  it("contains all expected programs", () => {
    const programs = Array.from(AppDirectory.values());
    const titles = programs.map((p) => p.title);

    expect(titles).toContain("Welcome - Quick Start Guide");
    expect(titles).toContain("Outlook Express");
    expect(titles).toContain("Projects");
    expect(titles).toContain("Skills & Technologies");
    expect(titles).toContain("Space Cadet Pinball");
  });

  it("has prompt flags on dialog entries", () => {
    const programs = Array.from(AppDirectory.values());
    const prompts = programs.filter((p) => p.prompt);
    const promptTitles = prompts.map((p) => p.title);
    expect(promptTitles).toContain("Error");
    expect(promptTitles).toContain("Info");
    expect(promptTitles).toContain("Warning");
    expect(promptTitles).toContain("Help");
  });
});

describe("SkillsData", () => {
  it("has five skill categories", () => {
    expect(SkillsData).toHaveLength(5);
  });

  it("has skills with valid proficiency levels", () => {
    for (const category of SkillsData) {
      for (const skill of category.skills) {
        expect(skill.level).toBeGreaterThanOrEqual(0);
        expect(skill.level).toBeLessThanOrEqual(100);
      }
    }
  });

  it("has the correct category titles", () => {
    const titles = SkillsData.map((c) => c.title);
    expect(titles).toEqual([
      "Software Development",
      "Cloud & Infrastructure",
      "Voice & Communications",
      "AI & Automation",
      "Microsoft 365",
    ]);
  });
});
