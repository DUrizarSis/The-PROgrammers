import React from 'react';
import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Light-logo.png';
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'


export default function Header() {

  const path = useLocation().pathname;

  return (
    <Navbar className='border-b-2'>
      <Link  to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <img className='h-7 md:h-10' src={Logo} alt="The PROgrammers Logo" />
      </Link>

      <form>
        <TextInput 
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch/>
      </Button>

      <div className='flex gap-3 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill >
          <FaMoon />
        </Button>
        <Link to='/log-in'>
          <Button color='purple'>
              Log In
          </Button>
        </Link>
        <Navbar.Toggle>
          <Navbar.Link active={path === '/'} className={path === '/' ? 'text-purple-600' : ''} as={'div'}>
            <Link to='/'>Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/about'} as={'div'}>
            <Link to='/about' >About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/projects'} as={'div'}>
            <Link to='/projects'>Projects</Link>
          </Navbar.Link>
        </Navbar.Toggle>
      </div>
        <Navbar.Collapse>
          <Navbar.Link active={path === '/'} className={path === '/' ? 'bg-purple-600' : ''} as={'div'}>
            <Link to='/'>Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/about'} className={path === '/about' ? 'bg-purple-600' : ''} as={'div'}>
            <Link to='/about'>About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/projects'}  className={path === '/projects' ? 'bg-purple-600' : ''} as={'div'}>
            <Link to='/projects'>Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>

    </Navbar>
  )
}
