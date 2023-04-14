import React, { useState, useEffect } from "react";
import { TopComponent } from "./components/TopComponent";
import { BonusWrapperComponent } from "./components/BonusWrapper";
import axios from "axios";
import styled, { createGlobalStyle } from 'styled-components';

//Стили
const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  padding: 0;
}
`;
const Parent = styled.div`
max-width: 375px;
max-height: 1909px;
background: #FFFFFF;
display: flex;
justify-content: center; 
align-items: center;
`
const Wrapper = styled.div`
width: 100%;
height: 100%;
`;
const Bottom = styled.div`
width: 375px;
height: 148px;
background: linear-gradient(180deg, #D2333E 0%, #F54B55 100%); 
`;

const App = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [bonuses, setBonuses] = useState(null);
  const [expirationDate, setExpirationDate] = useState(null);
  const [forBurningQuantity, setForBurningQuantity] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  let API = 'http://84.201.188.117:5021/api/v3/clients/accesstoken';
  let APITWO = `http://84.201.188.117:5003/api/v3/ibonus/generalinfo/${accessToken}`;

  //Получение AccessTokena
  useEffect(() => {
    axios
      .post(API, {
        idClient: '{2c44d8c2-c89a-472e-aab3-9a8a29142315}',
        accessToken: '',
        paramName: "device",
        paramValue: '{7db72635-fd0a-46b9-813b-1627e3aa02ea}',
        latitude: 0,
        longitude: 0,
        sourceQuery: 0,
      }, {
        headers: {
          'accept': 'application/json',
          'AccessKey': '891cf53c-01fc-4d74-a14c-592668b7a03c',
          'Content-Type': 'application/json-patch+json',
        }
      })
      .then((res) => {
        setAccessToken(res.data.accessToken);
      })
      .catch(error => setError(error));
  }, []);

  //Получение Данных о бонусах(при клике)
  const handleImageClick = () => {
    axios
      .get(APITWO, {
        headers: {
          'accept': 'application/json',
          'AccessKey': '891cf53c-01fc-4d74-a14c-592668b7a03c',
        }
      })
      .then((res) => {
        setBonuses(res.data.data.currentQuantity);
        setExpirationDate(res.data.data.dateBurning);
        setForBurningQuantity(res.data.data.forBurningQuantity)
      })
      .catch(error => setError(error))
    setShowModal(!showModal);
  };

  //Ошибки
  if(error) {
    console.log(error)
  }

  //Заменяем полную дату и оставляем только число и месяц
  const dayMonth = new Date(expirationDate).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit'
  }).replace(/\//g, '.');

  return (
    <Parent>
      <Wrapper>
        <GlobalStyle />
        {showModal ? (
          <BonusWrapperComponent bonuses={bonuses} dayMonth={dayMonth} forBurningQuantity={forBurningQuantity} />
        ) : (
          <div></div>
        )}
        <TopComponent onClick={handleImageClick} />
        <Bottom />
      </Wrapper>
    </Parent>
  );
}

export default App
