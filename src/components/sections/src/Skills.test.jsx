import { render, screen } from '@testing-library/react';
import { describe, it, expect } from "vitest";
import Skills from './Skills';

describe('Skills Component', () => {
  it('renders the main Skills heading', () => {
    render(<Skills />);
    // Check if the main heading is present.
    // The heading contains text "Skills" and a span with "& Technologies"
    const heading = screen.getByRole('heading', { name: /Skills & Technologies/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders all skill categories', () => {
    render(<Skills />);

    const categories = [
      "Backend Development",
      "Databases",
      "Web Development",
      "Mobile Development",
      "CI/CD & Version Control",
      "Engineering Practices"
    ];

    categories.forEach(category => {
      // Check for headings corresponding to the skill cards (h4 elements)
      const categoryHeading = screen.getByRole('heading', { name: new RegExp(category, 'i') });
      expect(categoryHeading).toBeInTheDocument();
    });
  });
});
