import { Outlet } from "react-router-dom";
import logo from '@/assets/crazycatgang_logo.png'; 

export function AuthLayout() {
    return (
        <div className="min-h-screen grid grid-cols-2 antialiased">

            <div className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between">

                <div className="flex items-center gap-3 text-lg text-foreground">
                    <img className="h-10 w-10" src={logo} alt="Imagem da logo" />
                    <span className="font-semibold">Crazy Cat Gang</span>
                </div>

                <footer className="text-sm">
                    Guilherme Felippe Lazari &copy; Crazy Cat Gang - {new Date().getFullYear()}
                </footer>

            </div>

            <div className="flex flex-col items-center  justify-center relative">
                <Outlet />
            </div>
        </div>
    );
}
