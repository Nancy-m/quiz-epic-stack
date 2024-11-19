import { useTranslation } from 'react-i18next'
import { Button } from '#app/components/ui/button.tsx'
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '#app/components/ui/pagination'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '#app/components/ui/select'

interface AccountsPaginationProps {
  currentPage: number
  totalPages: number
  totalItems: number
  pageSize: number
  onPageChange: (page: number) => void
  onPageSizeChange: (size: number) => void
}

export function AccountsPagination({ 
  currentPage, 
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
  onPageSizeChange 
}: AccountsPaginationProps) {
  const { t } = useTranslation('AccountsPagination')
  
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3">
      <div className="flex items-center text-sm text-muted-foreground">
        <span>{t('total', { count: totalItems })}</span>
        <div className="ml-2">
          <Select
            value={pageSize.toString()}
            onValueChange={(value) => onPageSizeChange(Number(value))}
          >
            <SelectTrigger className="h-8 w-[110px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[10, 20, 30, 50, 100].map(size => (
                <SelectItem key={size} value={size.toString()}>
                  {t('itemsPerPage', { count: size })}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center gap-1 text-sm">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {t('previous')}
        </Button>

        <div className="flex items-center gap-1">
          <span>{t('jumpTo')}</span>
          <input
            type="number"
            min={1}
            max={totalPages}
            value={currentPage}
            onChange={(e) => {
              const page = Number(e.target.value)
              if (page >= 1 && page <= totalPages) {
                onPageChange(page)
              }
            }}
            className="h-8 w-[50px] rounded-md border border-gray-200 px-2 text-center"
          />
          <span>{t('page')}</span>
        </div>

        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {t('next')}
        </Button>
      </div>
      
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              href="#" 
              onClick={() => onPageChange(currentPage - 1)}
              aria-disabled={currentPage === 1}
              className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
          
          <PaginationItem>
            <PaginationLink 
              href="#"
              isActive={true}
            >
              {currentPage}
            </PaginationLink>
          </PaginationItem>
          
          <PaginationItem>
            <PaginationNext 
              href="#" 
              onClick={() => onPageChange(currentPage + 1)}
              aria-disabled={currentPage === totalPages}
              className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

AccountsPagination.handle = {
  i18n: ['AccountsPagination'],
}