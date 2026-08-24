async function Profile({ params }) {
  const param = await params

  console.log(param)

  return (
    <div>Profile: {param.name}</div>
  )
}

export default Profile