import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { tableReducer } from './reducer';
import { TableComponent } from './TableComponent';

// Create a mock Redux store for testing
const store = createStore(tableReducer);

test('renders TableComponent and checks headers', () => {
    render(
        <Provider store={store}>
            <TableComponent />
        </Provider>
    );

    // Check if the table headers are present
    expect(screen.getByText('userID')).toBeInTheDocument();
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
});
