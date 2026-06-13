import type { NextApiRequest, NextApiResponse } from "next";
import handler from "@/pages/api/contact";

// Mock fetch globally
global.fetch = jest.fn();

function mockReq(method = "POST", body = {}) {
  return {
    method,
    body,
  } as NextApiRequest;
}

function mockRes() {
  const res: Partial<NextApiResponse> = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res as NextApiResponse;
}

describe("POST /api/contact", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    delete process.env.RECAPTCHA_SECRET_KEY;
    delete process.env.AZURE_TENANT_ID;
  });

  it("rejects non-POST methods", async () => {
    const req = mockReq("GET");
    const res = mockRes();

    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(405);
    expect(res.json).toHaveBeenCalledWith({ error: "Method not allowed" });
  });

  it("returns 400 when required fields are missing", async () => {
    const req = mockReq("POST", { from: "", subject: "", message: "" });
    const res = mockRes();

    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: "Missing required fields",
    });
  });

  it("returns 500 when email service is not configured", async () => {
    const req = mockReq("POST", {
      from: "test@example.com",
      subject: "Hello",
      message: "Test message",
    });
    const res = mockRes();

    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      error: "Email service not configured",
    });
  });
});
