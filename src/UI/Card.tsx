const Card = (props:any) => {
  return (
        <div className="rounded-lg p-3 hover:bg-secondary/90">{props.children}</div>
  )
}

export default Card