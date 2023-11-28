import React from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./styles";

const List = ({ list }: any) => {
  const { t } = useTranslation();
  return (
    <Styled.ListContainer
      data-testid="list"
      style={{
        display: "grid",
        gridTemplateColumns: "100px auto auto",
        gap: "8px",
      }}
    >
      <Styled.ListHeader>{t("photo")}</Styled.ListHeader>
      <Styled.ListHeader>{t("name")}</Styled.ListHeader>
      <Styled.ListHeader>{t("character")}</Styled.ListHeader>
      {list
        ? list.map((item: any) => (
            <>
              <Styled.ListImage
                alt={item.name}
                src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
                style={{ width: "100px", height: "auto" }}
              />
              <Styled.ListItem>{item.name}</Styled.ListItem>
              <Styled.ListItem>{item.character}</Styled.ListItem>
            </>
          ))
        : null}
    </Styled.ListContainer>
  );
};

export default List;
