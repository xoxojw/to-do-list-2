import { styled } from "styled-components";

const Header = () => {
  const today = new Date();
  const weekday = ['일', '월', '화', '수', '목', '금', '토']

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = weekday[today.getDay()];

  return (
    <StHeader>
        <StTitle>My To-do List</StTitle>
        <p className="header-date">{year}년 {month}월 {date}일 {day}요일</p>
      </StHeader>
  );
};

export default Header;

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid salmon;

  padding: 2vh;
`

const StTitle = styled.h1`
  font-size: 2em;
  font-weight: 700;
`