const mapping: Record<string, string> = {
  'access-requests': 'access_request',
  organizations: 'organization',
  'organization-users': 'organization_user',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
