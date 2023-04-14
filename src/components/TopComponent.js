import svgIcon from '../img/Group.svg';
import ovals from '../img/Ovals.svg'
import battary from '../img/Battary.svg';
import styled from 'styled-components';

const Top = styled.div`
width: 375px;
height: 156px;
position: relative;
`;
const StatusBar = styled.div`
display: flex;
justify-content: space-between;
`;
const OvalsFigma = styled.div`
display: flex;
margin: 0; 
padding: 0;
`;
const Ovals = styled.img`
margin: 0;
padding: 0;
width: 33.5px;
height: 5.5px;
margin-left: 6px;
margin-top: 9px;
`;
const Figma = styled.div`
margin: 0;
padding: 0;
width: 35p;
height: 15px;
margin-top: 4.5px;
font-size: 12px;
`;
const Time = styled.div`
margin: 0;
padding: 0;
width: 50px;
height: 15px;
font-size: 12px;
margin-top: 4.5px;
line-height: 12px;
`;
const Percent = styled.div`
margin: 0;
padding: 0;
width: 25px;
height: 15px;
font-size: 12px;
margin: 4.5px 0 0 0; 
`;
const LogoParent = styled.div`
display: flex;
justify-content: space-between;
`;
const Logo = styled.div`
margin: 36.5px 0 0 25px;
font-weight: 400;
padding: 0;
`;
const IconLogo = styled.img`
margin: 36.5px 28px 0 0;
padding: 0; 
&:hover {
  cursor: pointer;
}
`;
const Batary = styled.img`
margin: 0;
padding: 0;
width: 24.5px;
height: 10px;
margin: 6.5px 8px 0 5px;
`;

const TopComponent = (props) => {
  return (
    <Top>
      <StatusBar>
        <OvalsFigma>
          <Ovals src={ovals} alt="ovals" />
          <Figma>Figma</Figma>
        </OvalsFigma>
        <div style={{ margin: '0', padding: '0', }}>
          <Time>9:42 AM</Time>
        </div>
        <OvalsFigma>
          <Percent>42%</Percent>
          <Batary src={battary} />
        </OvalsFigma>
      </StatusBar>
      <LogoParent>
        <Logo>ЛОГОТИП</Logo>
        <IconLogo onClick={props.onClick} src={svgIcon} alt="icon" />
      </LogoParent>
    </Top>
  );
};
export {TopComponent}