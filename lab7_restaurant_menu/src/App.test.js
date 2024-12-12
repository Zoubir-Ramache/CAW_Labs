import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders menu items', () => {
    render(<App />);
    const menuItems = screen.getAllByRole('button');
    expect(menuItems.length).toBeGreaterThan(0);
  });

  test('adds items to cart when clicked', () => {
    render(<App />);
    const firstMenuItem = screen.getAllByRole('button')[0];
    fireEvent.click(firstMenuItem);
    const cartCount = screen.getByText('1');
    expect(cartCount).toBeInTheDocument();
  });

  test('opens cart when cart button is clicked', () => {
    render(<App />);
    const cartButton = screen.getByRole('button', { name: /cart/i });
    fireEvent.click(cartButton);
    const cartHeading = screen.getByText('Shopping Cart');
    expect(cartHeading).toBeInTheDocument();
  });

  test('removes items from cart', () => {
    render(<App />);
    // Add item to cart
    const firstMenuItem = screen.getAllByRole('button')[0];
    fireEvent.click(firstMenuItem);
    
    // Open cart
    const cartButton = screen.getByRole('button', { name: /cart/i });
    fireEvent.click(cartButton);
    
    // Remove item
    const removeButton = screen.getByRole('button', { name: /remove/i });
    fireEvent.click(removeButton);
    
    const emptyCartMessage = screen.getByText('Your cart is empty');
    expect(emptyCartMessage).toBeInTheDocument();
  });

  test('shows order summary after checkout', () => {
    render(<App />);
    // Add item to cart
    const firstMenuItem = screen.getAllByRole('button')[0];
    fireEvent.click(firstMenuItem);
    
    // Open cart and checkout
    const cartButton = screen.getByRole('button', { name: /cart/i });
    fireEvent.click(cartButton);
    
    const checkoutButton = screen.getByText('Checkout');
    fireEvent.click(checkoutButton);
    
    const orderSummary = screen.getByText('Order Summary');
    expect(orderSummary).toBeInTheDocument();
  });
});
