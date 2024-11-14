import { $path } from 'remix-routes'
import { Heading } from '#app/components/routes/dashboard/Common/Heading/index.js'
import { type BreadcrumbHandle } from '#app/components/routes/dashboard/DashboardBreadcrumbs'
import { type I18nHandle } from '#app/modules/i18next/util'

export const handle: BreadcrumbHandle & I18nHandle = {
	breadcrumb: {
		title: 'Accounts',
		path: $path('/dashboard/accounts'),
	},
	i18n: ['accounts'],
}
export default function Accounts() {
	return (
		<div>
			<Heading>Accounts</Heading>
		</div>
	)
}
