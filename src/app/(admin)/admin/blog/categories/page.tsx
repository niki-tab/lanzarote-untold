import { AdminPageHeader } from "@/presentation/components/admin/ui/AdminPageHeader";
import { AdminCategoryList } from "@/presentation/components/admin/blog/AdminCategoryList";

export default function CategoriesPage() {
  return (
    <div>
      <AdminPageHeader
        title="Blog Categories"
        actionLabel="New Category"
        actionHref="/admin/blog/categories/new"
      />
      <AdminCategoryList />
    </div>
  );
}
