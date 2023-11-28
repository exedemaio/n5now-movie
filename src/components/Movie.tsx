import React, { useEffect, useState } from "react";
import { api } from "../api";
import List from "./List";
import { useTranslation } from "react-i18next";

const Movie = () => {
  const [cast, setCast] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { t } = useTranslation();
  useEffect(() => {
    api.get("/671/credits?language=es-AR").then((data) => {
      setCast(data.data.cast);
      setIsLoading(false);
    });
  }, []);

  return (
    <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
      {isLoading ? <span>{t("loading")}</span> : <List list={cast} />}
    </div>
  );
};

export default Movie;
