import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';


const data = [
    { signature: 'silver', amount: 35},
    { signature: 'gold', amount: 50},
    { signature: 'platinum', amount: 10},
]

const COLORS = [
    '#C0C0C0',
    '#FFD700',
    '#E5E4E2',
]

export function PopularSubsCriptionChart() {
    return(
        <Card className="col-span-3">

            <CardHeader className="pb-8">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-medium">Plano mais assinado</CardTitle>
                    <BarChart className="w-4 h-4 text-muted-foreground"/>
                </div>
            </CardHeader>

            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <PieChart data={data} style={{fontSize: 12}}>

                        <Pie 
                            data={data} 
                            dataKey="amount" 
                            nameKey="signature" 
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

                                return (
                                    <text
                                    x={x}
                                    y={y}
                                    className="fill-muted-foreground text-xs"
                                    textAnchor={x > cx ? 'start' : 'end'}
                                    dominantBaseline="central"
                                    >
                                        {data[index].signature.length > 12
                                            ? data[index].signature.substring(0, 12).concat('...')
                                            : data[index].signature}{' '}
                                        ({value})
                                    </text>
                                )
                            }}>
                            
                        
                                {data.map((_, index) => {
                                    return(
                                        <Cell key={'cell-${index}'} fill={COLORS[index]} className="stroke-background hover:opacity-80"/>
                                    )
                                })}
                        </Pie>

                    </PieChart>
                </ResponsiveContainer>
            </CardContent>

        </Card>
    )
}