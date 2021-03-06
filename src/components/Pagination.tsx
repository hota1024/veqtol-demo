import { FC } from 'react'
import { Button } from '@/components'
import Link from 'next/link'

export type LinkMaker = (page: number) => string

export type PaginationProps = {
  pageCount: number
  currentPage: number
  linkMaker: LinkMaker
  prevText?: string
  nextText?: string
}

export const Pagination: FC<PaginationProps> = (props) => {
  const hasPrev = props.currentPage > 0
  const hasNext = props.currentPage < props.pageCount - 1
  const prevLink = props.linkMaker(props.currentPage - 1)
  const nextLink = props.linkMaker(props.currentPage + 1)
  const prevText = props.prevText ?? 'Prev'
  const nextText = props.nextText ?? 'Next'

  return (
    <>
      <div className="pagination">
        <Link href={prevLink}>
          <Button
            className="pagination-button"
            href={prevLink}
            disabled={!hasPrev}
          >
            {prevText}
          </Button>
        </Link>
        <span className="pagination-status">
          {props.currentPage + 1}/{props.pageCount}
        </span>
        <Link href={nextLink}>
          <Button
            className="pagination-button"
            href={nextLink}
            disabled={!hasNext}
          >
            {nextText}
          </Button>
        </Link>
      </div>

      <style jsx global>{`
        .pagination {
          height: 192px;
          width: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .pagination-status {
          letter-spacing: 8px;
          font-family: 'Roboto Mono', monospace;
          font-weight: 500;
          margin: 0 32px;
        }
      `}</style>
    </>
  )
}
