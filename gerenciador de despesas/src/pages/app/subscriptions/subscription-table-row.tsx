import { Button } from "@/components/ui/button";
import { ArrowRight, Search, X } from "lucide-react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { SubscriptionDetails } from "./subscription-details";

export function SubscriptionTableRow() {
    return (
        <TableRow>
            <TableCell>
                <Dialog>

                    <DialogTrigger asChild>
                        <Button variant="outline" size="xs">
                            <Search className="w-3 h-3"/>
                            <span className="sr-only">Detalhes do assinante</span>
                        </Button>
                    </DialogTrigger>
                    
                    <SubscriptionDetails/> 

                </Dialog>
            </TableCell>
            <TableCell className="font-mono text-xs font-medium">1</TableCell>
            <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400"/>
                    <span className="font-medium text-muted-foreground">Ativo</span>
                </div>
            </TableCell>
            <TableCell className="font-medium">Guilherme Lazari</TableCell>
            <TableCell className="font-medium">R$ 69,90</TableCell>
            <TableCell>
                Gold
            </TableCell>
            <TableCell>
                <Button variant="ghost" size="xs">
                    <X className="h-3 w-3 mr-2"/>
                    Cancelar
                </Button>
            </TableCell>
        </TableRow>
        
    )
}
