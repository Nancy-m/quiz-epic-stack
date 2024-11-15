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

type Account = {
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

export const handle: BreadcrumbHandle & I18nHandle = {
  breadcrumb: {
    title: 'Accounts',
    path: $path('/dashboard/accounts'),
  },
  i18n: ['accounts',...AccountsHeader.handle.i18n],
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData()
  console.log(formData)
  return null
}

export default function Accounts() {
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [selectedAccountIds, setSelectedAccountIds] = useState<number[]>([])
  const [accountNamesString, setAccountNamesString] = useState('')
  const [selectAll, setSelectAll] = useState(false)

  const handleDeleteClick = () => {
    if (selectedAccountIds .length === 0) {
      console.log('请先选择要删除的账号')
    } else {
      const accountsToDelete = accounts.filter((account: Account) =>
        selectedAccountIds.includes(account.id)
      )
      const accountNames = accountsToDelete.map((account: Account) => account.name)
      const newAccountNamesString = accountNames.length > 0 ? accountNames.join(', ') : ''
      setAccountNamesString(newAccountNamesString)
      const accountToSet = accountsToDelete.length > 0 ? accountsToDelete[0] : null
      setSelectedAccount(accountToSet)
      setShowConfirmDialog(true)
      console.log(`确认将账号 [${newAccountNamesString}] 从列表中删除`)
    }
  }

  const confirmDelete = () => {
    console.log('删除账号', selectedAccountIds)
    setSelectedAccountIds([])
    setShowConfirmDialog(false)
  }

  const handleEditClick = (account: Account) => {
    setSelectedAccount(account)
  }

  const handleResetPwdClick = (account: Account) => {
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
        <AccountsPagination />
      </Form>
    </div>
  )
}