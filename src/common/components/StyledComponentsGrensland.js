import styled from 'styled-components';

export const PrimaryButton = styled.div`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  color: #fff;
  background: #e97034;
  display: inline-block;
  user-select: none;
  cursor: pointer;
`;

export const Button = styled.div`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: #e97034;
  border: 2px solid #e97034;
  display: inline-block;
  user-select: none;
  cursor: pointer;
`;

export const Card = styled.div`  
  background: #eef1f9;
  margin: 4px;
  padding: 10px;
  margin: 15px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12);
  font-size: 0.9em;
`;

export const Box = styled.div`
  background: #ffffff;
  padding: 5px;
  margin: 3px;
  min-width: 150px;
  flex-grow: 1;
`;

export const BoxTitle = styled.div`
  text-align: center;
  font-weight: bold;
`;

export const PageTitle = styled.div`
  font-size: 1.1em;
  text-align: center;
  font-weight: bold;
  font-family: Roboto;
  padding-top: 10px;
`;

export const CardTitle = styled.div`
  font-weight: bold;
`;

export const Row = styled.div`
  display: flex;  
`;
