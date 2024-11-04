import { Form } from '@remix-run/react'
import { useState } from 'react'
import { $path } from 'remix-routes'
import { Heading } from '#app/components/routes/dashboard/Common/Heading'
import { type BreadcrumbHandle } from '#app/components/routes/dashboard/DashboardBreadcrumbs'
import { Button } from '#app/components/ui/button.js'
import { Checkbox } from '#app/components/ui/checkbox.js'
import { Icon } from '#app/components/ui/icon.js'
import {
	Select,
	SelectItem,
	SelectValue,
	SelectContent,
	SelectTrigger,
} from '#app/components/ui/select.js'
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '#app/components/ui/table.js'

export const handle: BreadcrumbHandle = {
	breadcrumb: {
		title: 'Quizzes',
		path: $path('/dashboard/quizzes'),
	},
}

const quizzes = [
	{
		id: 1,
		uid: 'c4ca4238a0b923820dcc509a6f75849b',
		title: 'Quiz 1',
		description: 'Quiz 1 description',
	},
	{
		id: 2,
		uid: 'c81e728d9d4c2f636f067f89cc14862c',
		title: 'Quiz 2',
		description: 'Quiz 2 description',
	},
]

const action = async ({ request }: ActionFunctionArgs) => {
	const formData = await request.formData()
	console.log(formData)
}

export default function PageOne() {
	// const [selectedQuizzes, setSelectedQuizzes] = useState<number[]>([])
	// const handleSelectQuiz = (id: number, checked: boolean) => {
	// 	setSelectedQuizzes((prev) =>
	// 		checked ? [...prev, id] : prev.filter((i) => i !== id),
	// 	)
	// }
	return (
		<div className="flex flex-col gap-10">
			<div className="flex items-center justify-between">
				<Heading className="flex-grow">Quizzes</Heading>
				<div className="flex items-center gap-2">
					<Select>
						<SelectTrigger>
							<SelectValue placeholder="Select a quiz" />
						</SelectTrigger>
						<SelectContent className="flex-0">
							<SelectItem value="1">/Quiz 1</SelectItem>
							<SelectItem value="2">Quiz 2</SelectItem>
						</SelectContent>
					</Select>
					<Button className="flex-shrink-0">
						<Icon name="plus" />
						&nbsp;Create Quiz
					</Button>
				</div>
			</div>
			<Form method="post">
				<Table>
					{/* <TableCaption>A list of your recent invoices.</TableCaption> */}
					<TableHeader>
						<TableRow>
							<TableHead>
								<Checkbox />
							</TableHead>
							<TableHead className="w-[100px]">UID</TableHead>
							<TableHead>Quiz Title</TableHead>
							<TableHead>Description</TableHead>
							<TableHead>Type</TableHead>
							<TableHead className="text-right">Amount</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{quizzes.map((quiz) => (
							<TableRow key={quiz.id}>
								<TableCell>
									<Checkbox
									// checked={selectedQuizzes.includes(quiz.id)}
									// onCheckedChange={(checked) =>
									// 	handleSelectQuiz(quiz.id, checked as boolean)
									// }
									/>
								</TableCell>
								<TableCell>
									{quiz.uid.substring(0, 6) + '...'}
									<Icon name="copy" />
								</TableCell>
								<TableCell className="font-medium">{quiz.title}</TableCell>
								<TableCell>{quiz.description}</TableCell>
								<TableCell>Credit Card</TableCell>
								<TableCell className="text-right">$250.00</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Form>
		</div>
	)
}
