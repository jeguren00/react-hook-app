import { fireEvent, render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe("pruebas en el main app", () => {
  test("debe mostrar el homepage", () => {
    render(
      <MemoryRouter>
        <MainApp></MainApp>
      </MemoryRouter>
    );
    expect(screen.getByText('HomePage')).toBeTruthy();
  });
  test("debe mostrar el LoginPage", () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp></MainApp>
      </MemoryRouter>
    );
    expect(screen.getByText('LoginPage')).toBeTruthy();
  });
});
