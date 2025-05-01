import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from './about'; // Adjust the path based on your file location

describe('About Component', () => {
  it('renders the "About Us" title and static paragraph', () => {
    render(<About data={[]} />);
    // Check if the title is rendered
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('About Us');
    // Check if the static paragraph text is rendered
    expect(screen.getByText(/Lorem ipsum, dolor sit amet consectetur/i)).toBeInTheDocument();
  });

  it('displays dynamic content when data is provided', () => {
    const mockData = [
      { title: 'First Item', paragraph: 'This is the first item.' },
      { title: 'Second Item', paragraph: 'This is the second item.' },
    ];

    render(<About data={mockData} />);
    
    // Verify each item's title and paragraph is displayed
    mockData.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.paragraph)).toBeInTheDocument();
    });
  });

  it('displays "Loading.." when no data is provided', () => {
    render(<About data={null} />);
    // Verify fallback loading text
    expect(screen.getByText('Loading..')).toBeInTheDocument();
  });
});

