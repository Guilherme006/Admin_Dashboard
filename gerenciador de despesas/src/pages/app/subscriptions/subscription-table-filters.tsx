import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, X } from "lucide-react";

export function SubscriptionTableFilters() {
    return(
        <form className="flex items-center gap-2">

            <span className="text-sm font-semibold">Filtros:</span>

            <Input placeholder="ID do doador" className="h-8 w-auto"/>

            <Input placeholder="Nome do doador" className="h-8 w-[320px]"/>

            <Select defaultValue="all">

                <SelectTrigger className="h-8 w-[180px]">
                    <SelectValue/>
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="pending">Pendente</SelectItem>
                    <SelectItem value="canceled">Cancelado</SelectItem>
                    <SelectItem value="processing">Ativo</SelectItem>
                </SelectContent>

            </Select>

            <Button type="submit" variant="secondary" size="xs">
                <Search className="h-4 w-4 mr-2"/>
                Filtrar Resultados
            </Button>

            <Button variant="outline" size="xs" type="button">
                <X className="mr-2 h-4 w-4" />
                Remover filtros
            </Button>

        </form>
    )
}