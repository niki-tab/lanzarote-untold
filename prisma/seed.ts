import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("admin123", 12);

  await prisma.user.upsert({
    where: { email: "admin@lanzaroteuntold.com" },
    update: {},
    create: {
      email: "admin@lanzaroteuntold.com",
      password: hashedPassword,
      name: "Admin",
      role: "admin",
    },
  });

  const categories = [
    {
      nameEn: "Hidden Gems",
      nameEs: "Joyas Ocultas",
      slugEn: "hidden-gems",
      slugEs: "joyas-ocultas",
      descriptionEn: "Discover Lanzarote's best-kept secrets",
      descriptionEs: "Descubre los secretos mejor guardados de Lanzarote",
      color: "#C9A962",
      sortOrder: 1,
    },
    {
      nameEn: "Wine & Gastronomy",
      nameEs: "Vino y Gastronomía",
      slugEn: "wine-gastronomy",
      slugEs: "vino-gastronomia",
      descriptionEn: "Culinary experiences and wine culture",
      descriptionEs: "Experiencias culinarias y cultura del vino",
      color: "#8B4513",
      sortOrder: 2,
    },
    {
      nameEn: "Sea & Adventure",
      nameEs: "Mar y Aventura",
      slugEn: "sea-adventure",
      slugEs: "mar-aventura",
      descriptionEn: "Ocean experiences and water activities",
      descriptionEs: "Experiencias oceánicas y actividades acuáticas",
      color: "#2E86AB",
      sortOrder: 3,
    },
    {
      nameEn: "Culture & History",
      nameEs: "Cultura e Historia",
      slugEn: "culture-history",
      slugEs: "cultura-historia",
      descriptionEn: "The rich heritage of Lanzarote",
      descriptionEs: "El rico patrimonio de Lanzarote",
      color: "#A23B72",
      sortOrder: 4,
    },
  ];

  for (const cat of categories) {
    await prisma.blogCategory.upsert({
      where: { slugEn: cat.slugEn },
      update: {},
      create: cat,
    });
  }

  console.log("Seed completed: admin user + 4 blog categories");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
