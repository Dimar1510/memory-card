import React, { useEffect } from "react";
import { IMyCard } from "../../app/types";
import useFetch from "../../hooks/useFetch";

interface IScreenProps {
  handleChangeScreen: (screen: string) => void;
  handleChangeCardList: (cardList: Set<IMyCard>) => void;
  size: number;
}

const Loading: React.FC<IScreenProps> = ({
  handleChangeCardList,
  handleChangeScreen,
  size,
}) => {
  const { data, error, loading } = useFetch(size);

  useEffect(() => {
    if (!loading) {
      handleChangeCardList(data);
      handleChangeScreen("game");
    }
  }, [loading]);

  return (
    <div className="loading-screen screen">
      {loading && <h1 className="loading">Loading...</h1>}
      {error && <h1 className="loading">Error: {error}</h1>}
    </div>
  );
};

export default Loading;
