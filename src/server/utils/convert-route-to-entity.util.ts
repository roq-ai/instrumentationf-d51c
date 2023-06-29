const mapping: Record<string, string> = {
  lessons: 'lesson',
  organizations: 'organization',
  progresses: 'progress',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
