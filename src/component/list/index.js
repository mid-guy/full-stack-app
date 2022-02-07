import React from "react"
export default function List({ data, render }) {
  return (
    <div>
      { data.map((item, index) => render(item, index)) }
    </div>
  )
}