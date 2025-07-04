import { ProgressSpinner } from 'primereact/progressspinner'
import React from 'react'
import { SpinnerContainer } from './Spinner.styles'

export const Spinner = () => {
    return (
        <SpinnerContainer>
            <ProgressSpinner />
        </SpinnerContainer>
    )
}
