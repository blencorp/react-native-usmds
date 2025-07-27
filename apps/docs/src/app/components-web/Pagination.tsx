import { FC } from "react";

interface PaginationProps {
  page: number;
  total: number;
  onChange: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({ page, total, onChange }) => (
  <div className="flex gap-2">
    <button disabled={page <= 1} onClick={() => onChange(page - 1)}>Prev</button>
    <span>{page} / {total}</span>
    <button disabled={page >= total} onClick={() => onChange(page + 1)}>Next</button>
  </div>
);