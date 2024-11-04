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
import { cn } from '#app/utils/misc.js'
import quizzes from '../../../../sampleData/quizzes'

export const handle: BreadcrumbHandle = {
	breadcrumb: {
		title: 'Quizzes',
		path: $path('/dashboard/quizzes'),
	},
}

const quizStates = [
	{
		state: 'pending',
		color: 'bg-blue-500/10 text-blue-500 border-blue-500 hover:bg-blue-500/20',
	},
	{
		state: 'collecting responses',
		color:
			'bg-green-500/10 text-green-500 border-green-500 hover:bg-green-500/20',
	},
	{
		state: 'paused',
		color:
			'bg-yellow-500/10 text-yellow-500 border-yellow-500 hover:bg-yellow-500/20',
	},
	{
		state: 'completed',
		color: 'bg-red-500/10 text-red-500 border-red-500 hover:bg-red-500/20',
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
				<Table>
					{/* <TableCaption>A list of your recent invoices.</TableCaption> */}
					<TableHeader>
						<TableRow>
							<TableHead className="flex items-center justify-center">
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
							<TableHead className="w-[100px]">Reference&nbsp;Id</TableHead>
							<TableHead>Title</TableHead>
							<TableHead>Description</TableHead>
							<TableHead>Availability</TableHead>
							<TableHead>Question Count</TableHead>
							<TableHead>Passing Score</TableHead>
							<TableHead>State</TableHead>
							<TableHead className="text-right">Actions</TableHead>
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
										const state = quizStates.find(
											(state) => state.state === quiz.state,
										)
										if (!state) return null
										return (
											<Badge className={cn(state.color, 'text-nowrap')}>
												{state.state}
											</Badge>
										)
									})()}
								</TableCell>
								<TableCell className="flex justify-end gap-1 text-right">
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
												className="text-destructive hover:bg-destructive/20 hover:text-destructive"
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
