import styled from 'styled-components'

const PlayButton = styled.button`
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.third};
    border-radius:    ${({ theme }) => theme.borderRadius};
    color:            ${({ theme }) => theme.colors.contrastText};

    text-align: center;
    transition: 0.3s;

    width: 20.2em;
    height: 2.5em;
    font-weight: bold;
`;

export default PlayButton;
