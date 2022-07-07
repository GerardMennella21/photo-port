import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup)

describe('ContactForm Component', () => {
    it('renders', () => {
        render(<ContactForm />)
    })
    it('Matches Snapshot', () => {
        const { asFragment } = render(<ContactForm />)
        expect(asFragment()).toMatchSnapshot()
    })
})

describe('h1 and submit', () => {
    it('matches Contact Me', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId("contacth1")).toHaveTextContent("Contact Me")
    })
    it('matches Submit', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId("contactsubmit")).toHaveTextContent("Submit")
    })
})