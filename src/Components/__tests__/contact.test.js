
import { render,screen } from '@testing-library/react';
import Contact from '../Contact'; 
import "@testing-library/jest-dom"

test('should load contact us page', () => { 
    render(<Contact></Contact>);

    const heading = screen.getByRole("heading");
     
    expect(heading).toBeInTheDocument();
 })