import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/infrastructure/auth/auth";
import { PrismaBlogRepository } from "@/infrastructure/adapters/PrismaBlogRepository";

const repository = new PrismaBlogRepository();

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = request.nextUrl;
  const search = searchParams.get("search") || undefined;
  const isActive = searchParams.get("isActive");

  const categories = await repository.getCategories({
    search,
    isActive: isActive !== null ? isActive === "true" : undefined,
  });

  return NextResponse.json(categories);
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const category = await repository.createCategory(body);

  return NextResponse.json(category, { status: 201 });
}
