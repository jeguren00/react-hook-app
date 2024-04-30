import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHook } from "../../src/03-example/MultipleCustomHook";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("pruebas del MultipleCustomHook", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  test("debe de mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(<MultipleCustomHook></MultipleCustomHook>);
    //expect(screen.getByText("Cargando"));
    expect(screen.getByText("Información de Pokémon"));
    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    expect(nextButton.disabled).toBeFalsy();
  });

  test("debe de devolver un pokemon", () => {
    useFetch.mockReturnValue({
      data: { id: 1, name: "pokemon1", sprites: [] },
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHook></MultipleCustomHook>);

    expect(
      screen.getByRole("heading", { name: "Name: pokemon1" })
    ).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Id: 1" })).toBeTruthy();
  });

  test("debe llamar a la funcion de incrementar", () => {
    useFetch.mockReturnValue({
      data: { id: 1, name: "pokemon1", sprites: [] },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHook></MultipleCustomHook>);
    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    fireEvent.click(nextButton);
    expect(mockIncrement).toHaveBeenCalled();
  });
});
