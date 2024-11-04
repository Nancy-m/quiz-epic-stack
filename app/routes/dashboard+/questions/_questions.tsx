import { $path } from 'remix-routes'
import { Heading } from '#app/components/routes/dashboard/Common/Heading/index.js'
import { type BreadcrumbHandle } from '#app/components/routes/dashboard/DashboardBreadcrumbs'

export const handle: BreadcrumbHandle = {
	breadcrumb: {
		title: 'Questions',
		path: $path('/dashboard/questions'),
	},
}

export default function Questions() {
	return (
		<div>
			<Heading>Questions</Heading>
		</div>
	)
}
