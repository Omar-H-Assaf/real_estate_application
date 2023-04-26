import styled from 'styled-components'

export const SignContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
});
export const SignForm = styled.form({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
    width: '20rem',
});

export const Input = styled.input({
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
});

export const Button = styled.button({
    padding: '10px',
    backgroundColor: '#69d895',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background - color 0.3s ease',
    margin: '0.6rem',
    '&:hover': {
        backgroundColor: '#4abd77',
    }
});

export const SignText = styled.a({
    color: '#69d895',
    margin: '0.6rem',
    cursor: 'pointer',
    '&:hover': {
        color: '#4abd77',
    }
})