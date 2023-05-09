const Form = ({color,setColor}) => {
  return (
    <form className='color_input_form' onSubmit={(e)=>e.preventDefault()}>
        <input type="text" name="color-input" id="color-input" placeholder='Add color Name' required value={color} onChange={(e)=>{setColor(e.target.value)}}  />
      </form>
  )
}

export default Form