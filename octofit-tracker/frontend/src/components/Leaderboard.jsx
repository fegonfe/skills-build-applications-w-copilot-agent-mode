import ResourceTable from './ResourceTable.jsx'

const columns = [
  { key: 'rank', label: 'Rank', render: (item) => `#${item.rank}` },
  { key: 'userName', label: 'Athlete' },
  { key: 'teamName', label: 'Team' },
  { key: 'totalPoints', label: 'Points' },
  { key: 'workoutsCompleted', label: 'Workouts' },
]

export default function Leaderboard() {
  return <ResourceTable title="Leaderboard" description="The season standings, ranked by total effort." resource="leaderboard" columns={columns} />
}