import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';
import { Link, useNavigate } from "react-router-dom";


const signUpForm = z.object({
    name: z.string(),
    phone: z.string(),
    email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignUpForm>()

    async function handleSignUp(data: SignUpForm) {

       try {
        await new Promise((resolve) => setTimeout(resolve, 2000))

        toast.success('Cadastro realizado com sucesso!', {
            action: {
                label: 'Login',
                onClick: () => navigate('/sign-in'),
            },
        })
       }catch {
        toast.error("Erro ao cadastrar!")
       }
    }

    return(
        <>
            <Helmet title="Cadastro"/>

            <div className="p-8">

                <Button variant="ghost" asChild className="absolute right-8 top-8">
                    <Link to="/sign-in">
                        Fazer Login
                    </Link>
                </Button>

                <div className="w-[350px] flex flex-col justify-center gap-6">

                    <div className="flex flex-col gap-2 text-center">

                        <h1 className="text-2xl font-semibold tracking-tight">Criar Conta</h1>

                        <p className="text-sm text-muted-foreground">Cadastrar Colaborador</p>

                    </div>

                        

                    <div>
                        <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">

                            <div className="space-y-2">

                                <Label htmlFor="name">Nome Completo</Label>

                                <Input id="name" type="text" {...register('email')}/>

                            </div>

                            <div className="space-y-2">

                                <Label htmlFor="email">E-mail</Label>

                                <Input id="email" type="email" {...register('email')}/>

                            </div>

                            <div className="space-y-2">

                                <Label htmlFor="phone">Telefone</Label>

                                <Input id="phone" type="tel" {...register('email')}/>

                            </div>

                            <Button disabled={isSubmitting} className="w-full" type="submit">Finalizar Cadastro</Button>

                            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
                                Ao continuar, você concorda com nossos <a className="underline underline-offset-4" href="">termos de uso</a> e <Link className="underline underline-offset-4" to='/privacy-policy'>política de privacidade</Link>!
                            </p>

                        </form>
                    </div>

                </div>
                
            </div>
        </>
    ) 
}