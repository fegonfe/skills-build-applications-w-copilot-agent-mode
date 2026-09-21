import { useApiCollection } from '../api.js'

export default function ResourceTable({ title, description, resource, columns }) {
  const { data, loading, error } = useApiCollection(resource)

  return (
    <section className="resource-view" aria-labelledby={`${resource}-title`}>
      <div className="page-heading">
        <p className="eyebrow">OctoFit network</p>
        <h1 id={`${resource}-title`}>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="data-panel">
        <div className="panel-meta">
          <span>{loading ? 'Loading' : `${data.length} ${data.length === 1 ? 'record' : 'records'}`}</span>
          <span className="live-mark"><i /> Live data</span>
        </div>
        {loading && <p className="status-message" role="status">Loading {title.toLowerCase()}...</p>}
        {error && <p className="status-message error" role="alert">Unable to load data: {error}</p>}
        {!loading && !error && data.length === 0 && <p className="status-message">No {title.toLowerCase()} found.</p>}
        {!loading && !error && data.length > 0 && (
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead><tr>{columns.map((column) => <th key={column.key} scope="col">{column.label}</th>)}</tr></thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={item._id ?? item.id ?? `${resource}-${index}`}>
                    {columns.map((column) => <td key={column.key}>{column.render ? column.render(item) : item[column.key]}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}