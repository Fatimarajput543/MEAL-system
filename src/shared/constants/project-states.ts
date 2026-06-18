/**
 * Project Lifecycle States
 * Central constants for project state machine
 */

export const PROJECT_STATES = {
  DESIGN: 'design',
  SETUP: 'setup',
  IMPLEMENTATION: 'implementation',
  END_OF_PROJECT: 'end_of_project',
  CLOSURE: 'closure',
} as const;

export type ProjectStateType = typeof PROJECT_STATES[keyof typeof PROJECT_STATES];

export const PROJECT_STATE_DESCRIPTIONS: Record<ProjectStateType, string> = {
  [PROJECT_STATES.DESIGN]: 'Project in design phase',
  [PROJECT_STATES.SETUP]: 'Project setup in progress',
  [PROJECT_STATES.IMPLEMENTATION]: 'Project implementation ongoing',
  [PROJECT_STATES.END_OF_PROJECT]: 'Project ending',
  [PROJECT_STATES.CLOSURE]: 'Project closed and archived',
};

/**
 * Valid state transitions
 * Maps from current state to allowed next states
 */
export const VALID_STATE_TRANSITIONS: Record<ProjectStateType, ProjectStateType[]> = {
  [PROJECT_STATES.DESIGN]: [
    PROJECT_STATES.SETUP,
    PROJECT_STATES.DESIGN,
  ],
  [PROJECT_STATES.SETUP]: [
    PROJECT_STATES.IMPLEMENTATION,
    PROJECT_STATES.DESIGN,
  ],
  [PROJECT_STATES.IMPLEMENTATION]: [
    PROJECT_STATES.END_OF_PROJECT,
    PROJECT_STATES.SETUP,
  ],
  [PROJECT_STATES.END_OF_PROJECT]: [
    PROJECT_STATES.CLOSURE,
    PROJECT_STATES.IMPLEMENTATION,
  ],
  [PROJECT_STATES.CLOSURE]: [],
};

/**
 * State transition preconditions
 */
export const STATE_PRECONDITIONS: Record<string, string[]> = {
  'design_to_setup': ['budget_approved', 'strategic_goals_defined'],
  'setup_to_implementation': ['team_assigned', 'logframe_finalized'],
  'implementation_to_end_of_project': ['final_reports_submitted'],
  'end_of_project_to_closure': ['all_approvals_given'],
};
