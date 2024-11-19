import { type ActionFunctionArgs } from '@remix-run/node'
import { Form } from '@remix-run/react'
import { useState } from 'react'
import { $path } from 'remix-routes'
import { AccountsHeader } from '#app/components/routes/dashboard/accounts/AccountsHeader'
import { AccountsPagination } from '#app/components/routes/dashboard/accounts/AccountsPagination'
import { AccountsTable } from '#app/components/routes/dashboard/accounts/AccountsTable'

import { type BreadcrumbHandle } from '#app/components/routes/dashboard/DashboardBreadcrumbs'
import { type I18nHandle } from '#app/modules/i18next/util'
import accounts from '#app/sampleData/accounts'

enum AccountType {
  Admin = 'Admin',
  User = 'User'
  // 其他的类型
}
type Account = {
  id: number
  uid: string
  account: string
  name: string
  mobile: string
  email: string
  accountType: AccountType
  role: string
  operator: string
  availability: { start: string; end: string }
  status: string
}
export const handle: BreadcrumbHandle & I18nHandle = {
  breadcrumb: {
    title: 'Accounts',
    path: $path('/dashboard/accounts'),
  },
  i18n: ['accounts',...AccountsHeader.handle.i18n,...AccountsTable.handle.i18n,],
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData()
  console.log(formData)
  return null
}

export default function Accounts() {
  const [, setSelectedAccount] = useState<Account | null>(null)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [selectedAccountIds, setSelectedAccountIds] = useState<number[]>([])
  const [accountNamesString, setAccountNamesString] = useState('')
  const [selectAll, setSelectAll] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    setSelectedAccountIds([])
    setSelectAll(false)
  }

  const handlePageSizeChange = (newSize: number) => {
    setPageSize(newSize)
    setCurrentPage(1)
    setSelectedAccountIds([])
    setSelectAll(false)
  }

  // 计算分页
  const totalItems = accounts.length
  const totalPages = Math.ceil(totalItems / pageSize)
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = Math.min(startIndex + pageSize, totalItems)
  const currentAccounts = accounts.slice(startIndex, endIndex)

  const handleDeleteClick = () => {
    if (selectedAccountIds .length === 0) {
      console.log('请先选择要删除的账号')
    } else {
      const accountsToDelete = accounts.filter((account) =>
        selectedAccountIds.includes(account.id)
      )
      const accountNames = accountsToDelete.map((account) => account.name)
      const newAccountNamesString = accountNames.length > 0 ? accountNames.join(', ') : ''
      setAccountNamesString(newAccountNamesString)
      const accountToSet = accountsToDelete.length > 0 ? accountsToDelete[0] as Account : null
      setSelectedAccount(accountToSet ?? null)
      setShowConfirmDialog(true)
      console.log(`确认将账号 [${newAccountNamesString}] 从列表中删除`)
    }
  }

  const confirmDelete = () => {
    console.log('删除账号', selectedAccountIds)
    setSelectedAccountIds([])
    setShowConfirmDialog(false)
  }

  const handleEditClick = (account: Account | null) => {
    setSelectedAccount(account)
  }

  const handleResetPwdClick = (account: Account | null) => {
    setSelectedAccount(account)
  }

  return (
    <div>
      <Form method="post" action=".">
        <AccountsHeader
          onDelete={handleDeleteClick}
          showConfirmDialog={showConfirmDialog}
          setShowConfirmDialog={setShowConfirmDialog}
          accountNamesString={accountNamesString}
          confirmDelete={confirmDelete}
        />
        <AccountsTable
          accounts={accounts as Account[]}
          selectedAccountIds={selectedAccountIds}
          setSelectedAccountIds={setSelectedAccountIds}
          selectAll={selectAll}
          setSelectAll={setSelectAll}
          handleEditClick={handleEditClick}
          handleResetPwdClick={handleResetPwdClick}
        />
        <AccountsPagination 
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
        />
      </Form>
    </div>
  )
}