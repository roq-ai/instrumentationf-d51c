import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { lessonValidationSchema } from 'validationSchema/lessons';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getLessons();
    case 'POST':
      return createLesson();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getLessons() {
    const data = await prisma.lesson
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'lesson'));
    return res.status(200).json(data);
  }

  async function createLesson() {
    await lessonValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.progress?.length > 0) {
      const create_progress = body.progress;
      body.progress = {
        create: create_progress,
      };
    } else {
      delete body.progress;
    }
    const data = await prisma.lesson.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
