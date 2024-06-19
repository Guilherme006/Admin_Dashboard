import { Separator } from './ui/separator';
import logo from '@/assets/crazycatgang_logo.png'; 

import { Home, ShoppingBagIcon } from 'lucide-react';
import { NavLink } from './nav-link';
import { ThemeToggle } from './theme/theme-toggle';
import { AcountMenu } from './acount-menu';

export function Header() {
    return (
      <div className="border-b">
        <div className="flex h-16 items-center gap-6 px-6">

            <img className="h-10 w-10" src={logo} alt="Imagem da logo" />
  
            <Separator orientation="vertical" className="h-6" />
  
            <nav className="flex items-center space-x-4 lg:space-x-6">
                <NavLink to="/">
                    <Home className="h-4 w-4" />
                    Início
                </NavLink>

            <NavLink to="/subscriptions">
              <ShoppingBagIcon className="h-4 w-4" />
              Assinantes
            </NavLink>
          </nav>

          <div className='ml-auto flex items-center gap-2'>
            <ThemeToggle/>
            <AcountMenu/>
          </div>

        </div>
      </div>
    )
  }