import styled from 'styled-components' 
import PropTypes from 'prop-types'

const InputName = styled.input`
    border-radius:  ${({ theme }) => theme.borderRadius};
    border-color:   ${({ theme }) => theme.colors.secondary};
    background:     ${({ theme }) => theme.colors.mainBg};
    color:          ${({ theme }) => theme.colors.contrastText};

    width: 100%;
    outline: none;
    font-size: 14px;
    margin-bottom:25px;
    padding: 15px;
`;


export default function Input({onChange, placeholder, ...props}) {
    return (
        <div>
            <InputName 
                placeholder={placeholder}
                onChange={onChange}
                {...props}
                />
        </div>
    )
}
Input.defaultProps = {
    value: '',
}
Input.propType = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
}