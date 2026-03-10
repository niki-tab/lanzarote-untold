interface AdminTableProps {
  headers: string[];
  children: React.ReactNode;
  emptyMessage?: string;
  isEmpty?: boolean;
}

export function AdminTable({
  headers,
  children,
  emptyMessage = "No items found",
  isEmpty,
}: AdminTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-footer-bg">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            {headers.map((header) => (
              <th
                key={header}
                className="px-5 py-3 text-left font-inter text-xs font-medium tracking-wide text-text-muted"
              >
                {header.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isEmpty ? (
            <tr>
              <td
                colSpan={headers.length}
                className="px-5 py-12 text-center font-inter text-sm text-text-muted"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            children
          )}
        </tbody>
      </table>
    </div>
  );
}
