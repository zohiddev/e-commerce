import * as React from "react"
import { SVGProps } from "react"
const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#3E4095"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.5 20a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17ZM21 21l-2-2"
    />
  </svg>
)
export default SearchIcon
