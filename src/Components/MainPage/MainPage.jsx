import {
  Wrapper,
  LinkStyle
} from './MainPage.styled';

const MainPage = () => {
  const Schedule = '/schedule';
  const InfoCoachClients = '/info-coach-clients';
  return (
    <Wrapper>
      <LinkStyle to={Schedule}>Schedule</LinkStyle>
      <LinkStyle to={InfoCoachClients}>Info of coach and clients</LinkStyle>
    </Wrapper>
  )
};

export default MainPage;