import axios, { AxiosResponse } from "axios";

describe("API Test", (): void => {
  it("should return 200 OK", async (): Promise<void> => {
    const response: AxiosResponse<any, any> = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    expect(response.status).toBe(200);
    expect(response.data.title).toBe(
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    );
  });
});
