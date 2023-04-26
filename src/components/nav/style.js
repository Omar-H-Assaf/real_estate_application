import styled from 'styled-components'

export const Nav = styled.nav({
    alignItems: "center",
    display: "flex",
    height: "4rem",
    width: "100%",
    zIndex: "low",
    backgroundColor: '#69d895',
    justifyContent: 'space-between'
});

export const NavText = styled.a({
    color: 'balck',
    fontSize: '1rem',
    fontWeight: '700',
    padding: '2rem',
    cursor: 'pointer'
});

export const SearchBarWrapper = styled.div({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '8px',
    width: '300px',
});


export const SearchInput = styled.input({
    border: 'none',
    flex: '1',
    fontSize: '16px',
    outline: 'none',
});