import ResourceTable from './ResourceTable.jsx'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'teamName', label: 'Team' },
  { key: 'role', label: 'Role' },
  { key: 'weeklyGoalMinutes', label: 'Weekly goal', render: (item) => `${item.weeklyGoalMinutes} min` },
]

const SUFFIX_URL = 'https://${codespaceName}-8000.app.github.dev/api/users'

export default function Users() {
  return <ResourceTable title="Users" description="Athletes and coaches in the OctoFit community." resource="users" columns={columns} />
}