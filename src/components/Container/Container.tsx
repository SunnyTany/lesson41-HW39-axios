import { ComponentPropsInterface } from '../../interface/ComponentPropsInterface'

const Container = ({children}: ComponentPropsInterface) => {
  return (
    <>
      {children}
    </>
  )
}

export default Container