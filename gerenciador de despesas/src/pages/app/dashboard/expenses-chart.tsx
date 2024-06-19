import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Line } from 'recharts';
import colors from 'tailwindcss/colors';


const expensesData = [
    { date: '10/05', revenue: 250},
    { date: '11/05', revenue: 55.90},
    { date: '12/05', revenue: 124.55},
    { date: '13/05', revenue: 500},
    { date: '14/05', revenue: 1500},
    { date: '15/05', revenue: 874},
    { date: '16/05', revenue: 2315},
]

type ExpenseItem = {
    date: string;
    revenue: number;
}

function sumExpenses(data: ExpenseItem[]): number {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
        total += data[i].revenue;
    }
    return total;
}

export const totalExpenses = sumExpenses(expensesData);


export function ExpensesChart() {
    return(
        <Card className="col-span-6">

            <CardHeader className="flex-row items-center justify-between pb-8">
                <div className="space-y-1">
                    <CardTitle className="text-base font-medium">Despesa no Período</CardTitle>
                    <CardDescription>Despesa diária no período</CardDescription>
                </div>
            </CardHeader>

            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <LineChart data={expensesData} style={{fontSize: 12}}>

                        <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16}/>

                        <YAxis 
                            stroke="#888" 
                            axisLine={false} 
                            tickLine={false}
                            width={80} 
                            tickFormatter={(value: number) => 
                                value.toLocaleString('pt-BR', {
                                    style: 'currency', 
                                    currency: 'BRL',
                                })
                            }
                        />

                        <CartesianGrid vertical={false} className="stroke-muted"/>

                        <Line stroke={colors.red[500]} type="linear" strokeWidth={2} dataKey="revenue"/> 

                    </LineChart>
                </ResponsiveContainer>
            </CardContent>

        </Card>
    )
}