import BarChart from "./BarChart"
import info from '../API/data.json';

const ChartContainer = () => {

    const sum = info.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.amount;
      }, 0);

  return (
    <div className="bg-Very-pale-orange p-5 mt-5 rounded-lg">
        <h2 className="text-[24px] font-bold mb-10">Spending - Last 7 days</h2>
         <BarChart />
        <hr className="border-Medium-brown my-5" />
        <div className="flex justify-between">
            <div className="text-center">
                <h3 className="text-Medium-brown">Total this month</h3>
                <h3 className="text-[28px] font-bold text-Dark-brown">$ {sum}</h3>
            </div>
            <div className="text-right flex flex-col justify-end">
                <article className="text-Dark-brown font-semibold">+2.4%</article>
                <h3 className="text-Medium-brown">from last month</h3>
            </div>
        </div>
   </div>
  )
}

export default ChartContainer
