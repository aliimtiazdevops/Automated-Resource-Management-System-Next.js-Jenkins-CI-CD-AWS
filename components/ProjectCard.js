export default function ProjectCard({project}){
  return (
    <div className='card'>
      <h3>{project.name}</h3>
      <p style={{marginTop:6,color:'var(--muted)'}}>{project.desc}</p>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:12}}>
        <div style={{width:'65%'}} className='progress'><i style={{width:project.progress+'%'}}></i></div>
        <div style={{minWidth:90,textAlign:'right'}}>
          <div style={{fontSize:13,fontWeight:600,color:'var(--text)'}}>{project.progress}%</div>
          <div style={{fontSize:12,color:'var(--muted)'}}>{project.status}</div>
        </div>
      </div>
    </div>
  )
}
