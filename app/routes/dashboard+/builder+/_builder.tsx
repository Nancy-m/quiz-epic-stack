import { $path } from 'remix-routes'
import { FillInTheBlank } from '#app/components/builder/FillInTheBlank/index.js'
import { MatrixSingle } from '#app/components/builder/MatrixSingle/index.js'
import { MultiChoice } from '#app/components/builder/MultiChoice/index.js'
import { SelectBox } from '#app/components/builder/SelectBox/index.js'
import { SingleChoice } from '#app/components/builder/SingleChoice/index.js'
import { TextAreaQuery } from '#app/components/builder/TextArea/index.js'
import { Heading } from '#app/components/routes/dashboard/Common/Heading/index.js'
import { type BreadcrumbHandle } from '#app/components/routes/dashboard/DashboardBreadcrumbs'

export const handle: BreadcrumbHandle = {
	breadcrumb: {
		title: 'Builder',
		path: $path('/dashboard/builder'),
	},
}

export default function Builder() {
	return (
		<>
			<Heading className="mb-4">Document Builder</Heading>
			<div className="flex flex-row gap-4">
				<div className="shrink-0 basis-1/4 border border-gray-200 shadow-inner">
					{/* <Button>Hello</Button> */}
				</div>
				<div className="flex shrink-0 grow basis-3/4 flex-col gap-4 rounded-lg border border-gray-200 p-4 shadow-inner">
					<SingleChoice />
					<MultiChoice />
					<SelectBox />
					<FillInTheBlank />
					<TextAreaQuery />
					<MatrixSingle />
				</div>
			</div>
		</>
	)
}
