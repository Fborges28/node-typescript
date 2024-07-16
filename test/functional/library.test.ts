import supertest from "supertest";

describe("Library functional tests", () => {
  it("should return a book", async () => {
    const { body, status } = await supertest(app).get("/books");
    expect(status).toBe(200);
    expect(body).toBe([
      {
        id: 1,
        registered_at: "2024-04-26T00:00:00+03:00",
        title: "Simplificando coisas que parecem complicadas",
        isbn: "",
        publisher: "Alta Books",
        year: "2010",
        edition: "1ª edição",
        authors: [
          {
            name: "Steve Krug",
            short_description:
              "Do mesmo autor do Best Seller Não me Faça Pensar!",
            books: ["Não me faça pensar!"],
          },
        ],
        description:
          "Sobre como fazer Uma Abordagem de Bom Senso à Usabilidade na Web",
        number_of_copies: 10,
      },
    ]);
  });
});
