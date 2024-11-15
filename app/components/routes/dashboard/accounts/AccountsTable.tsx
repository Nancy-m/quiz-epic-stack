import { Badge } from '#app/components/ui/badge'
import { Button } from '#app/components/ui/button'
import { Checkbox } from '#app/components/ui/checkbox'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '#app/components/ui/dialog'
import { Input } from '#app/components/ui/input'
import { Label } from '#app/components/ui/label'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '#app/components/ui/table'
import { cn } from '#app/utils/misc.js'

interface Account {
  id: number
  uid: string
  account: string
  name: string
  mobile: string
  email: string
  accountType: 'TypeA' | 'TypeB'
  role: string
  operator: string
  availability: { start: string; end: string }
  status: string
}

interface AccountsTableProps {
  accounts: Account[]
  selectedAccountIds: number[]
  setSelectedAccountIds: (ids: number[]) => void
  selectAll: boolean
  setSelectAll: (select: boolean) => void
  handleEditClick: (account: Account) => void
  handleResetPwdClick: (account: Account) => void
}

const accountTypeConfig = {
  TypeA: {
    color: 'bg-blue-400/5 text-blue-400 border-blue-400 hover:bg-blue-400/10',
    label: '普通员工',
  },
  TypeB: {
    color: 'bg-green-400/5 text-green-400 border-green-400 hover:bg-green-400/10',
    label: '管理员',
  },
}

const accountStatuses = [
  {
    label: 'pending',
    color: 'bg-blue-400/5 text-blue-400 border-blue-400 hover:bg-blue-400/10',
  },
  {
    label: 'active',
    color: 'bg-green-400/5 text-green-400 border-green-400 hover:bg-green-400/10',
  },
]

export function AccountsTable({
  accounts,
  selectedAccountIds,
  setSelectedAccountIds,
  selectAll,
  setSelectAll,
  handleEditClick,
  handleResetPwdClick
}: AccountsTableProps) {
  const handleSelectAllChange = (checked: boolean) => {
    setSelectAll(checked)
    setSelectedAccountIds(checked ? accounts.map((account) => account.id) : [])
  }

  return (
    <Table>
      <TableHeader>
        <TableRow className="text-nowrap">
          <TableHead className="flex items-center justify-center font-bold">
            <Checkbox checked={selectAll} onCheckedChange={handleSelectAllChange} />
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
        {accounts.map((account) => (
          <TableRow key={account.id}>
            <TableCell className="text-center">
              <Checkbox
                name="quiz-id"
                value={account.id}
                checked={selectedAccountIds.includes(account.id)}
                onCheckedChange={(checked) =>
                  setSelectedAccountIds((prevIds) => {
                    if (checked) {
                      return [...prevIds, account.id]
                    } else {
                      return prevIds.filter((id) => id !== account.id)
                    }
                  })
                }
              />
            </TableCell>
            <TableCell>{account.account}</TableCell>
            <TableCell className="font-medium">{account.name}</TableCell>
            <TableCell>{account.mobile}</TableCell>
            <TableCell>{account.email}</TableCell>
            <TableCell className="text-center">
              <Badge className={accountTypeConfig[account.accountType]?.color || 'text-gray-500'}>
                {accountTypeConfig[account.accountType]?.label || account.accountType}
              </Badge>
            </TableCell>
            <TableCell>{account.role}</TableCell>
            <TableCell>{account.operator}</TableCell>
            <TableCell>
              <div>{new Date(account.availability.start).toLocaleString()} - </div>
              <div>{new Date(account.availability.end).toLocaleString()}</div>
            </TableCell>
            <TableCell>
              {(() => {
                const state = accountStatuses.find((status) => status.label === account.status)
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
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">账号</Label>
                      <Input id="name" defaultValue={account.account} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">姓名</Label>
                      <Input id="username" defaultValue={account.name} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="mobile" className="text-right">电话</Label>
                      <Input id="mobile" defaultValue={account.mobile} className="col-span-3" />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="submit" size="sm" variant="outline">取消</Button>
                    </DialogClose>
                    <DialogClose asChild>
                      <Button type="submit" size="sm" variant="default">确认</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-primary"
                    onClick={() => handleResetPwdClick(account)}
                  >
                    重置密码
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>重置密码</DialogTitle>
                    <DialogDescription>
                      确认重置账号{account.account}的密码？
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="submit" size="sm" variant="outline">取消</Button>
                    </DialogClose>
                    <DialogClose asChild>
                      <Button type="submit" size="sm" variant="default">确认</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}