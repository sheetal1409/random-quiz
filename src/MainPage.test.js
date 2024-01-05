import { render, screen } from '@testing-library/react';
import MainPage from './MainPage';



describe("MainPageHeader", () => {
    test('should contain button to start quiz', () => {
        render(<MainPage />);
        const linkElement = screen.getByRole('button');
        expect(linkElement).toBeInTheDocument();
    });


    test('should contain button to start quiz text', () => {
        render(<MainPage />);
        const linkElement = screen.getByText(/start quiz/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('should contain headers', () => {
        render(<MainPage />);
        const headingElement = screen.getAllByRole("heading");
        expect(headingElement.length).toBe(2);
    })
});