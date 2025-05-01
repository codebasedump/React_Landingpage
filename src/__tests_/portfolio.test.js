import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Portfolio from './portfolio'; // Adjust the path based on your file location

describe('Portfolio Component', () => {
  it('renders the Portfolio title and description', () => {
    render(<Portfolio data={[]} />);
    
    // Check if the title exists
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Portfolio');
    
    // Verify the placeholder text
    expect(screen.getByText(/Lorem ipsum, dolor sit amet consectetur/i)).toBeInTheDocument();
  });

  it('renders portfolio items dynamically when data is provided', () => {
    const mockData = [
      { title: 'Project 1', paragraph: 'Description of Project 1', img: 'image1.png' },
      { title: 'Project 2', paragraph: 'Description of Project 2', img: 'image2.png' },
    ];
    
    render(<Portfolio data={mockData} />);
    
    // Verify each item's title, paragraph, and image
    mockData.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.paragraph)).toBeInTheDocument();
      const imgElement = screen.getByAltText(item.title);
      expect(imgElement).toHaveAttribute('src', item.img);
    });
  });

  it('shows "Loading.." when data is not available', () => {
    render(<Portfolio data={null} />);
    
    // Verify fallback loading text
    expect(screen.getByText('Loading..')).toBeInTheDocument();
  });
});