import { prisma } from './src/lib/prisma';
async function main() {
    console.log("classroom_students for student 208:");
    console.log(await prisma.classroom_students.findMany({ where: { student_id: 208 } }));
}
main().finally(() => prisma.$disconnect());
