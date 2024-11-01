// @vitest-environment jsdom
import { act, render, screen } from '@testing-library/react'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import { test, expect } from 'vitest'
import { SidebarProvider, SidebarTrigger } from '#app/components/ui/sidebar'
import { DashboardSidebar } from '.'

function DashboaardSidebarRig() {
	return (
		<I18nextProvider i18n={i18next}>
			<SidebarProvider
				defaultOpen={true}
				data-testid="dashboard-sidebar-provider"
			>
				<DashboardSidebar />
				<SidebarTrigger data-testid="dashboard-sidebar-trigger" />
			</SidebarProvider>
		</I18nextProvider>
	)
}
test('test', async () => {
	render(<DashboaardSidebarRig />)
	// await userEvent.click(screen.getByText('application'));
	expect(screen.getByTestId('dashboard-sidebar-provider')).toBeInTheDocument()
	expect(screen.getByTestId('dashboard-sidebar-trigger')).toBeInTheDocument()
	act(() => {
		screen.getByTestId('dashboard-sidebar-trigger').click()
		expect(screen.getByTestId('dashboard-sidebar')).toBeInTheDocument()
	})
})
