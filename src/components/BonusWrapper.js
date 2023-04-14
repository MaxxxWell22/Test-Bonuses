import fire from '../img/Fire.svg';
import iconBonus from '../img/IconBonus.svg';
import styled from "styled-components";

const BonusWrapper = styled.div`
width: 335px;
height: 105px;
background: #FFFFFF;
box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.2);
border-radius: 20px;
z-index: 10000;
display: flex;
justify-content: space-between;
position: absolute;
margin: 100px 20px 0 20px;
`;
const BonusesParent = styled.div`
margin: 18px 0 19px 20px;
`;
const Bonuses = styled.div`
margin: 0;
width: 150px;
height: 32px;
font-weight: 700;
font-size: 24px;
line-height: 32px;
color: #000000;
`;
const BonusesP = styled.p`
margin: 12px 20px 0 0;
font-size: 16px;
line-height: 24px;
color: #979797;
`;
const FireBonuse = styled.img`
margin: 0 5px 0;
width: 13px;
height: 17px;
`;
const IconArrow = styled.img`
margin: 39px 18px 31px 0;
`;

const BonusWrapperComponent = ({ bonuses, dayMonth, forBurningQuantity}) => {
  return (
    <BonusWrapper>
      <BonusesParent>
        <Bonuses>{bonuses} бонусов</Bonuses>
        <BonusesP>{dayMonth} сгорит <FireBonuse src={fire} alt="fireIcon" /> {forBurningQuantity} бонусов</BonusesP>
      </BonusesParent>
      <div style={{ margin: '0' }}>
        <IconArrow src={iconBonus} />
      </div>
    </BonusWrapper>
  );
};
export { BonusWrapperComponent }