import { $path } from 'remix-routes'
import { BreadcrumbHandle } from '~/components/routes/dashboard/DashboardBreadcrumbs'

export const handle: BreadcrumbHandle = {
    breadcrumb: {
        "title": "Quizzes",
        "path": $path("/dashboard/quizzes")
    }
}

export default function PageOne() {

    return (
        <div>
            <h1 className='text-2xl font-bold'>Quizzes</h1>
        </div>
    )
}

