

import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { Helmet } from "react-helmet-async";
import { SubscriptionTableRow } from "./subscription-table-row";
import { SubscriptionTableFilters } from "./subscription-table-filters";
import { Pagination } from "@/components/pagination";

export function Subscriptions() {
    return(
        <>
            <Helmet title="Planos"/>
            <div className="flex flex-col gap-4">

                <h1 className="text-3xl font-bold tracking-tight">Assinantes</h1>

                <div className="space-y-2.5">

                    <SubscriptionTableFilters/>

                    <div className="border rounded-md">
                        <Table>

                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[64px]"></TableHead>
                                    <TableHead className="w-[140px]">Identificador</TableHead>
                                    <TableHead className="w-[180px]">Realizado há</TableHead>
                                    <TableHead className="w-[140px]">Status</TableHead>
                                    <TableHead>Assinante</TableHead>
                                    <TableHead className="w-[140px]">Total doado</TableHead>
                                    <TableHead className="w-[164px]">Assinatura</TableHead>
                                    <TableHead className="w-[132px]">Cancelar Assinatura</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>

                                {Array.from({ length: 10 }).map((_, i) => {
                                    return <SubscriptionTableRow key={i}/>
                                })}
                                    
                            </TableBody>

                        </Table>
                    </div>

                    <Pagination pageIndex={0} totalCount={105} perPage={10}/>

                </div>
            </div>
        </>
    )
}