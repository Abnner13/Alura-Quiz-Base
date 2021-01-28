import styled from 'styled-components'

const AlternativesForm = styled.form`
    label {
        &[data-selected="true"] {
            background-color: ${({theme}) => {theme.colors.primary}};

            &[data-selected="SUCCESS"] {
                background-color: ${({theme}) => theme.colors.success};
            }

            &[data-selected="ERROR"] {
                background-color: ${({theme}) => theme.colors.wrong};
            }
        }
        &:focus {
            opacity: 1;
        }
    }

    button {
        margin-top: 24px;
    }
`;

export default AlternativesForm;