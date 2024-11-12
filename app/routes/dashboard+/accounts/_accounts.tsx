import { type ActionFunctionArgs } from '@remix-run/node'
import { Form } from '@remix-run/react'
import { SetStateAction, useState } from 'react'
import { $path } from 'remix-routes'
import { Heading } from '#app/components/routes/dashboard/Common/Heading/index.js'
import { type BreadcrumbHandle } from '#app/components/routes/dashboard/DashboardBreadcrumbs'
import { Badge } from '#app/components/ui/badge.js'
import { Button } from '#app/components/ui/button.js'
import { Checkbox } from '#app/components/ui/checkbox.js'
import {
	Dialog,
	DialogPortal,
	DialogOverlay,
	DialogClose,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogFooter,
	DialogTitle,
	DialogDescription,
} from '#app/components/ui/dialog.js'
import { Icon } from '#app/components/ui/icon.js'
import { Input } from '#app/components/ui/input.js'
import { Label } from '#app/components/ui/label.tsx'
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '#app/components/ui/pagination'
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
import accounts, { ACCOUNT_STATUS } from '#app/sampleData/accounts'
import { cn } from '#app/utils/misc.js'

type AccountType = 'TypeA' | 'TypeB'
interface AccountTypeConfig {
	color: string
	label: string
}
type AccountTypeConfigMap = {
	[key in AccountType]: AccountTypeConfig
}

const accountTypeConfig: AccountTypeConfigMap = {
	TypeA: {
		color: 'bg-blue-400/5 text-blue-400 border-blue-400 hover:bg-blue-400/10',
		label: '普通员工',
	},
	TypeB: {
		color:
			'bg-green-400/5 text-green-400 border-green-400 hover:bg-green-400/10',
		label: '管理员',
	},
}
export const handle: BreadcrumbHandle = {
	breadcrumb: {
		title: 'Accounts',
		path: $path('/dashboard/accounts'),
	},
}

const accountStatuses = [
	{
		label: ACCOUNT_STATUS.pending,
		color: 'bg-blue-400/5 text-blue-400 border-blue-400 hover:bg-blue-400/10',
	},
	{
		label: ACCOUNT_STATUS.active,
		color:
			'bg-green-400/5 text-green-400 border-green-400 hover:bg-green-400/10',
	},
] as const

export const action = async ({ request }: ActionFunctionArgs) => {
	const formData = await request.formData()
	console.log(formData)
	return null
}

export default function Accounts() {
	const [selectedQuizzes, setSelectedQuizzes] = useState<boolean[]>(
		new Array(accounts.length).fill(false),
	)
	const [selectedAccount, setSelectedAccount] = useState<{ id: number; uid: string; account: string; name: string; mobile: string; email: string; accountType: string; role: string; operator: string; availability: { start: string; end: string }; status: "正常" } | { id: number; uid: string; account: string; name: string; mobile: string; email: string; accountType: string; role: string; operator: string; availability: { start: string; end: string }; status: "无效" } | null>(null)

	const handleEditClick = (account: { id: number; uid: string; account: string; name: string; mobile: string; email: string; accountType: string; role: string; operator: string; availability: { start: string; end: string }; status: "正常" } | { id: number; uid: string; account: string; name: string; mobile: string; email: string; accountType: string; role: string; operator: string; availability: { start: string; end: string }; status: "无效" }) => {
		setSelectedAccount(account)
	}
	return (
		<div>
			<div className="flex items-center justify-between">
				<Heading className="flex-grow">Accounts</Heading>
				<div className="flex items-center gap-2">
					<Button className="flex-shrink-0">删除</Button>
					<Button className="flex-shrink-0">
						<Icon name="plus" scale={2}>
							创建
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
							<Input placeholder="请输入账号或姓名" className="pl-8" />
						</div>
						<div className="relative">
							<Select>
								<SelectTrigger>
									<SelectValue placeholder="请选择角色" />
								</SelectTrigger>
								<SelectContent className="flex-0">
									<SelectItem value="1">运营人员</SelectItem>
									<SelectItem value="2">销售人员</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="relative">
							<Select>
								<SelectTrigger>
									<SelectValue placeholder="请选择状态" />
								</SelectTrigger>
								<SelectContent className="flex-0">
									<SelectItem value="1">正常</SelectItem>
									<SelectItem value="2">无效</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<Button className="flex-shrink-0">重置</Button>
						<Button className="flex-shrink-0">查询</Button>
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
							<TableHead className="w-[100px] font-bold">账号</TableHead>
							<TableHead className="font-bold">姓名</TableHead>
							<TableHead className="font-bold">电话</TableHead>
							<TableHead className="font-bold">邮箱</TableHead>
							<TableHead className="font-bold">账号类型</TableHead>
							<TableHead className="font-bold">角色</TableHead>
							<TableHead className="font-bold">操作人</TableHead>
							<TableHead className="font-bold">操作时间</TableHead>
							<TableHead className="font-bold">状态</TableHead>
							<TableHead className="text-right font-bold">操作</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{accounts.map((account, idx) => (
							<TableRow key={account.id}>
								<TableCell className="text-center">
									{/*  className="flex items-center justify-center"> */}
									<Checkbox
										name="quiz-id"
										value={account.id}
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
								<TableCell>{account.account}</TableCell>
								<TableCell className="font-medium">{account.name}</TableCell>
								<TableCell>{account.mobile}</TableCell>
								<TableCell>{account.email}</TableCell>
								<TableCell className="text-center">
									<Badge
										className={
											accountTypeConfig[account.accountType as AccountType]
												?.color || 'text-gray-500'
										}
									>
										{accountTypeConfig[account.accountType as AccountType]
											?.label || account.accountType}
									</Badge>
								</TableCell>
								<TableCell>{account.role}</TableCell>
								<TableCell>{account.operator}</TableCell>
								<TableCell>
									<div>
										{new Date(account.availability.start).toLocaleString()} -{' '}
									</div>
									<div>
										{new Date(account.availability.end).toLocaleString()}
									</div>
								</TableCell>
								<TableCell>
									{(() => {
										const state = accountStatuses.find(
											(status) => status.label === account.status,
										)
										if (!state) return null
										return (
											<Badge className={cn(state.color, 'text-nowrap')}>
												{state.label}
											</Badge>
										)
									})()}
								</TableCell>
								<TableCell className="flex justify-center text-nowrap">
									<Dialog>
										<DialogTrigger asChild>
											<Button
												variant="ghost"
												className="text-primary"
												onClick={() => handleEditClick(account)}
											>
												编辑
											</Button>
										</DialogTrigger>
										<DialogContent className="sm:max-w-[425px]">
											<DialogHeader>
												<DialogTitle>编辑账号</DialogTitle>
											</DialogHeader>
											{selectedAccount && (
												<div className="grid gap-4 py-4">
													<div className="grid grid-cols-4 items-center gap-4">
														<Label htmlFor="name" className="text-right">
															账号
														</Label>
														<Input
															id="name"
															defaultValue={selectedAccount.account}
															className="col-span-3"
														/>
													</div>
													<div className="grid grid-cols-4 items-center gap-4">
														<Label htmlFor="username" className="text-right">
															姓名
														</Label>
														<Input
															id="username"
															defaultValue={selectedAccount.name}
															className="col-span-3"
														/>
													</div>
													<div className="grid grid-cols-4 items-center gap-4">
														<Label htmlFor="mobile" className="text-right">
															电话
														</Label>
														<Input
															id="username"
															defaultValue={selectedAccount.mobile}
															className="col-span-3"
														/>
													</div>
												</div>
											)}
											<DialogFooter>
												<DialogClose asChild>
													<Button type="submit" size="sm" variant="outline">
														取消
													</Button>
												</DialogClose>
												<DialogClose asChild>
													<Button type="submit" size="sm" variant="default">
														确认
													</Button>
												</DialogClose>
											</DialogFooter>
										</DialogContent>
									</Dialog>
									<Dialog>
										<DialogTrigger asChild>
											<Button variant="ghost" className="text-primary">
												重置密码
											</Button>
										</DialogTrigger>
										<DialogContent className="sm:max-w-[425px]">
											<DialogHeader>
												<DialogTitle>重置密码</DialogTitle>
												<DialogDescription>
													确认重置账号xxx的密码？
												</DialogDescription>
											</DialogHeader>
											<DialogFooter>
												<DialogClose asChild>
													<Button type="submit" size="sm" variant="outline">
														取消
													</Button>
												</DialogClose>
												<DialogClose asChild>
													<Button type="submit" size="sm" variant="default">
														确认
													</Button>
												</DialogClose>
											</DialogFooter>
										</DialogContent>
									</Dialog>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				<Pagination className="flex justify-end">
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious href="#" />
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">1</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">2</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem>
							<PaginationNext href="#" />
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</Form>
		</div>
	)
}
