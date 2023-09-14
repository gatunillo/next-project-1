import Link from 'next/link'

import React from 'react'

export const Navbar = () => {
  return (
    <nav>
        <h4>navbar</h4>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;