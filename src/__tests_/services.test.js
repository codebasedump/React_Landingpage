import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Services from './services'; // Adjust the path based on your file location

describe('Services Component', () => {
  it('renders the Services title', () => {
    render(<Services data={{ paragraph: "This is a test paragraph." }} />);
    // Verify the heading
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Services');
  });

  it('displays dynamic paragraph and title', () => {
    const mockData = {
      paragraph: 'This is a dynamic paragraph.',
      title: 'Dynamic Title',
      bannerImage1: 'image.png',
    };

    render(<Services data={mockData} />);
    
    // Check the paragraph and title
    expect(screen.getByText(mockData.paragraph)).toBeInTheDocument();
    expect(screen.getByText(mockData.title)).toBeInTheDocument();
  });

  it('renders fallback text when data is missing', () => {
    render(<Services data={null} />);
    // Verify fallback loading text
    expect(screen.getByText('Loading..')).toBeInTheDocument();
  });

  it('renders the banner image', () => {
    const mockData = {
      bannerImage1: 'image.png',
    };

    render(<Services data={mockData} />);
    
    // Check the image source
    const imgElement = screen.getByAltText('');
    expect(imgElement).toHaveAttribute('src', mockData.bannerImage1);
  });
});
