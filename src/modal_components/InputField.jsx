import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid #ddd; /* 얇은 선으로 구분 */
`;

const Title = styled.div`
  width: 25%;
  font-weight: bold;
  color: #333;
  margin-right: 30px;
`;

const Content = styled.div`
  width: 100%;
`;

const Writing = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 5px;
  background: transparent;
  color: #555;
`;


function InputField({title, type, name, value, onChange}) {

return (
    <>
    <Box>
        <Title>{title}</Title>
        <Content>
          <Writing
            type={type}
            name={name}
            value={value}
            onChange={onChange}
          />
        </Content>
      </Box>
      </>
)

}
export default InputField