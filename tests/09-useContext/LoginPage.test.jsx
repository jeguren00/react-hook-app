import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("pruebas en Login Page", () => {
  test("debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage></LoginPage>
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });
  test("debe de llamar el setuser al hacer click en el boton", () => {
    const setUserMock = jest.fn();
    render(
      <UserContext.Provider value={{ user: null, setUser:setUserMock }}>
        <LoginPage></LoginPage>
      </UserContext.Provider>
    );
    const button = screen.getByLabelText("button");
    fireEvent.click(button);
    expect(setUserMock).toHaveBeenCalledWith({"email": "email@jordi.es", "id": 2, "name": "jordiagain"});

  });
});
