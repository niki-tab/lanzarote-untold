import { AdminPageHeader } from "@/presentation/components/admin/ui/AdminPageHeader";
import { AdminArticleList } from "@/presentation/components/admin/blog/AdminArticleList";

export default function ArticlesPage() {
  return (
    <div>
      <AdminPageHeader
        title="Blog Articles"
        actionLabel="New Article"
        actionHref="/admin/blog/articles/new"
      />
      <AdminArticleList />
    </div>
  );
}
