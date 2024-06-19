
import { Helmet } from "react-helmet-async";
import { MonthRevenueCard } from "./month-revenue-card";
import { MonthSubscriptionsAmountCard } from "./month-subscriptions-amount-card";
import { DaySubscriptionsAmountCard } from "./day-subscription-amount-card";
import { MonthCanceledSubscriptionsAmountCard } from "./month-canceled-subscriptions-amount-card";
import { RevenueChart } from "./revenue-chart";
import { PopularSubsCriptionChart } from "./popular-subscription-chart";
import { MonthExpensesCard } from "./month-expenses-card";
import { ExpensesChart } from "./expenses-chart";
import { MonthProfitChart } from "./month-profit-chart";

export function Dashboard() {
    return (
        <>
            <Helmet title="Dashboard"/>

            <div className="flex flex-col gap-4">

                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

                <div className="grid grid-cols-4 gap-4">

                    <MonthRevenueCard/>
                    <MonthExpensesCard/>
                    <MonthSubscriptionsAmountCard/>
                    <DaySubscriptionsAmountCard/>
                    <MonthCanceledSubscriptionsAmountCard/>

                </div>

                <div className="grid grid-cols-9 gap-4">
                    <RevenueChart/>
                    <PopularSubsCriptionChart/>
                    <ExpensesChart/>
                    <MonthProfitChart/>
                </div>

            </div>
        </>
    )
}