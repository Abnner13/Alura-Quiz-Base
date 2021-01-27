import styled from 'styled-components'

const ItemResult = styled.div`
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    text-align: center;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 5px 0px;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export default ItemResult;
