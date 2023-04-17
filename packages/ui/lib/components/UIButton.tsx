import Button, { ButtonProps } from '@mui/material/Button'

export function UIButton(props: ButtonProps) {
  const { children, ...otherProps } = props
  return <Button {...otherProps}>{children}</Button>
}

export default UIButton
