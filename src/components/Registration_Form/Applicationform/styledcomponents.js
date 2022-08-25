import styled from "styled-components";

export const FieldError =styled.span`
color: #b32e2e;
font-size: 11px;
min-height: 18px;
`;
export const FormError = styled.span`
  color: #b32e2e;
  font-size: 12px;
  min-height: 20px;
  font-weight: 600;
`;

export const BoxContainer = styled.span`
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.span`
  width: 60%;
  display: flex;
  flex-direction: column;
  //box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;
export const FieldContainer = styled.span`
  width: 100%;
  padding: 5%;
  display: flex;
  flex-direction: column;
`;

export const SubmitButton = styled.div`
  padding: 11px 40%;
  width: 100%;
  color: black;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;`;


export  const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;