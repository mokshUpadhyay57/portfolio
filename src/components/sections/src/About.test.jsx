import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './About';
import { describe, it, expect } from "vitest";


describe('About', () => {
  it('renders the About Me title', () => {
    render(
      <Router>
        <About />
      </Router>
    );
    expect(screen.getByRole('heading', { name: /About Me/i })).toBeInTheDocument();
  });
});

  