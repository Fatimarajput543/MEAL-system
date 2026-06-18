/**
 * User Roles - Central constants for role definitions
 * Never use hardcoded strings for roles elsewhere in the application
 */

export const ROLES = {
  SUPER_ADMIN: 'super_admin',
  ORG_ADMIN: 'org_admin',
  PROJECT_DIRECTOR: 'project_director',
  BUDGET_HOLDER: 'budget_holder',
  MEAL_OFFICER: 'meal_officer',
  DIP_COORDINATOR: 'dip_coordinator',
  HR_MANAGER: 'hr_manager',
  PARTNER_COORDINATOR: 'partner_coordinator',
  TEAM_LEAD: 'team_lead',
  VIEWER: 'viewer',
} as const;

export type RoleType = typeof ROLES[keyof typeof ROLES];

export const ROLE_DESCRIPTIONS: Record<RoleType, string> = {
  [ROLES.SUPER_ADMIN]: 'System Administrator with full access',
  [ROLES.ORG_ADMIN]: 'Organization Administrator',
  [ROLES.PROJECT_DIRECTOR]: 'Project Director',
  [ROLES.BUDGET_HOLDER]: 'Budget Holder',
  [ROLES.MEAL_OFFICER]: 'MEAL Officer / M&E Specialist',
  [ROLES.DIP_COORDINATOR]: 'DIP Coordinator',
  [ROLES.HR_MANAGER]: 'HR Manager',
  [ROLES.PARTNER_COORDINATOR]: 'Partner Coordinator',
  [ROLES.TEAM_LEAD]: 'Team Lead / Supervisor',
  [ROLES.VIEWER]: 'Viewer / Contributor',
};

/**
 * Role hierarchies for permission inheritance
 * Higher roles inherit permissions of lower roles
 */
export const ROLE_HIERARCHY: Record<RoleType, RoleType[]> = {
  [ROLES.SUPER_ADMIN]: [
    ROLES.ORG_ADMIN,
    ROLES.PROJECT_DIRECTOR,
    ROLES.BUDGET_HOLDER,
    ROLES.MEAL_OFFICER,
    ROLES.DIP_COORDINATOR,
    ROLES.HR_MANAGER,
    ROLES.PARTNER_COORDINATOR,
    ROLES.TEAM_LEAD,
    ROLES.VIEWER,
  ],
  [ROLES.ORG_ADMIN]: [
    ROLES.PROJECT_DIRECTOR,
    ROLES.TEAM_LEAD,
    ROLES.VIEWER,
  ],
  [ROLES.PROJECT_DIRECTOR]: [ROLES.TEAM_LEAD, ROLES.VIEWER],
  [ROLES.BUDGET_HOLDER]: [ROLES.VIEWER],
  [ROLES.MEAL_OFFICER]: [ROLES.VIEWER],
  [ROLES.DIP_COORDINATOR]: [ROLES.VIEWER],
  [ROLES.HR_MANAGER]: [ROLES.VIEWER],
  [ROLES.PARTNER_COORDINATOR]: [ROLES.VIEWER],
  [ROLES.TEAM_LEAD]: [ROLES.VIEWER],
  [ROLES.VIEWER]: [],
};
