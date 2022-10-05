import { styled } from '@stitches/react'
import { redA } from '@radix-ui/colors'

export const HeaderContainer = styled('header', {
    height: '120px',
    display: 'flex',
    backgroundColor: redA.redA8,
    alignItems: 'center',
    justifyContent: 'space-evenly'
})

export const InputSearch = styled('input', {
    width: '500px',
    height: '40px',
    margin: '10px',
    outline: 'none',
    padding: '5px',
    fontSize: '1.1em'
})

export const Button = styled('button', {
    width: '150px',
    height: '40px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '1.1em'
})