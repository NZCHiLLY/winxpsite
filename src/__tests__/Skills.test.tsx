import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Skills from "@/programs/Skills";

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) => {
    const { src, alt, ...rest } = props;
    return <img src={src as string} alt={alt as string} {...rest} />;
  },
}));

describe("Skills", () => {
  it("renders all skill categories", () => {
    render(<Skills />);

    expect(screen.getByText("Skills & Technologies")).toBeInTheDocument();
    expect(screen.getByText("Software Development")).toBeInTheDocument();
    expect(screen.getByText("Cloud & Infrastructure")).toBeInTheDocument();
    expect(screen.getByText("Voice & Communications")).toBeInTheDocument();
    expect(screen.getByText("AI & Automation")).toBeInTheDocument();
    expect(screen.getByText("Microsoft 365")).toBeInTheDocument();
  });

  it("renders progress bars for each skill", () => {
    render(<Skills />);
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("VoIP (3CX / SIP)")).toBeInTheDocument();
    expect(screen.getByText("LLM / RAG Systems")).toBeInTheDocument();
    expect(screen.getByText("Entra ID / Identity")).toBeInTheDocument();
  });

  it("renders category descriptions", () => {
    render(<Skills />);
    expect(
      screen.getByText("Select a category to expand and view proficiency levels.")
    ).toBeInTheDocument();
  });
});
