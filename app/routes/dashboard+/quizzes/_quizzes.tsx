import { type ActionFunctionArgs } from '@remix-run/node'
import { Form } from '@remix-run/react'
import { useState } from 'react'
import { $path } from 'remix-routes'
import { Heading } from '#app/components/routes/dashboard/Common/Heading'
import { type BreadcrumbHandle } from '#app/components/routes/dashboard/DashboardBreadcrumbs'
import { Badge } from '#app/components/ui/badge.js'
import { Button } from '#app/components/ui/button.js'
import { Checkbox } from '#app/components/ui/checkbox.js'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '#app/components/ui/dropdown-menu.js'
import { Icon } from '#app/components/ui/icon.js'
import { Input } from '#app/components/ui/input.js'
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
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '#app/components/ui/table.js'
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '#app/components/ui/tooltip.js'
import quizzes, { QUIZ_STATUS } from '#app/sampleData/quizzes'
import { cn } from '#app/utils/misc.js'

export const handle: BreadcrumbHandle = {
	breadcrumb: {
		title: 'Quizzes',
		path: $path('/dashboard/quizzes'),
	},
}

const quizStatuses = [
	{
		label: QUIZ_STATUS.pending,
		color: 'bg-blue-400/5 text-blue-400 border-blue-400 hover:bg-blue-400/10',
	},
	{
		label: QUIZ_STATUS.active,
		color:
			'bg-green-400/5 text-green-400 border-green-400 hover:bg-green-400/10',
	},
	{
		label: QUIZ_STATUS.paused,
		color:
			'bg-yellow-400/5 text-yellow-400 border-yellow-400 hover:bg-yellow-400/10',
	},
	{
		label: QUIZ_STATUS.completed,
		color: 'bg-red-400/5 text-red-400 border-red-400 hover:bg-red-400/10',
	},
] as const

export const action = async ({ request }: ActionFunctionArgs) => {
	const formData = await request.formData()
	console.log(formData)
	return null
}

export default function PageOne() {
	const [selectedQuizzes, setSelectedQuizzes] = useState<boolean[]>(
		new Array(quizzes.length).fill(false),
	)

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
						<Icon name="plus" scale={2}>
							Create Quiz
						</Icon>
					</Button>
				</div>
			</div>
			<Form method="post" action=".">
				<div className="mb-4 flex flex-row justify-items-start gap-2">
					<div className="flex flex-row gap-2">
						<div className="relative">
							<Icon
								name="search"
								className="absolute left-2 top-1/2 -translate-y-1/2"
							/>
							<Input placeholder="Search" className="pl-8" />
						</div>
						<div className="relative">
							<Icon
								name="calendar"
								className="absolute left-2 top-1/2 -translate-y-1/2"
							/>
							<Input placeholder="Filter by Date" className="pl-8" />
						</div>
					</div>
				</div>
				<Table>
					{/* <TableCaption>A list of your recent invoices.</TableCaption> */}
					<TableHeader>
						<TableRow className="text-nowrap">
							<TableHead className="flex items-center justify-center font-bold">
								<Checkbox
									defaultChecked={false}
									onCheckedChange={(checked) =>
										setSelectedQuizzes((selectedQuizzes) =>
											new Array(selectedQuizzes.length).fill(
												checked as boolean,
											),
										)
									}
								/>
							</TableHead>
							<TableHead className="w-[100px] font-bold">
								Reference&nbsp;Id
							</TableHead>
							<TableHead className="font-bold">Title</TableHead>
							<TableHead className="font-bold">Description</TableHead>
							<TableHead className="font-bold">Availability</TableHead>
							<TableHead className="font-bold">Question Count</TableHead>
							<TableHead className="font-bold">Passing Score</TableHead>
							<TableHead className="font-bold">Status</TableHead>
							<TableHead className="text-right font-bold">Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{quizzes.map((quiz, idx) => (
							<TableRow key={quiz.id}>
								<TableCell className="text-center">
									{/*  className="flex items-center justify-center"> */}
									<Checkbox
										name="quiz-id"
										value={quiz.id}
										checked={selectedQuizzes[idx]}
										onCheckedChange={(checked) =>
											setSelectedQuizzes((selectedQuizzes) => {
												const newSelectedQuizzes = [...selectedQuizzes]
												newSelectedQuizzes[idx] = checked as boolean
												return newSelectedQuizzes
											})
										}
									/>
								</TableCell>
								<TableCell>
									{quiz.uid.substring(0, 6) + '...'}
									<Icon name="copy" />
								</TableCell>
								<TableCell className="font-medium">{quiz.title}</TableCell>
								<TableCell>{quiz.description}</TableCell>
								<TableCell>
									<div>
										{new Date(quiz.availability.start).toLocaleString()} -{' '}
									</div>
									<div>{new Date(quiz.availability.end).toLocaleString()}</div>
								</TableCell>
								<TableCell>{quiz.questionCount}</TableCell>
								<TableCell>{quiz.passingScore}</TableCell>
								<TableCell>
									{(() => {
										const state = quizStatuses.find(
											(status) => status.label === quiz.status,
										)
										if (!state) return null
										return (
											<Badge className={cn(state.color, 'text-nowrap')}>
												&#9679;&nbsp;{state.label}
											</Badge>
										)
									})()}
								</TableCell>
								<TableCell className="text-nowrap">
									<Tooltip delayDuration={700}>
										<TooltipTrigger>
											<Button variant="ghost" size="sm">
												<Icon name="send" />
											</Button>
										</TooltipTrigger>
										<TooltipContent side="bottom">Publish</TooltipContent>
									</Tooltip>

									<Tooltip delayDuration={700}>
										<TooltipTrigger>
											<Button variant="ghost" size="sm">
												<Icon name="square-pen" />
											</Button>
										</TooltipTrigger>
										<TooltipContent side="bottom">Edit</TooltipContent>
									</Tooltip>

									<Tooltip delayDuration={700}>
										<TooltipTrigger>
											<Button
												variant="ghost"
												size="sm"
												className="text-destructive hover:bg-destructive/20 hover:text-destructive dark:text-red-400"
											>
												<Icon name="trash" />
											</Button>
										</TooltipTrigger>
										<TooltipContent side="bottom">Delete</TooltipContent>
									</Tooltip>

									<Tooltip delayDuration={700}>
										<TooltipTrigger>
											<Button variant="ghost" size="sm">
												<Icon name="share-2" />
											</Button>
										</TooltipTrigger>
										<TooltipContent side="bottom">Share</TooltipContent>
									</Tooltip>

									<DropdownMenu>
										<DropdownMenuTrigger>
											<Button variant="ghost" size="sm">
												<Icon name="ellipsis" />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent>
											<DropdownMenuLabel>More Actions</DropdownMenuLabel>
											<DropdownMenuSeparator />
											<DropdownMenuItem>
												<Icon name="chart-spline">Analyze</Icon>
											</DropdownMenuItem>
											<DropdownMenuItem>
												<Icon name="ellipsis-vertical">More Options</Icon>
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				<div className="mt-4 flex flex-row items-center justify-start gap-2">
					<div className="flex-0">
						<Select>
							<SelectTrigger>
								<SelectValue placeholder="Bulk actions" />
							</SelectTrigger>
							<SelectContent className="">
								<SelectItem value="delete">Delete</SelectItem>
								<SelectItem value="duplicate">Duplicate</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<Button className="flex-shrink-0" type="submit">
						Submit
					</Button>
				</div>
			</Form>
		</div>
	)
}
