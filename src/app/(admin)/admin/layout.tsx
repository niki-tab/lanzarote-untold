import { AdminSessionProvider } from "@/presentation/components/admin/layout/AdminSessionProvider";
import { AdminShell } from "@/presentation/components/admin/layout/AdminShell";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminSessionProvider>
      <AdminShell>{children}</AdminShell>
    </AdminSessionProvider>
  );
}
