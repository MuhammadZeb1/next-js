import colorBox from "./page"


const colorBoxLayout = ({childern,left,right}) => {
  return (
    <div>
        {childern}
    {left}
    {right}
    </div>
  )
}

export default colorBoxLayout