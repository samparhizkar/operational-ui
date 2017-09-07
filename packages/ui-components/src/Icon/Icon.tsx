import * as React from "react"
import { SFC } from "react"
import * as ReactFeather from "react-feather"
import Theme from "types/theme"

type SizeFactors = {
  [key: string]: number
}

const sizeFactors: SizeFactors = {
  small: 0.5,
  medium: 1,
  large: 2,
}

type IconName = string
type IconSize = keyof SizeFactors // any key from sizeFactors object

type Props = {
  name: IconName
  size?: IconSize
  sizeOverride?: number
  theme: Theme
}

const Icon: SFC<Props> = ({ name = "Play", size = "medium", sizeOverride, theme }: Props) => {
  const themeSpacing = theme ? theme.spacing : 16

  const pixelSize = sizeOverride || themeSpacing * sizeFactors[size]

  const props = {
    size: pixelSize,
  }

  const Comp = ReactFeather[name]

  return <Comp {...props} />
}
export default Icon
export { Icon }
