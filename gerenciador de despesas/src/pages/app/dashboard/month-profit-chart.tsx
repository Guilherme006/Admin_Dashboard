import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import colors from "tailwindcss/colors";
import { totalRevenue } from "./revenue-chart";
import { totalExpenses } from "./expenses-chart";

// Formatação dos valores em BRL
const formattedTotalRevenue = totalRevenue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const formattedTotalExpenses = totalExpenses.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const data = [
    { title: 'Receitas', amount: totalRevenue},
    { title: 'Despesas', amount: totalExpenses},
]

const COLORS = [
    colors.green[500],
    colors.red[500],
]

export function MonthProfitChart() {
    return(
        <Card className="col-span-3">
            <CardHeader className="pb-8">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-medium">Relação Receita x Despesa/Custo no Período</CardTitle>
                    <BarChart className="w-4 h-4 text-muted-foreground"/>
                </div>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <PieChart data={data} style={{fontSize: 12}}>
                        <Pie 
                            data={data} 
                            dataKey="amount" 
                            nameKey="title" 
                            cx="50%" 
                            cy="50%" 
                            outerRadius={86} 
                            innerRadius={64} 
                            strokeWidth={8}
                            labelLine={false}
                            label={({
                                cx,
                                cy,
                                midAngle,
                                innerRadius,
                                outerRadius,
                                value,
                                index,
                            }) => {
                                const RADIAN = Math.PI / 180
                                const radius = 12 + innerRadius + (outerRadius - innerRadius)
                                const x = cx + radius * Math.cos(-midAngle * RADIAN)
                                const y = cy + radius * Math.sin(-midAngle * RADIAN)
                                
                                
                                const formattedValue = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

                                return (
                                    <text
                                    x={x}
                                    y={y}
                                    className="fill-muted-foreground text-xs"
                                    textAnchor={x > cx ? 'start' : 'end'}
                                    dominantBaseline="central"
                                    >
                                        {data[index].title.length > 12
                                            ? data[index].title.substring(0, 12).concat('...')
                                            : data[index].title}{' '}
                                        ({formattedValue})
                                    </text>
                                )
                            }}>
                            
                                {data.map((_, index) => {
                                    return(
                                        <Cell key={`cell-${index}`} fill={COLORS[index]} className="stroke-background hover:opacity-80"/>
                                    )
                                })}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}
