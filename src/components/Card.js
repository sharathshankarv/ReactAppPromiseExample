export function Card(props){
  let {ele, item, ukey, likedislikefunc} = props
  return (
    <div key={ukey} className="card" {...props}>
      <div className="card-body">
        <h5 className="card-title">
          <img alt={ele.user.username} src={ele.user.profile_image_url} width="32px" style={{borderRadius:"32px"}} /> {ele.user.name}</h5>
        <p>{`@${ele.user.username}`}</p>
        
        <p className="card-text">{item.text}</p>
        <button data-val={item.id} key={`${ukey}_btn`} onClick={likedislikefunc}>{item.liked ? "Dislike" : "Like" }</button>
      </div>
    </div>
  )
}