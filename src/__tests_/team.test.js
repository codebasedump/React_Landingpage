import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Team from './team'; // Adjust the path according to your file structure

describe('Team Component', () => {
  it('renders the Teams title and paragraph', () => {
    const mockData = {
      paragraph: 'Meet our amazing team!',
      thumnails: [],
    };

    render(<Team data={mockData} />);
    
    // Check for title and paragraph text
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Teams');
    expect(screen.getByText(mockData.paragraph)).toBeInTheDocument();
  });

  it('renders team member details dynamically', () => {
    const mockData = {
      paragraph: 'Meet our amazing team!',
      thumnails: [
        { img: 'member1.jpg', name: 'John Doe', job: 'Engineer', text: 'Expert in AI technologies.' },
        { img: 'member2.jpg', name: 'Jane Smith', job: 'Designer', text: 'Creates stunning visuals.' },
      ],
    };

    render(<Team data={mockData} />);
    
    // Verify each team member's details
    mockData.thumnails.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.job)).toBeInTheDocument();
      expect(screen.getByText(item.text)).toBeInTheDocument();
      const imgElement = screen.getByAltText('');
      expect(imgElement).toHaveAttribute('src', item.img);
    });
  });

  it('displays loading text when no data is provided', () => {
    render(<Team data={null} />);
    
    // Check for fallback "Loading.." and "Loading..." text
    expect(screen.getByText('Loading..')).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});