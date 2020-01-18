import React from 'react'

export default props => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Company</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          props.customerData.length > 0 && props.customerData.map((v, k) => (
            <tr key={k}>
              <td>{k + 1}</td>
              <td>{v.name}</td>
              <td>{v.email}</td>
              <td>{v.age}</td>
              <td>{v.company}</td>
              <td>{v.phone}</td>
              <td>
                <span title="Edit" onClick={() => props.openModal(v, k)} className="ion ion-md-create"></span>
                <span title="Delete" onClick={() => props.handleDelete(v)} className="ion ion-md-trash"></span>
              </td>
            </tr>
          ))
        }
        {
          props.customerData.length === 0 && (
          <tr>
            <td colspan="7">No data to show!!</td>
          </tr>)
        }
      </tbody>
    </table>
  )
}