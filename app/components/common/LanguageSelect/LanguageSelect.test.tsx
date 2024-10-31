// @vitest-environment jsdom
import { createRemixStub } from '@remix-run/testing'
import { fireEvent, render, screen } from '@testing-library/react'
import i18next from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import { expect, it, describe, beforeAll } from 'vitest'
import { GeneralErrorBoundary } from '#app/components/error-boundary.js'
import LanguageSelect from '.'

beforeAll(async () => {
	await i18next.use(initReactI18next).init({
		lng: 'en',
		fallbackLng: 'en',
		defaultNS: 'common',
		resources: { en: { common: {} } },
	})
})

const TestRig = () => {
	return (
		<>
			<I18nextProvider i18n={i18next}>
				<LanguageSelect />
			</I18nextProvider>
		</>
	)
}

const Remix = createRemixStub([
	{
		path: '/test',
		Component: TestRig,
		ErrorBoundary: GeneralErrorBoundary,
	},
])

describe('LanguageSelect', () => {
	it('renders the component', async () => {
		render(
			<Remix
				initialEntries={['/test']}
				hydrationData={{
					loaderData: {
						root: {
							locale: 'en',
						},
					},
				}}
			/>,
		)
		// there wasn't a render error
		expect(
			screen.queryByTestId(GeneralErrorBoundary.testIds.ERROR_BOUNDARY),
		).toBeNull()
		// the component rendered
		expect(
			screen.getByTestId(LanguageSelect.testIds.WRAPPER),
		).toBeInTheDocument()

		// trigger the select to open
		const trigger = screen.getByTestId(LanguageSelect.testIds.OPEN_TRIGGER)
		expect(trigger).toBeInTheDocument()
		fireEvent.click(trigger)

		// make sure the languages are present
		expect(
			screen.getByTestId(LanguageSelect.testIds.SELECT_ITEM('en')),
		).toBeInTheDocument()
		expect(
			screen.getByTestId(LanguageSelect.testIds.SELECT_ITEM('zh')),
		).toBeInTheDocument()
	})
})
