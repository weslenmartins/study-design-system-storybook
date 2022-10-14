import { SVGAttributes } from "react"

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={120}
      height={136}
      viewBox="0 0 120 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_75)" fill="#81D8F7">
        <path d="M119.354 68.012c0-7.907-9.902-15.4-25.083-20.046 3.504-15.473 1.947-27.783-4.914-31.724-1.581-.925-3.43-1.362-5.45-1.362v5.425c1.12 0 2.02.219 2.774.632 3.309 1.898 4.744 9.123 3.625 18.417-.268 2.287-.706 4.695-1.24 7.152-4.77-1.168-9.975-2.068-15.45-2.652-3.284-4.5-6.69-8.587-10.12-12.164 7.931-7.371 15.376-11.41 20.436-11.41v-5.425c-6.69 0-15.448 4.769-24.304 13.04-8.855-8.223-17.613-12.942-24.304-12.942v5.425c5.036 0 12.505 4.014 20.436 11.337a114.889 114.889 0 00-10.047 12.14c-5.499.583-10.705 1.483-15.473 2.676a73.403 73.403 0 01-1.265-7.056c-1.144-9.293.267-16.519 3.552-18.44.73-.438 1.678-.633 2.797-.633v-5.425c-2.043 0-3.892.438-5.498 1.362-6.836 3.941-8.369 16.227-4.841 31.651C9.853 52.661 0 60.13 0 68.012c0 7.907 9.902 15.4 25.082 20.046-3.503 15.473-1.946 27.783 4.915 31.724 1.58.925 3.43 1.363 5.473 1.363 6.69 0 15.449-4.769 24.304-13.04 8.855 8.223 17.614 12.942 24.304 12.942 2.043 0 3.892-.438 5.498-1.362 6.836-3.941 8.369-16.227 4.841-31.65 15.084-4.647 24.937-12.14 24.937-20.023zM87.678 51.785c-.9 3.139-2.019 6.374-3.284 9.61a115.105 115.105 0 00-3.187-5.839c-1.119-1.946-2.311-3.844-3.503-5.693 3.455.511 6.787 1.144 9.974 1.922zm-11.142 25.91c-1.897 3.284-3.844 6.398-5.863 9.293a126.61 126.61 0 01-10.996.487c-3.674 0-7.347-.17-10.948-.463a134.066 134.066 0 01-5.887-9.244 126.708 126.708 0 01-5.06-9.683c1.508-3.26 3.21-6.52 5.035-9.707 1.898-3.284 3.844-6.398 5.864-9.293a126.57 126.57 0 0110.996-.487c3.673 0 7.347.17 10.947.463 2.02 2.895 3.99 5.984 5.888 9.244a126.706 126.706 0 015.06 9.683 136.205 136.205 0 01-5.036 9.707zm7.858-3.163c1.314 3.26 2.433 6.52 3.357 9.683a109.185 109.185 0 01-10.023 1.946c1.192-1.873 2.384-3.795 3.504-5.766a138.117 138.117 0 003.162-5.863zM59.725 100.49c-2.262-2.335-4.525-4.938-6.763-7.785 2.19.097 4.428.17 6.69.17 2.287 0 4.55-.048 6.764-.17a94.93 94.93 0 01-6.69 7.785zm-18.1-14.33c-3.454-.51-6.787-1.142-9.974-1.921.9-3.138 2.02-6.374 3.284-9.61a115.187 115.187 0 003.187 5.84 160.983 160.983 0 003.503 5.692zm17.979-50.626c2.262 2.336 4.525 4.939 6.763 7.785a150.62 150.62 0 00-6.69-.17c-2.287 0-4.55.048-6.763.17a94.964 94.964 0 016.69-7.785zM41.6 49.864c-1.192 1.873-2.384 3.795-3.503 5.765a137.477 137.477 0 00-3.163 5.839 104.244 104.244 0 01-3.357-9.683A118.174 118.174 0 0141.6 49.863zM19.584 80.321c-8.612-3.673-14.183-8.49-14.183-12.31 0-3.82 5.571-8.66 14.183-12.31 2.092-.9 4.38-1.703 6.739-2.457 1.387 4.768 3.211 9.731 5.474 14.816-2.238 5.06-4.039 9.999-5.401 14.743a73.9 73.9 0 01-6.812-2.482zm13.089 34.765c-3.309-1.898-4.744-9.123-3.625-18.416.267-2.287.705-4.696 1.24-7.153 4.769 1.168 9.975 2.068 15.449 2.652 3.284 4.5 6.69 8.588 10.12 12.164-7.93 7.371-15.375 11.41-20.435 11.41-1.095-.024-2.02-.243-2.75-.657zm57.706-18.538c1.143 9.293-.268 16.519-3.552 18.441-.73.438-1.679.632-2.798.632-5.036 0-12.504-4.014-20.435-11.337a114.864 114.864 0 0010.047-12.14c5.498-.583 10.704-1.483 15.473-2.675.56 2.457.997 4.817 1.265 7.079zm9.366-16.227c-2.092.9-4.379 1.703-6.739 2.457-1.386-4.768-3.211-9.73-5.474-14.816 2.239-5.06 4.039-9.998 5.401-14.742a77.152 77.152 0 016.836 2.481c8.613 3.674 14.184 8.49 14.184 12.31-.025 3.82-5.596 8.661-14.208 12.31z" />
        <path d="M59.653 79.13c6.14 0 11.117-4.978 11.117-11.118 0-6.14-4.977-11.118-11.117-11.118-6.14 0-11.118 4.978-11.118 11.118 0 6.14 4.977 11.118 11.118 11.118z" />
      </g>
      <defs>
        <clipPath id="clip0_1_75">
          <path fill="#fff" d="M0 0H119.354V136H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
