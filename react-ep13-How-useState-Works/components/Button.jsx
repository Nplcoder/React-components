const Button = ({ imageUrl, buttonName, clickHandler }) => {
  console.log("Button props:", imageUrl, buttonName);

  return (
    <button onClick={clickHandler} title={buttonName}>
      <img src={imageUrl} alt={buttonName} />
    </button>
  )
}

export default Button