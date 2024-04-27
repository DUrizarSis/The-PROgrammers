import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo-dark.png';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-purple-500 bg-purple-800 rounded-none' >
    <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            <div className="mt-5">
                <Link  to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
                    <img className='h-5 md:h-8' src={Logo} alt="The PROgrammers Logo" />
                </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                        <Footer.Title title="About" className="text-white"/>
                        <Footer.LinkGroup col className="text-white">
                            <Footer.Link
                                href="https://www.100jsprojects.com"
                                target='_blank'
                                rel='noopener noreferrer'
                            >100 JS Projects</Footer.Link>        
                            <Footer.Link
                                href="https://www.100jsprojects.com"
                                target='_blank'
                                rel='noopener noreferrer'
                            >Other Projects</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="Follow us" className="text-white"/>
                        <Footer.LinkGroup col className="text-white">
                            <Footer.Link
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener  noreferrer"
                            >Facebook</Footer.Link>
                            <Footer.Link
                                href="https://github.com"
                                target="_blank"
                                rel="noopener  noreferrer"
                            >GitHub</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
        </div>
        <Footer.Divider/>
        <div>
            <Footer.Copyright className="text-white"
                href="#" 
                by="The PROgrammers" 
                year={new Date().getFullYear()}
            />
        </div>
    </div>
    </Footer>
  )
}
