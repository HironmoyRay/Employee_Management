const DateLog = () => {
  return (
    <div className="mx-4 mt-10">
      <div className="flex gap-10 font-semibold text-xl">
        <h1>TIMELINE</h1>
        <h1>19-MAR</h1>
      </div>
      <div className="ps-32 mt-8">
        <table className="border-2 border-SECONDARY-light ">
          <thead>
            <th className="w-40 p-0 h-10">TIME</th>
            <th className="w-40 p-0 h-10">ACTIVITY</th>
            <th className="w-40 p-0 h-10">PLACE</th>
          </thead>
          <tbody className="text-center text-WHITE">
            <tr className="">
              <td className="w-40 ">
                <div className="h-6 bg-SECONDARY">9.00 AM</div>
                <div className="h-6 "></div>
              </td>
              <td className="w-40 ">
                <div className="h-6 bg-SECONDARY">ENTER</div>
                <div className="h-6 "></div>
              </td>
              <td className="w-40 ">
                <div className="h-6 bg-SECONDARY">SITE 1</div>
                <div className="h-6 "></div>
              </td>
            </tr>
            <tr className="">
              <td className="w-40 ">
                <div className="h-6 bg-SECONDARY">1.00 AM</div>
                <div className="h-6 "></div>
              </td>
              <td className="w-40 ">
                <div className="h-6 bg-SECONDARY">LEAVE</div>
                <div className="h-6 "></div>
              </td>
              <td className="w-40 ">
                <div className="h-6 bg-SECONDARY">SITE 1</div>
                <div className="h-6 "></div>
              </td>
            </tr>
            <tr className="">
              <td className="w-40 ">
                <div className="h-6 bg-SECONDARY">1.45 PM</div>
                <div className="h-6 "></div>
              </td>
              <td className="w-40 ">
                <div className="h-6 bg-SECONDARY">ENTER</div>
                <div className="h-6 "></div>
              </td>
              <td className="w-40 ">
                <div className="h-6 bg-SECONDARY">SITE 2</div>
                <div className="h-6 "></div>
              </td>
            </tr>
            <tr className="">
              <td className="w-40 ">
                <div className="h-6 bg-SECONDARY">5.45 PM</div>
                <div className="h-6 "></div>
              </td>
              <td className="w-40 ">
                <div className="h-6 bg-SECONDARY">LEAVE</div>
                <div className="h-6 "></div>
              </td>
              <td className="w-40 ">
                <div className="h-6 bg-SECONDARY">SITE 2</div>
                <div className="h-6 "></div>
              </td>
            </tr>

           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DateLog;
