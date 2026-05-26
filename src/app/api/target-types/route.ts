import { prisma } from "@/lib/prisma";
import { successResponse, errorResponse } from "@/lib/api-response";

export async function GET() {
    try {
        const targetTypes = await prisma.$queryRaw`SELECT code, display_name, input_type, data_source_api, description FROM target_types WHERE is_active = true ORDER BY display_name ASC`;
        return successResponse(targetTypes);
    } catch (e: any) {
        return errorResponse("Failed to fetch target types", 500, e.message);
    }
}
