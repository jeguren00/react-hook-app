import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("pruebas en el use form", () => {
  const initialForm = {
    name: "Jordi",
    email: "jordi.garcia@soprasteria.com",
  };
  test("debe retornar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      initialForm: { name: "Jordi", email: "jordi.garcia@soprasteria.com" },
      formState: {
        initialForm: { name: "Jordi", email: "jordi.garcia@soprasteria.com" },
      },
      onInputChange: expect.any(Function),
      onResetInputs: expect.any(Function),
    });
  });

  test("debe de cambiar el nombre del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: "Not Jordi" } });
    });
    expect(result.current.name).toBe("Not Jordi");
    expect(result.current.formState.name).toBe("Not Jordi");

  });

  test("debe de realizar el reset del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange,onResetInputs } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: "Not Jordi" } });
      onResetInputs();
    });
    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);

  });
});
