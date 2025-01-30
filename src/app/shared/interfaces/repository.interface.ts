export interface GetRepositoriesByNameResponseItem {
  allow_forking: boolean;
  archive_url: string;
  archived: boolean;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  clone_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  created_at: string | Date;
  default_branch: string;
  deployments_url: string;
  description: string;
  disabled: boolean;
  downloads_url: string;
  events_url: string;
  fork: boolean;
  forks: number;
  forks_count: number;
  forks_url: string;
  full_name: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;
  has_discussions: boolean;
  has_downloads: boolean;
  has_issues: boolean;
  has_pages: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  homepage: string;
  hooks_url: string;
  html_url: string;
  id: number;
  is_template: boolean;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  language: string;
  languages_url: string;
  license?: {
    key: string;
    name: string;
    node_id: string;
    spdx_id: string;
    url: string;
  };
  merges_url: string;
  milestones_url: string;
  mirror_url: string;
  name: string;
  node_id: string;
  notifications_url: string;
  open_issues: number;
  open_issues_count: number;
  owner: {
    avatar_url: string;
    events_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    gravatar_id: string;
    html_url: string;
    id: number;
    login: string;
    node_id: string;
    organizations_url: string;
    received_events_url: string;
    repos_url: string;
    site_admin: boolean;
    starred_url: string;
    subscriptions_url: string;
    type: string;
    url: string;
    user_view_type: string;
  };
  private: boolean;
  pulls_url: string;
  pushed_at: string;
  releases_url: string;
  score: number;
  size: number;
  ssh_url: string;
  stargazers_count: number;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  svn_url: string;
  tags_url: string;
  teams_url: string;
  topics: string[];
  trees_url: string;
  updated_at: string | Date;
  url: string;
  visibility: string;
  watchers: number;
  watchers_count: number;
  web_commit_signoff_required: boolean;
}

export interface GetRepositoriesByNameResponse {
  incomplete_results: boolean;
  items: GetRepositoriesByNameResponseItem[];
  total_count: number;
}

export type GetRepositoryByOwnerAndRepoNameResponse = GetRepositoriesByNameResponseItem;

interface User {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
  user_view_type: string;
}

export interface GetRepositoryIssuesResponseItem {
  active_lock_reason: any;
  assignee: User;
  assignees: string[];
  author_association: string;
  body: string;
  closed_at: string | Date;
  closed_by: User;
  comments: number;
  comments_url: string;
  created_at: string | Date;
  events_url: string;
  html_url: string;
  id: number;
  labels: {
    color: string;
    default: boolean;
    description: string;
    id: number;
    name: string;
    node_id: string;
    url: string;
  }[];
  labels_url: string;
  locked: boolean;
  milestone: {
    closed_at: string | Date;
    closed_issues: number;
    created_at: string | Date;
    creator: User;
    description: string;
    due_on: string | Date;
    html_url: string;
    id: number;
    labels_url: string;
    node_id: string;
    number: number;
    open_issues: number;
    state: string;
    title: string;
    updated_at: string | Date;
    url: string;
  };
  node_id: string;
  number: number;
  performed_via_github_app: any;
  pull_request: {
    diff_url: string;
    html_url: string;
    merged_at: string | Date;
    patch_url: string;
    url: string;
  };
  reactions: {
    '+1': number;
    '-1': number;
    'confused': number;
    'eyes': number;
    'heart': number;
    'hooray': number;
    'laugh': number;
    'rocket': number;
    'total_count': number;
    'url': string;
  };
  repository_url: string;
  state: string;
  state_reason: any;
  sub_issues_summary: { total: number; completed: number; percent_completed: number };
  timeline_url: string;
  title: string;
  updated_at: string | Date;
  url: string;
  user: { login: string; id: number; node_id: string };
}

export type GetRepositoryIssuesResponse = GetRepositoryIssuesResponseItem[];

export type GetRepositoryResponse = GetRepositoriesByNameResponseItem;
