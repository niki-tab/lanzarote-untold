import { AdminCategoryForm } from "@/presentation/components/admin/blog/AdminCategoryForm";

export default function NewCategoryPage() {
  return (
    <div>
      <h1 className="mb-8 font-cormorant text-3xl font-medium text-text-primary">
        New Category
      </h1>
      <AdminCategoryForm />
    </div>
  );
}
