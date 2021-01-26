import styled from 'styled-components'

const InputName = styled.input`
    border-radius:  ${({ theme }) => theme.borderRadius};
    border-color:   ${({ theme }) => theme.colors.secondary};
    background:     ${({ theme }) => theme.colors.mainBg};
    color:          ${({ theme }) => theme.colors.contrastText};

    height: 3.3em;
    width: 20.2em;
    padding: 8px;
    margin-bottom: 2em;
    outline: none;
`;

export default InputName;
