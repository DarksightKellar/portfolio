import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

describe('Home Page', () => {
    it('renders the hero heading', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
        expect(screen.getByText(/Hello, I'm Kel/i)).toBeInTheDocument();
    });

    it('renders the tagline', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
        expect(screen.getByText(/Full-Stack Developer/i)).toBeInTheDocument();
    });

    it('renders navigation buttons', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
        expect(screen.getByText('View Projects')).toBeInTheDocument();
        expect(screen.getByText('Get in Touch')).toBeInTheDocument();
    });
});
