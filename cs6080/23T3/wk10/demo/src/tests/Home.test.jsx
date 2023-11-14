import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import { posts } from "./posts";

const mockFetch = async (url, config) => {
  // https://kentcdodds.com/blog/stop-mocking-fetch
  switch (url) {
    case "https://jsonplaceholder.typicode.com/posts": {
      return {
        ok: true,
        status: 200,
        json: async () => posts,
      };
    }
    default: {
      throw new Error(`Unhandled request: ${url}`);
    }
  }
};

let postCards;
let postCard;

const setup = async () => {
  window.fetch.mockImplementation(mockFetch);
  render(<Home />);
  postCards = await screen.findAllByTestId("post-card"); // note: find is used instead of get here to keep the logic asynchronous
  postCard = await screen.findByText("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
}

beforeAll(() => jest.spyOn(window, "fetch"));
beforeEach(async () => setup());

describe("home page", () => {
  // NOTE: in practice, don't test the actual home page
  it("loading home page fetches all post cards", async () => {
    expect(postCards.length).toStrictEqual(posts.length);
  });

  // generally we shouldn't really care about this since postCard is a child component, which shouldn't be tested in the first place
  it("post card contains the right elements", async () => {
    expect(postCard).toBeInTheDocument();
  })
});
