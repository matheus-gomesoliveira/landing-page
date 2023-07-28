import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #6b7ae5;
`;

export const Content = styled.div`
  max-width: 1240px;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 30px 0 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 20px;
`;

export const Text = styled.span`
  font-size: 20px;
  font-weight: bolder;
  color: #ffffff;
  padding-bottom: 13px;
`;

export const Text17 = styled.span`
  font-size: 12px;
  padding-top: 10px;
  color: #ffffff;
`;
export const Text15 = styled.span`
  font-size: 15px;
  font-weight: bolder;
  color: #ffffff;
  cursor: pointer;
  padding-top: 20px;
  box-shadow: 0 3px #38077c;
`;

export const box1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const box2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  a {
    color: #ffffff;
    font-size: 12px;
    padding-top: 5px;
  }
  &:hover {
    a {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const images = styled.div`
  flex-direction: row;
`;

export const Name = styled.span`
  font-size: 12px;
  font-weight: bolder;
  color: #ffffff;
  align-self: center;
  padding: 10px 0;
`;