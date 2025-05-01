import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from './contact'; // Adjust the path according to your file structure

describe('Contact Component', () => {
  it('renders the Contact title and paragraph', () => {
    const mockData = {
      paragraph: 'Get in touch with us.',
      phone: '123-456-7890',
      email: 'info@example.com',
      address: '123 Main Street',
    };

    render(<Contact data={mockData} />);

    // Verify title and paragraph text
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Contact');
    expect(screen.getByText(mockData.paragraph)).toBeInTheDocument();
  });

  it('renders the service checkboxes correctly', () => {
    render(<Contact data={{ paragraph: '' }} />);
    
    // Check for all service checkboxes
    expect(screen.getByLabelText('Web Development')).toBeInTheDocument();
    expect(screen.getByLabelText('Web Design')).toBeInTheDocument();
    expect(screen.getByLabelText('Logo Design')).toBeInTheDocument();
    expect(screen.getByLabelText('Others')).toBeInTheDocument();
  });

  it('renders the contact information dynamically', () => {
    const mockData = {
      phone: '123-456-7890',
      email: 'info@example.com',
      address: '123 Main Street',
    };

    render(<Contact data={mockData} />);
    
    // Verify dynamic contact information
    expect(screen.getByText(mockData.phone)).toBeInTheDocument();
    expect(screen.getByText(mockData.email)).toBeInTheDocument();
    expect(screen.getByText(mockData.address)).toBeInTheDocument();
  });

  it('displays "Loading.." when data is missing', () => {
    render(<Contact data={null} />);
    
    // Verify fallback text
    expect(screen.getByText('Loading..')).toBeInTheDocument();
  });
});