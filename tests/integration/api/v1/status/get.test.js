describe("GET /api/v1/status", () => {
  let response;
  let responseBody;
  let parsedUpdatedAt;

  beforeAll(async () => {
    response = await fetch("http://localhost:3000/api/v1/status");
    responseBody = await response.json();
    parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  });

  it("should return 200", () => {
    expect(response.status).toBe(200);
  });

  it("should have updated_at defined", () => {
    expect(responseBody.updated_at).toBeDefined();
  });

  it("should have updated_at in ISO format", () => {
    expect(responseBody.updated_at).toEqual(parsedUpdatedAt);
  });

  it("should have database version 16.0", () => {
    expect(responseBody.dependencies.database.version).toEqual("16.0");
  });

  it("should have database max connections equal to 100", () => {
    expect(responseBody.dependencies.database.max_connections).toEqual(100);
  });

  it("should have database opened connections equal to 1", () => {
    expect(responseBody.dependencies.database.opened_connections).toEqual(1);
  });
});
