import { DirectorService } from '@/features/director/director.service';
import { successResponse, errorResponse } from '@/lib/api-response';

export async function GET() {
  try {
    const data = await DirectorService.getLearningSubjectGroups();
    return successResponse(data);
  } catch (error) {
    console.error('Lookup learning-subject-groups error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return errorResponse('Failed to fetch learning subject groups', 500, message);
  }
}
