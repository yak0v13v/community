import { $theme, detectThemeFx, setTheme, setThemeAttributeToRootFx } from ".";
import { Theme } from "../types";
import { allSettled, fork } from "effector";

describe("Detect theme model", () => {
  test("Theme changes", async () => {
    const scope = fork();
    await allSettled(setTheme, { params: Theme.light, scope });

    expect(scope.getState($theme)).toBe(Theme.light);
  });

  test("Auto detect DARK theme", async () => {
    Object.defineProperty(window, "matchMedia", {
      value: jest.fn().mockImplementation((query) => ({
        matches: true,
        media: query,
      })),
      writable: true,
    });

    const scope = fork();
    await allSettled(detectThemeFx, { scope });

    expect(scope.getState($theme)).toBe(Theme.dark);
  });

  test("Set attrubute function is called", async () => {
    const scope = fork();
    const fn = jest.fn();
    setThemeAttributeToRootFx.use(fn);
    await allSettled(setTheme, { params: Theme.light, scope });

    expect(fn).toHaveBeenCalled();
  });
});
