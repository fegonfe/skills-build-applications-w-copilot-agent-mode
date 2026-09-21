import ResourceTable from './ResourceTable.jsx'

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'mascot', label: 'Mascot' },
  { key: 'captain', label: 'Captain' },
  { key: 'memberCount', label: 'Members' },
  { key: 'weeklyPoints', label: 'Weekly points' },
]

export default function Teams() {
  return <ResourceTable title="Teams" description="Crews building healthy habits together." resource="teams" columns={columns} />
}