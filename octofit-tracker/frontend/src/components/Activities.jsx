import ResourceTable from './ResourceTable.jsx'

const columns = [
  { key: 'userName', label: 'Athlete' },
  { key: 'type', label: 'Activity' },
  { key: 'durationMinutes', label: 'Duration', render: (item) => `${item.durationMinutes} min` },
  { key: 'points', label: 'Points' },
  { key: 'completedAt', label: 'Completed', render: (item) => item.completedAt ? new Date(item.completedAt).toLocaleDateString() : 'N/A' },
]

export default function Activities() {
  return <ResourceTable title="Activities" description="Recent movement across every team." resource="activities" columns={columns} />
}