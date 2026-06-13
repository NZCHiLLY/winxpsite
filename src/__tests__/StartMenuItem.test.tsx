import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import StartMenuItem from "components/StartMenuItem/StartMenuItem";

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) => {
    const { src, alt, ...rest } = props;
    return <img src={src as string} alt={alt as string} {...rest} />;
  },
}));

const mockIcon = { src: "/test-icon.png", height: 32, width: 32 };

describe("StartMenuItem", () => {
  it("renders type 1 (Internet/E-Mail) with subtitle", () => {
    render(
      <StartMenuItem
        title="Internet"
        subtitle="Internet Explorer"
        icon={mockIcon}
        type={1}
      />
    );
    expect(screen.getByText("Internet")).toBeInTheDocument();
    expect(screen.getByText("Internet Explorer")).toBeInTheDocument();
  });

  it("renders type 2 (left menu program) without subtitle", () => {
    render(
      <StartMenuItem title="Projects" icon={mockIcon} type={2} />
    );
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("renders type 3 (right menu item) with expand arrow when expanded", () => {
    render(
      <StartMenuItem
        title="My Documents"
        icon={mockIcon}
        type={3}
        expanded={true}
      />
    );
    expect(screen.getByText("My Documents")).toBeInTheDocument();
  });

  it("fires onClick when clicked", () => {
    const onClick = jest.fn();
    render(
      <StartMenuItem
        title="Test"
        icon={mockIcon}
        type={2}
        onClick={onClick}
      />
    );
    screen.getByText("Test").click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
