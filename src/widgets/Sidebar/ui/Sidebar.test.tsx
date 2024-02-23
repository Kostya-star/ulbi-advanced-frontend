import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
  test('render in the document', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test sidebr with toggle', () => {
    renderWithTranslation(<Sidebar />);
    const toggleWithSidebarBtn = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleWithSidebarBtn);
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveClass('collapsed');
  });
});
