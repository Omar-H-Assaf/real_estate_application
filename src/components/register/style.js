import styled from 'styled-components'

export const RoleContainer = styled.div({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignContent: 'center'
})

export const RoleButton = styled.div({
    border: '1px solid #69d895',
    color: 'black',
    backgroundColor: (props) => (props.role === 'true' ? '#69d895' : 'white'),
    height: '3rem',
    width: '40%',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
    cursor: 'pointer'
})