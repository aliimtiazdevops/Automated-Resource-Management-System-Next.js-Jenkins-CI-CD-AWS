export default function EmployeeCard({employee}){
  return (
    <div className='card emp'>
      <div className='meta'>
        <div className='name'>{employee.name}</div>
        <div className='role'>{employee.role} • {employee.team}</div>
      </div>
      <div className={employee.status==='Online' ? 'badge online' : 'badge off'}>{employee.status}</div>
    </div>
  )
}
