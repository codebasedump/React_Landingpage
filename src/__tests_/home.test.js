import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './home'; // Adjust the path according to your file structure

describe('Home Component', () => {
  it('renders the title and paragraph dynamically', () => {
    const mockData = {
      title: 'Welcome to Our Site!',
      paragraph: 'We are glad to have you here.',
      bannerImg: [],
    };

    render(<Home data={mockData} />);
    
    // Verify dynamic title and paragraph
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(mockData.title);
    expect(screen.getByText(mockData.paragraph)).toBeInTheDocument();
  });

  it('renders images dynamically when data is provided', () => {
    const mockData = {
      title: 'Welcome to Our Site!',
      paragraph: 'We are glad to have you here.',
      bannerImg: [
        { title: 'Image 1', bannerImage1: 'image1.jpg' },
        { title: 'Image 2', bannerImage1: 'image2.jpg' },
      ],
    };

    render(<Home data={mockData} />);
    
    // Verify images are rendered
    mockData.bannerImg.forEach((imageData, index) => {
      const imgElement = screen.getByAltText('');
      expect(imgElement).toHaveAttribute('src', imageData.bannerImage1);
    });
  });

  it('displays fallback text when data is null', () => {
    render(<Home data={null} />);
    
    // Verify fallback loading text
    expect(screen.getByText('Loading')).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});