import * as React from "react"
import { SVGProps } from "react"
const CartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <g
      stroke="#1C1917"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <path d="M6.5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17.5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17.5 17h-11V3h-2" />
      <path d="m6.5 5 14 1-1 7h-13" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5 0h24v24H.5z" />
      </clipPath>
    </defs>
  </svg>
)
export default CartIcon
