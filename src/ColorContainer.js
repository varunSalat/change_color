export const ColorContainer = ({checkContrastColor,color}) => {
  return (
    <div style={{backgroundColor:`${color}`}} className="color_container grid">
        <p style={{color: `${checkContrastColor()>0?"white":"black"}`}}>Empty Value</p>
      </div>
  )
}
