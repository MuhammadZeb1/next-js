

const post = async ({params}) => {
  const param = await params

  console.log("param",param)
  return (
    <div>post</div>
  )
}

export default post