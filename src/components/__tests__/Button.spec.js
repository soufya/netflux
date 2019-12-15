import React from 'react'
 import { render, waitForElement } from '@testing-library/react';
 import Button from '../Button'

  describe('Button', () => {
     it('renders element correctly', async () => {
         const { getByTestId } = render(<div data-testid="custom-element">Hello</div>)
         const element = getByTestId('custom-element')
         expect(element).toBeTruthy()
         expect(element.innerHTML).toBe('Hello')
     })

      it('renders button correctly', async () => {
 		const { getByTestId } = render( 
             <Button
                 text="Read more"
                 primary="is-primary"
                 movieId="#123" />
         )

          const button = getByTestId('btn-element')
         expect(button).toBeTruthy()
         expect(button.innerHTML).toBe('Read more')
     })
 }) 