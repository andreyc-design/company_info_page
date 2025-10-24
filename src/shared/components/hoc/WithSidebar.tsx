import { type ComponentType, type FC } from 'react';

import { AppSidebar } from '~shared/components/sidebar/AppSidebar.tsx';

/**
 * A higher-order component (HOC) that wraps a given component, adding a sidebar layout to it.
 *
 * @param {ComponentType<P>} Wrapped - The React component to be wrapped in the sidebar layout.
 * @return {ComponentType<P>} A new component that renders the given component alongside a sidebar layout.
 */
export function withSidebar<P extends object>(Wrapped: ComponentType<P>): ComponentType<P> {
  /**
   * A higher-order React functional component designed to render a layout containing a sidebar
   * and a main content area. This component provides a structured layout where the sidebar is
   * displayed alongside the main content, ensuring consistency in UI presentation.
   *
   * @template P - The props type expected by the wrapped component.
   * @param {P} props - The props passed down to the wrapped component.
   * @returns {JSX.Element} The rendered layout with a sidebar and main content.
   */
  const ComponentWithSidebar: FC<P> = (props: P) => {
    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <AppSidebar />

        <main style={{ flex: 1 }}>
          <div style={{ height: '100vh', padding: 16, overflow: 'auto' }}>
            <Wrapped {...props} />
          </div>
        </main>
      </div>
    );
  };

  ComponentWithSidebar.displayName = `withSidebar(${Wrapped.displayName || Wrapped.name || 'Component'})`;
  return ComponentWithSidebar as ComponentType<P>;
}
