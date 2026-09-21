import ResourceTable from './ResourceTable.jsx'

const columns = [
  { key: 'title', label: 'Workout' },
  { key: 'focusArea', label: 'Focus' },
  { key: 'level', label: 'Level' },
  { key: 'durationMinutes', label: 'Duration', render: (item) => `${item.durationMinutes} min` },
  { key: 'suggestedFor', label: 'Suggested for' },
]

const SUFFIX_URL = 'https://${codespaceName}-8000.app.github.dev/api/workouts'

export default function Workouts() {
  return <ResourceTable title="Workouts" description="Training sessions tailored to every fitness level." resource="workouts" columns={columns} />
}