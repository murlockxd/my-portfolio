"use client";
import { useState, useEffect } from "react";

// Hook recebe o tamanho base (50) por padrão
export function useGridSize(baseSize = 50) {
  const [gridSize, setGridSize] = useState(`${baseSize}px`);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = document.documentElement.clientWidth;
      const columns = Math.round(screenWidth / baseSize);
      const exactSize = screenWidth / columns;

      setGridSize(`${exactSize}px`);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [baseSize]);

  // Devolve apenas a string com o tamanho final calculado
  return gridSize;
}
