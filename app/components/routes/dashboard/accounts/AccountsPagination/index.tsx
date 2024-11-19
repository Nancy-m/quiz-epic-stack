import { useTranslation } from 'react-i18next'
import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
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
  // 生成要显示的页码数组
  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5 // 最多显示5个页码
    
    if (totalPages <= maxVisiblePages) {
      // 如果总页数小于等于5，显示所有页码
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // 总是显示第一页
      pages.push(1)
      
      if (currentPage <= 3) {
        // 当前页靠近开始
        for (let i = 2; i <= 4; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        // 当前页靠近结束
        pages.push('...')
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        // 当前页在中间
        pages.push('...')
        pages.push(currentPage - 1)
        pages.push(currentPage)
        pages.push(currentPage + 1)
        pages.push('...')
        pages.push(totalPages)
      }
    }
    
    return pages
  }
  return (
    <div className="px-1 py-3">
      <Pagination className="flex justify-end">
        <PaginationContent>
          <span>{t('total', { count: totalItems })}</span>
          <PaginationItem>
            <PaginationPrevious 
              href="#" 
              onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
              aria-disabled={currentPage === 1}
              className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
          
          {getPageNumbers().map((page, index) => (
            page === '...' ? (
              <PaginationEllipsis key={`ellipsis-${index}`} />
            ) : (
              <PaginationItem
                key={page}
                aria-current={page === currentPage ? 'page' : undefined}
                onClick={() => typeof page === 'number' && onPageChange(page)}
              >
                <PaginationLink
                  href="#"
                  aria-current={page === currentPage ? 'page' : undefined}
              isActive={true}
            >
              {page}
            </PaginationLink>
              </PaginationItem>
            )
          ))}
          
          <PaginationItem>
            <PaginationNext 
              href="#" 
              onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
              aria-disabled={currentPage === totalPages}
              className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
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
          <div className="flex items-center gap-1 ml-2">
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
        </PaginationContent>
      </Pagination>
    </div>
  )
}

AccountsPagination.handle = {
  i18n: ['AccountsPagination'],
}