import { detectThemeIfNotSet } from "../model/theme";
import { useUnit } from "effector-react";
import { useEffect } from "react";

const useDetectTheme = () => {
  const detectThemeIfNotSetFn = useUnit(detectThemeIfNotSet);

  useEffect(() => {
    detectThemeIfNotSetFn();
  }, [detectThemeIfNotSetFn]);
};

export { useDetectTheme };
