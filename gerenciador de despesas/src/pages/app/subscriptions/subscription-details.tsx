import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function SubscriptionDetails() {
    return(

        <DialogContent>

            <DialogHeader>
                <DialogTitle>Plano: Gold</DialogTitle> 
                <DialogDescription>Detalhes do Assinante</DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
                <Table>
                    <TableBody>

                        <TableRow>

                            <TableCell className="text-muted-foreground">Status</TableCell>

                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400"/>
                                    <span className="font-medium text-muted-foreground">Ativo</span>
                                </div>
                            </TableCell>
                        </TableRow>

                        <TableRow>

                            <TableCell className="text-muted-foreground">Doador</TableCell>

                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400"/>
                                    <span className="font-medium text-muted-foreground">Guilherme Lazari</span>
                                </div>
                            </TableCell>
                        </TableRow>

                        <TableRow>

                            <TableCell className="text-muted-foreground">Telefone</TableCell>

                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400"/>
                                    <span className="font-medium text-muted-foreground">(41) 99911-0000</span>
                                </div>
                            </TableCell>
                        </TableRow>

                        <TableRow>

                            <TableCell className="text-muted-foreground">E-mail</TableCell>

                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400"/>
                                    <span className="font-medium text-muted-foreground">guilherme@hotmail.com</span>
                                </div>
                            </TableCell>
                        </TableRow>

                        <TableRow>

                            <TableCell className="text-muted-foreground">Realizado há</TableCell>

                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400"/>
                                    <span className="font-medium text-muted-foreground">há 15 minutos</span>
                                </div>
                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>

                <Table>

                    <TableHeader>
                        <TableRow>
                            <TableHead>Plano</TableHead>
                            <TableHead className="text-right">Valor/mês</TableHead>
                            <TableHead className="text-right">Tipo de Assinatura</TableHead>
                            <TableHead className="text-right">Forma de pagamento</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>Gold</TableCell>
                            <TableCell className="text-right">R$ 69,90</TableCell>
                            <TableCell className="text-right">Anual</TableCell>
                            <TableCell className="text-right">Cartão de Crédito</TableCell>
                        </TableRow>
                    </TableBody>

                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total</TableCell>
                            <TableCell className="text-right font-medium">R$ 838,80</TableCell>
                        </TableRow>
                    </TableFooter>

                </Table>

            </div>

        </DialogContent>

    )
}