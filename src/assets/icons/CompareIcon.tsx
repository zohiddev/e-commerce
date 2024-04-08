import * as React from "react"
import { SVGProps } from "react"
const CompareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#1C1917"
      d="M2.123 8.226a.943.943 0 0 1 .943-.943h7.157L8.059 5.12a.943.943 0 1 1 1.334-1.334l3.774 3.773a.943.943 0 0 1 0 1.334l-3.774 3.774a.944.944 0 1 1-1.334-1.334l2.164-2.163H3.066a.943.943 0 0 1-.943-.944Zm19.81 6.604h-7.156l2.164-2.163a.944.944 0 0 0-1.334-1.334l-3.774 3.774a.944.944 0 0 0 0 1.334l3.774 3.773a.943.943 0 0 0 1.334-1.334l-2.164-2.163h7.157a.943.943 0 1 0 0-1.887Z"
    />
  </svg>
)
export default CompareIcon
