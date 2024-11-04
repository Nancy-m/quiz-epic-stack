import { $path } from 'remix-routes'
import { Heading } from '#app/components/routes/dashboard/Common/Heading'
import { type BreadcrumbHandle } from '#app/components/routes/dashboard/DashboardBreadcrumbs'

export const handle: BreadcrumbHandle = {
	breadcrumb: {
		title: 'Quizzes',
		path: $path('/dashboard/quizzes'),
	},
}

export default function PageOne() {
	return (
		<div>
			<Heading>Quizzes</Heading>
		</div>
	)
}
