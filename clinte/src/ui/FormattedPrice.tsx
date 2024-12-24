

const FormattedPrice = ({amount}:{amount?:number}) => {
  const formattedAmount = new Number(amount).toLocaleString('en-US', {
    style: "currency",
    currency: "EGY",
    minimumFractionDigits: 2,
  })
  return (
    <span>{formattedAmount}</span>
  )
}

export default FormattedPrice