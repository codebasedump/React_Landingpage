import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Testimonials from './testimonials'; // Adjust path according to your project structure

describe('Testimonials Component', () => {
  it('renders the Testimonials title and paragraph', () => {
    const mockData = {
      paragraph: 'Hear what our customers have to say!',
      thumnails: [],
    };

    render(<Testimonials data={mockData} />);
    
    // Verify title and paragraph text
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Testimonials');
    expect(screen.getByText(mockData.paragraph)).toBeInTheDocument();
  });

  it('renders dynamic testimonials', () => {
    const mockData = {
      paragraph: 'Hear what our customers have to say!',
      thumnails: [
        { img: 'customer1.jpg', name: 'John Doe', text: 'Amazing service!' },
        { img: 'customer2.jpg', name: 'Jane Smith', text: 'Highly recommend!' },
      ],
    };

    render(<Testimonials data={mockData} />);

    // Verify dynamic rendering of testimonials
    mockData.thumnails.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.text)).toBeInTheDocument();
      const imgElement = screen.getByAltText(item.name);
      expect(imgElement).toHaveAttribute('src', item.img);
    });
  });

  it('shows "Loading.." when no data is provided', () => {
    render(<Testimonials data={null} />);
    
    // Verify fallback loading text
    expect(screen.getByText('Loading..')).toBeInTheDocument();
  });
});