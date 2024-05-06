import { useEffect } from "react";

export const useBgLightBlue = () => {
  // ページが読み込まれた時のイベント
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
