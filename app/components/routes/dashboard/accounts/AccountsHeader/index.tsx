import { useTranslation } from 'react-i18next'
import { Heading } from '#app/components/routes/dashboard/Common/Heading/index'
import { Button } from '#app/components/ui/button'
import { Dialog, DialogContent, DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '#app/components/ui/dialog'
import { Icon } from '#app/components/ui/icon'
import { Input } from '#app/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '#app/components/ui/select'

interface AccountsHeaderProps {
  onDelete: () => void
  showConfirmDialog: boolean
  setShowConfirmDialog: (show: boolean) => void
  accountNamesString: string
  confirmDelete: () => void
}


export const AccountsHeader = ({
  onDelete,
  showConfirmDialog,
  setShowConfirmDialog,
  accountNamesString,
  confirmDelete
}: AccountsHeaderProps) => {
  const { t } = useTranslation('AccountsHeader')
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading className="flex-grow">Accounts</Heading>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex-shrink-0" onClick={onDelete}>
            {t('delete')}
          </Button>
          <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{t('dialog.title')}</DialogTitle>
                <DialogDescription>
                  {t('dialog.content', { account: `[${accountNamesString.split(',').join('、')}]` })}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button size="sm" variant="outline">
                    {t('dialog.cancel')}
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button size="sm" variant="destructive" onClick={confirmDelete}>
                    {t('dialog.confirm')}
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button className="flex-shrink-0">
            <Icon name="plus" scale={2}>
              {t('create')}
            </Icon>
          </Button>
        </div>
      </div>
      <div className="mb-4 flex flex-row justify-items-start gap-2">
        <div className="flex flex-row gap-2">
          <div className="relative">
            <Icon name="search" className="absolute left-2 top-1/2 -translate-y-1/2" />
            <Input placeholder={t('search-placeholder')} className="pl-8" />
          </div>
          <div className="relative">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={t('role')} />
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
                <SelectValue placeholder={t('status')} />
              </SelectTrigger>
              <SelectContent className="flex-0">
                <SelectItem value="1">正常</SelectItem>
                <SelectItem value="2">无效</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="flex-shrink-0">{t('reset')}</Button>
          <Button className="flex-shrink-0">{t('query')}</Button>
        </div>
      </div>
    </>
  )
}

AccountsHeader.handle = {
	i18n: ['AccountsHeader'],
}