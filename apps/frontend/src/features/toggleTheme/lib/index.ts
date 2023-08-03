import { detectThemeIfNotSet } from "../model";
import { useUnit } from "effector-react";
import { useEffect } from "react";

const useDetectTheme = () => {
  const detectThemeIfNotSetFn = useUnit(detectThemeIfNotSet);

  useEffect(() => {
    detectThemeIfNotSetFn();
  }, [detectThemeIfNotSetFn]);
};

export { useDetectTheme };
